import s from './MoviesList.module.css';
import { Link, useRouteMatch } from 'react-router-dom';
export default function MoviesList({ movies }) {
  const { url } = useRouteMatch();

  const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
  return (
    <ul className={s.moviesList}>
      {movies.map(({ poster_path, title, id, release_date }) => (
        <li key={id} className={s.moviesItem}>
          <Link to={`movies/${id}`}>
            <img src={`${IMG_URL}${poster_path}`} alt={title} />
            <div className={s.text}>
              <p>{title}</p>
              <p>{release_date}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
