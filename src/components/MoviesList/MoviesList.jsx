import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

function MoviesList({ movies, location }) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

  return (
    <ul className={s.moviesList}>
      {movies.map(({ poster_path, title, id, release_date, original_name }) => (
        <li key={id} className={s.moviesItem}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <img src={`${IMG_URL}${poster_path}`} alt={title} />
            <div className={s.text}>
              {title ? <p>{title}</p> : <p>{original_name}</p>}
              <p>{release_date}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.protoTypes = {
  movies: PropTypes.array,
};

export default withRouter(MoviesList);
