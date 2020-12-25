import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as serviseApi from '../services/movies-api';
import s from './View.module.css';

export default function Review() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    serviseApi
      .fetchReviewsMovies(movieId)
      .then(({ results }) => setReview(results));
  }, []);
  return (
    <>
      <h2>Review</h2>

      <ul className={s.list}>
        {reviews ? (
          reviews.map(review => (
            <li key={review.author}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movies</p>
        )}
      </ul>
    </>
  );
}
