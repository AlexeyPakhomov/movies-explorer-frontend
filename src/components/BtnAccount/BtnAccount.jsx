import { Link } from 'react-router-dom';
import iconAccount from '../../images/account_img.svg';
import './BtnAccount.css';

function BtnAccount({ handleToggleMenu }) {
  return (
    <Link
      to="/profile"
      className="link"
      onClick={handleToggleMenu}>
      <div className="btn-account link">
        <img
          className="btn-account__img"
          src={iconAccount}
          alt="Аккаунт"
        />
        <p className="btn-account__text">Аккаунт</p>
      </div>
    </Link>
  );
}

export default BtnAccount;
