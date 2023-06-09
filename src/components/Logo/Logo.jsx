import { Link } from 'react-router-dom';
import Logotip from '../../images/logo-C.svg';
import './Logo.css';

function Logo() {
  return (
    <Link to="/">
      <img className="header__logo" src={Logotip} alt="Логотип сервиса" />
    </Link>
  );
}

export default Logo;
