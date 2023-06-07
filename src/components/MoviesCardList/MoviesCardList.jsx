import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ moviesData }) {
  const location = useLocation();

  const saveMovie = moviesData.filter((saveMovie) => saveMovie.save);

  return (
    <>
      <section
        className={
          location.pathname === '/saved-movies'
            ? 'movies-card-list cards-saved'
            : 'movies-card-list'
        }>
        <div className="movies-card-list__centr">
          <ul className="movies-card-list__container list">
            {location.pathname === '/movies' &&
              moviesData.map((movie) => <MoviesCard key={movie.movieId} movie={movie} />)}

            {location.pathname === '/saved-movies' &&
              saveMovie.map((saveMovie) => (
                <MoviesCard key={saveMovie.movieId} movie={saveMovie} />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default MoviesCardList;
