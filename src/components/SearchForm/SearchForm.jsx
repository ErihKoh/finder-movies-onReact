import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [moviesQuery, setMoviesQuery] = useState('');

  const handleNameChange = event => {
    setMoviesQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (moviesQuery.trim() === '') {
      toast.error('Введите запрос.');
      return;
    }

    onSubmit(moviesQuery);
    setMoviesQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="imageQuery"
          value={moviesQuery}
          onChange={handleNameChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

SearchForm.protoTypes = {
  moviesQuery: PropTypes.string,
  onSubmit: PropTypes.func,
};
