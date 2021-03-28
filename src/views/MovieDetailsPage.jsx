import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  NavLink,
  useRouteMatch,
  useHistory,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as serviseApi from '../services/movies-api';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import DEFAULT_IMAGE from '../images/imageNotFound.png';
import s from './View.module.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const location = useLocation();
  const history = useHistory();
  const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

  const handleGoBack = () => {
    if (!location.state) {
      history.push('/');
      return;
    }
    history.push({ ...location.state.from });
  };

  useEffect(() => {
    serviseApi
      .fetchDetailsMovies(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      <button type="button" className={s.button} onClick={handleGoBack}>
        Go to back
      </button>
      {movie ? (
        <div>
          <div className={s.imageBlockDetails}>
            {movie.poster_path ? (
              <img
                loading="lazy"
                src={`${IMG_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img src={DEFAULT_IMAGE} alt={movie.title} />
            )}

            <div className={s.imageText}>
              <h2>{movie.title}</h2>
              <p>User Score {movie.vote_average * 10}%</p>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className={s.genre}>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <li key={genre.id} className={s.genresItem}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <hr />
          <h3>Additional information</h3>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            <h4>Cast</h4>
          </NavLink>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            <h4>Reviews</h4>
          </NavLink>
          <hr />
        </div>
      ) : (
        <h1>Content not found</h1>
      )}
      <Route path={`${path}/cast`}>
        <Cast movieId={movieId} />
      </Route>

      <Route path={`${path}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}

MovieDetailsPage.protoTypes = {
  movie: PropTypes.object,
};

export default MovieDetailsPage;
