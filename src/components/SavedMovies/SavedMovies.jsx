import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesData from '../../utils/movies';
import './SavedMovies.css';

function SavedMovies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList moviesData={moviesData} />
        <Footer />
      </main>
    </>
  );
}

export default SavedMovies;
