import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Switch from '../Switch/Switch';
import './SearchForm.css';

function SearchForm({ getMoviesData, isLoading }) {
  const [searchMovie, setSearchMovie] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (searchMovie) {
      setError(false);
    }
  }, [searchMovie]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      const movieInput = localStorage.getItem('searchMovie');
      setSearchMovie(movieInput);
      const switchValue = localStorage.getItem('switch');
      if (switchValue === 'true') {
        setIsChecked(true);
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    setSearchMovie(e.target.value);
  };

  const handleSwitchChange = (e) => {
    setIsChecked(e.target.checked);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchMovie) {
      setError(true);
    } else {
      getMoviesData(searchMovie, isChecked);
    }
  }

  return (
    <section className="search">
      <form
        className="search__form"
        name="searchMovies"
        onSubmit={handleSubmit}>
        <div className="search__container">
          <input
            className="search__input"
            form="searchMovies"
            type="text"
            name="searchMovie"
            placeholder="Фильм"
            onChange={handleInputChange}
            value={searchMovie || ''}
            disabled={isLoading}
          />

          {error && <span className="search__form-input-error">Нужно ввести ключевое слово</span>}
          <button
            className="search__btn link"
            type="submit">
            Поиск
          </button>
        </div>
        <Switch
          isChecked={isChecked}
          handleSwitchChange={handleSwitchChange}
          isLoading={isLoading}
        />
      </form>
    </section>
  );
}

export default SearchForm;
