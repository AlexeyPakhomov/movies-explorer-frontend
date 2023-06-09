import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__block">
        <p className="footer__text footer__text_year-320">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links list">
          <li>
            <a
              className="footer__text link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__text link"
              href="https://github.com/AlexeyPakhomov"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
