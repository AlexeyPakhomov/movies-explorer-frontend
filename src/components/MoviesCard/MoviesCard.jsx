import { useLocation } from 'react-router-dom';
import getTime from '../../utils/getTime';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const location = useLocation();

  return (
    <li>
      <article className="card">
        <div className="card__info">
          <h3 className="card__title">{movie.nameRU}</h3>
          <p className="card__duration">{getTime(movie.duration)}</p>

          {location.pathname === '/movies' && (
            <button
              className={movie.save ? 'card__not-saved card__saved link' : 'card__not-saved link'}
              type="button"></button>
          )}

          {location.pathname === '/saved-movies' && (
            <button className="card__not-saved card__delete link" type="button"></button>
          )}
        </div>
        <div className="card__poster">
          <img className="card__img" src={movie.thumbnail} alt={movie.nameRU} />
        </div>
      </article>
    </li>
  );
}

export default MoviesCard;
