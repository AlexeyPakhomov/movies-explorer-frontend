import { useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import SignForm from '../SignForm/SignForm';
import Preloader from '../Preloader/Preloader';
import './Register.css';

function Register({ onSignUp, error, setError, textError, isLoading }) {
  const {
    values,
    setValues,
    nameError,
    emailError,
    passwordError,
    isValid,
    setIsValid,
    handleChange,
  } = useFormAndValidation({ name: '', email: '', password: '' });

  const { name, email, password } = values;

  useEffect(() => {
    setIsValid(false);
  }, [setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onSignUp({ name, email, password });
    setValues({ name: '', email: '', password: '' });
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <SignForm
          title="Добро пожаловать!"
          buttonText="Зарегистрироваться"
          text="Уже зарегистрированы? "
          linkText="Войти"
          isLoading={isLoading}>
          <form
            className="sign__form"
            name="signUpForm"
            onSubmit={handleSubmit}>
            <label className="sign__form-label">
              Имя
              <input
                className={`sign__form-input ${nameError ? 'sign__form-input_error' : ''}`}
                form="signUpForm"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                required
                placeholder="Виталий"
                value={name || ''}
                onChange={(e) => {
                  setError(false);
                  handleChange(e);
                }}
                disabled={isLoading}
              />
            </label>
            {nameError && <span className="sign__form-input-error">{nameError}</span>}

            <label className="sign__form-label">
              E-mail
              <input
                className={`sign__form-input ${emailError ? 'sign__form-input_error' : ''}`}
                form="signUpForm"
                type="email"
                name="email"
                required
                placeholder="pochta@yandex.ru"
                value={email || ''}
                onChange={(e) => {
                  setError(false);
                  handleChange(e);
                }}
                disabled={isLoading}
              />
            </label>
            {emailError && <span className="sign__form-input-error">{emailError}</span>}

            <label className="sign__form-label">
              Пароль
              <input
                className={`sign__form-input ${passwordError ? 'sign__form-input_error' : ''}`}
                form="signUpForm"
                type="password"
                name="password"
                required
                placeholder="Пароль"
                value={password || ''}
                onChange={(e) => {
                  setError(false);
                  handleChange(e);
                }}
                disabled={isLoading}
              />
            </label>
            {passwordError && <span className="sign__form-input-error">{passwordError}</span>}
            {error && <p className="error-message error-message_sign">{textError}</p>}

            <button
              className="sign__button link-btn"
              type="submit"
              disabled={!isValid}>
              Зарегистрироваться
            </button>
          </form>
        </SignForm>
      )}
    </>
  );
}

export default Register;
