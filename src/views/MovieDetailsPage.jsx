import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as serviseApi from '../services/movies-api';
import Cats from '../views/Cast';
import Reviews from '../views/Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
          {movie.genres &&
            movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          <NavLink to="">
            <p>Casts</p>
          </NavLink>
          <NavLink to="">
            <p>Reviews</p>
          </NavLink>
        </div>
      )}
      <Route path="">
        <Cats />
      </Route>

      <Route path="">
        <Reviews />
      </Route>
    </>
  );
}
