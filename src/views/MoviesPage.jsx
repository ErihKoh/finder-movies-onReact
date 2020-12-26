import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as serviseApi from '../services/movies-api';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import UseSessionStorage from '../hooks/useSessionStorage';

export default function MoviesPage() {
  const [results, setResults] = UseSessionStorage('results', []);
  const [moviesQuery, setMoviesQuery] = useState('');

  useEffect(() => {
    if (moviesQuery === '') {
      return;
    }
    serviseApi
      .fetchSearchMovies(moviesQuery)
      .then(({ results }) => setResults(results));
  }, [moviesQuery]);

  const handleFormSubmit = query => {
    setMoviesQuery(query);
  };

  return (
    <>
      <h2>Enter query</h2>
      <SearchForm onSubmit={handleFormSubmit} />
      <MoviesList movies={results} />
    </>
  );
}

MoviesPage.protoTypes = {
  results: PropTypes.array,
  moviesQuery: PropTypes.string,
};
