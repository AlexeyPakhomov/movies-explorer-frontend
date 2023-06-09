import Header from '../Header/Header';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { patternEmail } from '../../utils/constants';
import './Profile.css';

function Profile({ loggedIn }) {
  const { values, handleChange, errors } = useFormAndValidation();

  const { name, email } = values;

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлено');
  }
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <section className="profile">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form className="profile__form" name="profileForm" onSubmit={handleSubmit}>
            <div className="profile__row">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                form="profileForm"
                name="name"
                minLength="2"
                maxLength="30"
                required
                placeholder="Виталий"
                value={name || ''}
                onChange={handleChange}
              />
              <span className="profile__input-error">{errors.name}</span>
            </div>
            <hr className="profile__line" />
            <div className="profile__row">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                form="profileForm"
                name="email"
                required
                placeholder="pochta@yandex.ru"
                pattern={patternEmail}
                value={email || ''}
                onChange={handleChange}
              />
              <span className="profile__input-error profile__input-error_bottom">
                {errors.email}
              </span>
            </div>

            {!name || !email ? (
              <p className="profile__edit link">Редактировать</p>
            ) : (
              <button className="profile__edit_ok link-btn" type="submit">
                Сохранить
              </button>
            )}
            <button className="profile__exit link" type="button">
              Выйти из аккаунта
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
