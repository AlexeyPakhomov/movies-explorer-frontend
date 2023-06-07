import { useState } from 'react';
import { Link } from 'react-router-dom';
import iconCloseMenu from '../../images/btn_close.svg';
import BtnAccount from '../BtnAccount/BtnAccount';
import './SideMenu.css';

function SideMenu() {
  const [isSideMenu, setIsSideMenu] = useState(false);

  function handleToggleMenu() {
    setIsSideMenu(!isSideMenu);
  }

  return (
    <>
      <button className="header__burger link" onClick={handleToggleMenu}>
        <span></span>
      </button>
      <nav className={`side-menu ${isSideMenu ? 'side-menu_opened' : ''}`}>
        <div className={`side-menu__container ${isSideMenu ? 'side-menu_opened' : ''}`}>
          <button className="side-menu__close" type="button" onClick={handleToggleMenu}>
            <img
              className="side-menu__close-img link"
              src={iconCloseMenu}
              alt="Кнопка закрытия окна"
            />
          </button>
          <ul className="side-menu__list list">
            {}
            <Link to="/" className="side-menu__link" onClick={handleToggleMenu}>
              <li className="side-menu__item">Главная</li>
            </Link>
            <Link to="/movies" className="side-menu__link" onClick={handleToggleMenu}>
              <li className="side-menu__item">Фильмы</li>
            </Link>
            <Link to="/saved-movies" className="side-menu__link" onClick={handleToggleMenu}>
              <li className="side-menu__item">Сохранённые фильмы</li>
            </Link>
          </ul>
          <BtnAccount />
        </div>
      </nav>
    </>
  );
}

export default SideMenu;
