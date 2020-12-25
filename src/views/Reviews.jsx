import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as serviseApi from '../services/movies-api';

export default function Review() {
  const { movieId } = useParams();
  //   const [movie, setMovie] = useState(null);

  useEffect(() => {
    serviseApi.fetchReviewsMovies(movieId).then(console.log);
  }, []);
  return (
    <>
      <h2>Review{movieId}</h2>
    </>
  );
}
