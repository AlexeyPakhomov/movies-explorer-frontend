import SignForm from '../SignForm/SignForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { patternEmail } from '../../utils/constants';
import '../Register/Register.css';

function Login() {
  const { values, handleChange, errors, setValues } = useFormAndValidation();

  const { email, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлено');
    setValues({ email: '', password: '' });
  }

  return (
    <SignForm title="Рады видеть!" text="Ещё не зарегистрированы? " linkText="Регистрация">
      <form className="sign__form" name="signInForm" onSubmit={handleSubmit}>
        <label className="sign__form-label">
          E-mail
          <input
            className="sign__form-input"
            form="signInForm"
            type="email"
            name="email"
            required
            placeholder="pochta@yandex.ru"
            pattern={patternEmail}
            value={email || ''}
            onChange={handleChange}
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
            required
            placeholder="Пароль"
            value={password || ''}
            onChange={handleChange}
          />
        </label>
        <span className="sign__form-input-error">{errors.password}</span>
        <button
          className={`sign__button sign__button-in link-btn`}
          type="submit"
          disabled={!email || !password}>
          Войти
        </button>
      </form>
    </SignForm>
  );
}

export default Login;
