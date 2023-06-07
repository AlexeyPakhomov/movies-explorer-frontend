import photoMe from '../../images/student.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="section-title">Студент</h2>
      <hr className="section-line" />
      <div className="about-me__student">
        <div className="about-me__student-container">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__githab link"
            href="https://github.com/AlexeyPakhomov"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photoMe} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
