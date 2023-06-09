import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <main className="page-404">
      <h2 className="page-404__title">404</h2>
      <p className="page-404__text">Страница не найдена</p>
      <Link to="/" className="page-404__back">
        Назад
      </Link>
    </main>
  );
}

export default PageNotFound;
