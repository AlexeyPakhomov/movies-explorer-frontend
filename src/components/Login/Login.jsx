import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';
import SignForm from '../SignForm/SignForm';
import '../Register/Register.css';

function Login({ onSignIn, error, setError, textError, isLoading }) {
  const { values, handleChange, errors, setValues, signInBtnValid } = useFormAndValidation();

  const { email, password } = values;

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
                className="sign__form-input"
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
            <span className="sign__form-input-error">{errors.email}</span>

            <label className="sign__form-label">
              Пароль
              <input
                className="sign__form-input"
                form="signInForm"
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
              className={`sign__button sign__button-in link-btn`}
              type="submit"
              disabled={signInBtnValid}>
              Войти
            </button>
          </form>
        </SignForm>
      )}
    </>
  );
}

export default Login;
