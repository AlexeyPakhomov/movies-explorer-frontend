import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { NOT_FOUND_MOVIE } from '../../utils/constants';
import './SavedMovies.css';

function SavedMovies({
  savedMovies,
  getMoviesData,
  saveMovieIcon,
  deleteMovie,
  notFoundMovies,
  loggedIn,
  isLoading,
  changeSwitch,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm
          getMoviesData={getMoviesData}
          isLoading={isLoading}
          changeSwitch={changeSwitch}
        />

        {isLoading ? (
          <Preloader />
        ) : (
          savedMovies && (
            <MoviesCardList
              savedMovies={savedMovies}
              saveMovieIcon={saveMovieIcon}
              deleteMovie={deleteMovie}
            />
          )
        )}

        {notFoundMovies ? <p className="error-message">{NOT_FOUND_MOVIE}</p> : ''}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
