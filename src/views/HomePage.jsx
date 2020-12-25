import { useState, useEffect } from 'react';
import * as serviseApi from '../services/movies-api';
import MoviesList from '../components/MoviesList';

export default function HomePage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    serviseApi.fetchTrendingMovies().then(({ results }) => setResults(results));
  }, []);

  return <MoviesList movies={results} />;
}
