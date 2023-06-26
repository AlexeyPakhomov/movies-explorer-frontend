import { useLocation } from 'react-router-dom';
import { getTime } from '../../utils/getTime';
import { BEATFILM_URL } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({ movie, onSave, saveMovieIcon, deleteMovie }) {
  const location = useLocation();
  const isSave = saveMovieIcon(movie);

  function handleSaveMovie() {
    onSave(movie);
  }

  function handleDeleteMovie() {
    deleteMovie(movie);
  }

  return (
    <li>
      <article className="card">
        <div className="card__info">
          <h3 className="card__title">{movie.nameRU}</h3>
          <p className="card__duration">{getTime(movie.duration)}</p>

          {location.pathname === '/movies' && (
            <button
              className={isSave ? 'card__not-saved card__saved link' : 'card__not-saved link'}
              type="button"
              onClick={handleSaveMovie}></button>
          )}

          {location.pathname === '/saved-movies' && (
            <button
              className="card__not-saved card__delete link"
              type="button"
              onClick={handleDeleteMovie}></button>
          )}
        </div>
        <a
          className="card__poster"
          href={movie.trailerLink}
          target="_blank"
          rel="noreferrer">
          {location.pathname === '/movies' && (
            <img
              className="card__img"
              src={`${BEATFILM_URL}${movie.image.url} `}
              alt={movie.nameRU}
            />
          )}

          {location.pathname === '/saved-movies' && (
            <img
              className="card__img"
              src={movie.image}
              alt={movie.nameRU}
            />
          )}
        </a>
      </article>
    </li>
  );
}

export default MoviesCard;
