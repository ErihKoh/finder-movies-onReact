import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import useStyles from '../services/stylesPagination';
import * as serviseApi from '../services/movies-api';
import MoviesList from '../components/MoviesList';

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    serviseApi
      .fetchTrendingMovies(page)
      .then(({ results, total_pages }) => {
        setResults(results);
        setTotalPage(total_pages);
      })
      .catch(error => console.log(error));
  }, [page]);

  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <>
      <MoviesList movies={results} />

      {totalPage > 1 && (
        <Pagination
          className={classes.root}
          count={totalPage}
          onChange={onHandlePage}
          page={Number(page)}
          showFirstButton
          showLastButton
          size="large"
        />
      )}
    </>
  );
}

HomePage.protoTypes = {
  results: PropTypes.array,
};
