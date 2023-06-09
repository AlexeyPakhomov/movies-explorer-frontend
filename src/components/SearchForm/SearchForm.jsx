import Switch from '../Switch/Switch';
import './SearchForm.css';

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлено');
  }

  return (
    <section className="search">
      <form className="search__form" name="searchMovies" onSubmit={handleSubmit} noValidate>
        <div className="search__container">
          <input
            className="search__input"
            form="searchMovies"
            type="text"
            name="searchMovies"
            required
            placeholder="Фильм"
          />
          {/*<span className="search__form-input-error"></span>*/}
          <button className="search__btn link" type="submit">
            Поиск
          </button>
        </div>
        <Switch />
      </form>
    </section>
  );
}

export default SearchForm;
