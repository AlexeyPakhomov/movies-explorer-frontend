import { useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';
import { DATA_UPDATE } from '../../utils/constants';
import Header from '../Header/Header';
import './Profile.css';

function Profile({
  onUpdateUser,
  onLogOut,
  error,
  textError,
  setError,
  profileUpdated,
  isLoading,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  const { name, email } = values;

  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, email });
    resetForm(currentUser);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <section className="profile">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <form
                className="profile__form"
                name="profileForm"
                onSubmit={handleSubmit}>
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
                    value={name || ''}
                    onChange={(e) => {
                      setError(false);
                      handleChange(e);
                    }}
                    disabled={isLoading}
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
                    value={email || ''}
                    onChange={(e) => {
                      setError(false);
                      handleChange(e);
                    }}
                    disabled={isLoading}
                  />
                  <span className="profile__input-error profile__input-error_bottom">
                    {errors.email}
                  </span>
                </div>

                {profileUpdated && (
                  <p className="error-message error-message_profile">{DATA_UPDATE}</p>
                )}

                {error && <p className="error-message error-message_profile">{textError}</p>}

                {!isValid ? (
                  <p className="profile__edit link">Редактировать</p>
                ) : (
                  <button
                    className="profile__edit_ok link-btn"
                    type="submit"
                    disabled={!isValid}>
                    Сохранить
                  </button>
                )}
                <button
                  className="profile__exit link"
                  type="button"
                  onClick={onLogOut}>
                  Выйти из аккаунта
                </button>
              </form>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
