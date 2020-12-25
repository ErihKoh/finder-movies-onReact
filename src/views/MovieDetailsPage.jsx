import { useState, useEffect } from 'react';
import { useParams, NavLink, useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as serviseApi from '../services/movies-api';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    serviseApi.fetchDetailsMovies(movieId).then(setMovie);
  }, [movieId]);
  return (
    <>
      {movie && (
        <div>
          <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title}</p>
          <p>User Score {movie.vote_average * 10}%</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          {movie.genres &&
            movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          <p>Additional information</p>
          <NavLink to={`${url}/cast`}>
            <p>Cast</p>
          </NavLink>
          <NavLink to={`${url}/reviews`}>
            <p>Reviews</p>
          </NavLink>
        </div>
      )}
      <Route path="/movies/:movieId/cast">
        <Cast movieId={movieId} />
      </Route>

      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </>
  );
}
