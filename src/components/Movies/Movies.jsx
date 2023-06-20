import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { NOT_FOUND_MOVIE, ERROR_SEARCH_MOVIE } from '../../utils/constants';

function Movies({
  movies,
  getMoviesData,
  onSave,
  saveMovieIcon,
  deleteMovie,
  notFoundMovies,
  error,
  loggedIn,
  isLoading,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm
          getMoviesData={getMoviesData}
          isLoading={isLoading}
        />

        {isLoading ? (
          <Preloader />
        ) : (
          movies && (
            <MoviesCardList
              movies={movies}
              onSave={onSave}
              saveMovieIcon={saveMovieIcon}
              deleteMovie={deleteMovie}
            />
          )
        )}

        {error ? <p className="error-message">{ERROR_SEARCH_MOVIE}</p> : ''}

        {notFoundMovies && <p className="error-message">{NOT_FOUND_MOVIE}</p>}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
