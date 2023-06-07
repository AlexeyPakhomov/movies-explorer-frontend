import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project" id="about">
      <h2 className="section-title">О проекте</h2>
      <hr className="section-line" />
      <div className="project__columns">
        <div className="project__paragraph">
          <h3 className="project__paragraph-subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="project__paragraph-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="project__paragraph">
          <h3 className="project__paragraph-subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="project__paragraph-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__period-container">
        <p className="project__weeks project__weeks_green">1 неделя</p>
        <p className="project__weeks project__weeks_dark">4 недели</p>
        <p className="project__weeks-caption">Back-end</p>
        <p className="project__weeks-caption">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
