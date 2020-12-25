import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as serviseApi from '../services/movies-api';
import MoviesList from '../components/MoviesList';

export default function HomePage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    serviseApi.fetchTrendingMovies().then(({ results }) => setResults(results));
  }, []);

  return <MoviesList movies={results} />;
}

HomePage.protoTypes = {
  results: PropTypes.array,
};
