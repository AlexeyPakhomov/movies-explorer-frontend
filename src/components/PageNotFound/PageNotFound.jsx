import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="page-404">
      <h2 className="page-404__title">404</h2>
      <p className="page-404__text">Страница не найдена</p>
      <button
        className="page-404__back link"
        onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
}

export default PageNotFound;
