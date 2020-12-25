import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as serviseApi from '../services/movies-api';

export default function Cast() {
  const { movieId } = useParams();
  //   const [movie, setMovie] = useState(null);

  useEffect(() => {
    serviseApi.fetchCastMovies(movieId).then(console.log);
  }, []);
  return (
    <>
      <h2>Cast{movieId}</h2>
    </>
  );
}
