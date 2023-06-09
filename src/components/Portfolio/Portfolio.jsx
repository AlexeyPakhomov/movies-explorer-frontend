import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="list">
        <li className="portfolio__item">
          <p className="portfolio__text">Статичный сайт</p>
          <a
            className="portfolio__link link"
            href="https://alexeypakhomov.github.io/Aperture/"
            target="_blank"
            rel="noreferrer">
            {' '}
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">Адаптивный сайт</p>
          <a
            className="portfolio__link link"
            href="https://alexeypakhomov.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer">
            {' '}
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">Одностраничное приложение</p>
          <a
            className="portfolio__link link"
            href="https://mesto-58.nomoredomains.monster"
            target="_blank"
            rel="noreferrer">
            {' '}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
