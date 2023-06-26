import { useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';
import SignForm from '../SignForm/SignForm';
import '../Register/Register.css';

function Login({ onSignIn, error, setError, textError, isLoading }) {
  const { values, setValues, emailError, passwordError, isValid, setIsValid, handleChange } =
    useFormAndValidation({
      email: '',
      password: '',
    });

  const { email, password } = values;

  useEffect(() => {
    setIsValid(false);
  }, [setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn({ email, password });
    setValues({ email: '', password: '' });
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <SignForm
          title="Рады видеть!"
          text="Ещё не зарегистрированы? "
          linkText="Регистрация"
          isLoading={isLoading}>
          <form
            className="sign__form"
            name="signInForm"
            onSubmit={handleSubmit}>
            <label className="sign__form-label">
              E-mail
              <input
                className={`sign__form-input ${emailError ? 'sign__form-input_error' : ''}`}
                form="signInForm"
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
                form="signInForm"
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
              className={`sign__button sign__button-in link-btn`}
              type="submit"
              disabled={!isValid}>
              Войти
            </button>
          </form>
        </SignForm>
      )}
    </>
  );
}

export default Login;
