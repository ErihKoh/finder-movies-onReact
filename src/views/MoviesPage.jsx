import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function MoviesPage() {
  const { url } = useRouteMatch();

  const [movies, setMovies] = useState(null);

  //   useEffect(() => {
  //     bookShelfAPI.fetchBooks().then(setBooks);
  //   }, []);

  return (
    <>
      <h2>movies</h2>
      {/* 
      {books &&
        books.map(book => (
          <ul>
            <li key={book.id}>
              <Link to={`${url}/${book.id}`}>{book.title}</Link>
            </li>
          </ul>
        ))} */}
    </>
  );
}
