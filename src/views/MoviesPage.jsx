import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import useStyles from '../services/stylesPagination';
import * as serviseApi from '../services/movies-api';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import UseSessionStorage from '../hooks/useSessionStorage';

export default function MoviesPage() {
  const [results, setResults] = UseSessionStorage('results', []);
  const [moviesQuery, setMoviesQuery] = useState('');
  const [totalPage, setTotalPage] = useState(0);

  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    if (moviesQuery === '') {
      return;
    }
    serviseApi
      .fetchSearchMovies(moviesQuery, page)
      .then(({ results, total_pages }) => {
        setResults(results);
        setTotalPage(total_pages);
      })
      .catch(error => console.log(error));
  }, [moviesQuery, setResults, page]);

  const handleFormSubmit = query => {
    setMoviesQuery(query);
  };

  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <>
      <h2>Enter query</h2>
      <SearchForm onSubmit={handleFormSubmit} />
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

MoviesPage.protoTypes = {
  results: PropTypes.array,
  moviesQuery: PropTypes.string,
};
