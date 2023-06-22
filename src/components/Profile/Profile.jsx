import { useContext, useEffect, useState } from 'react';
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
  const [inputDisabled, setInputDisabled] = useState(true);

  const { values, nameError, emailError, isValid, setIsValid, handleChange, resetForm } =
    useFormAndValidation({ name: currentUser.name, email: currentUser.email });

  const { name, email } = values;

  function handleToggleInput() {
    setInputDisabled(!inputDisabled);
    setError(false);
  }

  useEffect(() => {
    setIsValid(false);
  }, [setIsValid]);

  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, email });
    resetForm(currentUser);
    setInputDisabled(true);
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
                    disabled={inputDisabled}
                  />
                  {nameError && <span className="profile__input-error">{nameError}</span>}
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
                    disabled={inputDisabled}
                  />
                  {emailError && (
                    <span className="profile__input-error profile__input-error_bottom">
                      {emailError}
                    </span>
                  )}
                </div>

                {profileUpdated && (
                  <p className="error-message error-message_profile">{DATA_UPDATE}</p>
                )}

                {error && <p className="error-message error-message_profile">{textError}</p>}

                <p
                  className={`profile__edit link ${
                    inputDisabled ? '' : 'profile__edit profile__edit_hide'
                  }`}
                  onClick={handleToggleInput}>
                  Редактировать
                </p>
                <button
                  className={`profile__edit_ok link-btn ${
                    inputDisabled ? 'profile__edit_ok-hide' : ''
                  }`}
                  type="submit"
                  disabled={!isValid || (currentUser.name === name && currentUser.email === email)}>
                  Сохранить
                </button>

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
