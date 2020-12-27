import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as serviseApi from '../services/movies-api';
import s from './View.module.css';

export default function Review() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    serviseApi
      .fetchReviewsMovies(movieId)
      .then(({ results }) => setReview(results))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      <h2>Reviews</h2>
      {reviews.length !== 0 ? (
        <ul className={s.list}>
          {reviews.map(review => (
            <li key={review.author}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movies</p>
      )}
    </>
  );
}

Review.protoTypes = {
  review: PropTypes.array,
};
