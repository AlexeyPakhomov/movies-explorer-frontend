import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav">
      <ul className="nav-tab list">
        <li className="nav-tab__item">
          <a className="nav-tab__text link" href="#about">
            О проекте
          </a>
        </li>
        <li className="nav-tab__item">
          <a className="nav-tab__text link" href="#technologies">
            Технологии
          </a>
        </li>
        <li className="nav-tab__item">
          <a className="nav-tab__text link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
