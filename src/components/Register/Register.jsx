import SignForm from '../SignForm/SignForm';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';
import './Register.css';

function Register({ onSignUp, error, setError, textError, isLoading }) {
  const { values, handleChange, errors, setValues, signUpBtnValid } = useFormAndValidation();

  const { name, email, password } = values;

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
                className="sign__form-input"
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
            <span className="sign__form-input-error">{errors.name}</span>

            <label className="sign__form-label">
              E-mail
              <input
                className="sign__form-input"
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
            <span className="sign__form-input-error">{errors.email}</span>

            <label className="sign__form-label">
              Пароль
              <input
                className="sign__form-input"
                form="signUpForm"
                type="password"
                name="password"
                minLength="8"
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
            <span className="sign__form-input-error">{errors.password}</span>
            {error && <p className="error-message error-message_sign">{textError}</p>}

            <button
              className="sign__button link-btn"
              type="submit"
              disabled={signUpBtnValid}>
              Зарегистрироваться
            </button>
          </form>
        </SignForm>
      )}
    </>
  );
}

export default Register;
