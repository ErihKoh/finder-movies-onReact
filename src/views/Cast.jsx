import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as serviseApi from '../services/movies-api';
import s from './View.module.css';
import DEFAULT_IMAGE from '../images/notFound.png';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    serviseApi.fetchCastMovies(movieId).then(({ cast }) => setCast(cast));
  }, []);
  return (
    <>
      <h2>Cast</h2>
      <ul className={s.list}>
        {cast &&
          cast.map(actor => (
            <li key={actor.name} className={s.item}>
              {actor.profile_path ? (
                <img
                  src={`${IMG_URL}${actor.profile_path}`}
                  alt={actor.name}
                  className={s.profileImage}
                />
              ) : (
                <img
                  src={DEFAULT_IMAGE}
                  alt={actor.name}
                  className={s.profileImage}
                />
              )}
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

Cast.protoTypes = {
  cast: PropTypes.array,
};
