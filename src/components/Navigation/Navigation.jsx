import { Link } from 'react-router-dom';
import BtnAccount from '../BtnAccount/BtnAccount';
import SideMenu from '../SideMenu/SideMenu';
import './Navigation.css';

function Navigation({ loggedIn }) {
  return (
    <>
      {loggedIn ? (
        <>
          <div className="header__main">
            <div className="header__main-container">
              <Link to="/movies" className="header__main-btn-movie link link_selected">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="header__main-save-movie link">
                Сохранённые фильмы
              </Link>
            </div>
            <BtnAccount />
          </div>
          <SideMenu />
        </>
      ) : (
        <div className="header__landing">
          <Link to="/signup" className=" header__landing-sign-up link">
            Регистрация
          </Link>
          <Link to="signin">
            <button className="header__landing-sign-in link" type="button">
              Войти
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Navigation;
