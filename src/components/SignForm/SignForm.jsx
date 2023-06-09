import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './SignForm.css';

function SignForm({ title, children, text, linkText }) {
  const location = useLocation();

  return (
    <main className="sign">
      <Logo />
      <h1 className="sign__title">{title}</h1>

      {children}

      <p className="sign__text">
        {text}

        {location.pathname === '/signup' && (
          <Link to="/signin" className="sign__link link">
            {linkText}
          </Link>
        )}

        {location.pathname === '/signin' && (
          <Link to="/signup" className="sign__link link">
            {linkText}
          </Link>
        )}
      </p>
    </main>
  );
}

export default SignForm;
