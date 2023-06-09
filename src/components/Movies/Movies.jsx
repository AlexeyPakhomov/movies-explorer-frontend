import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';
import moviesData from '../../utils/movies';

function Movies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList moviesData={moviesData} />
      <Pagination />
      <Footer />
    </>
  );
}

export default Movies;
