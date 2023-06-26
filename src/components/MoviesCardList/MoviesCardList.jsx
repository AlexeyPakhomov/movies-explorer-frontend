import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import {
  SCREEN_1280,
  SCREEN_1280_SHOW_MOVIES,
  SCREEN_1280_ADD_MOVIES,
  SCREEN_768,
  SCREEN_768_SHOW_MOVIES,
  SCREEN_768_ADD_MOVIES,
  SCREEN_767MAX_SHOW_MOVIES,
  SCREEN_767MAX_ADD_MOVIES,
} from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import Pagination from '../Pagination/Pagination';
import './MoviesCardList.css';

function MoviesCardList({ movies, savedMovies, onSave, deleteMovie, saveMovieIcon }) {
  const location = useLocation();
  const widthScreen = useResize();
  const [moviesCountStart, setMovieCountStart] = useState(0);
  const [moviesCountAdd, setMoviesCountAdd] = useState(0);

  function showAddCards() {
    setMovieCountStart(moviesCountStart + moviesCountAdd);
  }

  //Счетчик первичного отображения фильмов
  useEffect(() => {
    if (widthScreen >= SCREEN_1280) {
      setMovieCountStart(SCREEN_1280_SHOW_MOVIES);
      setMoviesCountAdd(SCREEN_1280_ADD_MOVIES);
    }
    if ((widthScreen >= SCREEN_768) & (widthScreen < SCREEN_1280)) {
      setMovieCountStart(SCREEN_768_SHOW_MOVIES);
      setMoviesCountAdd(SCREEN_768_ADD_MOVIES);
    }
    if (widthScreen < SCREEN_768) {
      setMovieCountStart(SCREEN_767MAX_SHOW_MOVIES);
      setMoviesCountAdd(SCREEN_767MAX_ADD_MOVIES);
    }
  }, [widthScreen, location]);

  return (
    <section
      className={
        location.pathname === '/saved-movies' ? 'movies-card-list cards-saved' : 'movies-card-list'
      }>
      {location.pathname === '/movies' && (
        <div className="movies-card-list__centr">
          <ul className="movies-card-list__container list">
            {movies.length > moviesCountStart
              ? movies.slice(0, moviesCountStart).map((movie) => {
                  return (
                    <MoviesCard
                      key={movie.id}
                      movie={movie}
                      onSave={onSave}
                      saveMovieIcon={saveMovieIcon}
                      deleteMovie={deleteMovie}
                    />
                  );
                })
              : movies.map((movie) => {
                  return (
                    <MoviesCard
                      key={movie.id}
                      movie={movie}
                      onSave={onSave}
                      saveMovieIcon={saveMovieIcon}
                      deleteMovie={deleteMovie}
                    />
                  );
                })}
          </ul>
          {movies.length <= moviesCountStart ? '' : <Pagination onClick={showAddCards} />}
        </div>
      )}

      {location.pathname === '/saved-movies' && (
        <div className="movies-card-list__centr">
          <ul className="movies-card-list__container list">
            {savedMovies.map((saveMovie) => (
              <MoviesCard
                key={saveMovie.movieId}
                movie={saveMovie}
                saveMovieIcon={saveMovieIcon}
                deleteMovie={deleteMovie}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
