import SignForm from '../SignForm/SignForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { patternEmail } from '../../utils/constants';
import './Register.css';

function Register() {
  const { values, handleChange, errors, setValues } = useFormAndValidation();

  const { name, email, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлено');
    setValues({ name: '', email: '', password: '' });
  }

  return (
    <SignForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы? "
      linkText="Войти">
      <form className="sign__form" name="signUpForm" onSubmit={handleSubmit}>
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
            onChange={handleChange}
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
            form="signUpForm"
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
          className="sign__button link-btn"
          type="submit"
          disabled={!name || !email || !password}>
          Войти
        </button>
      </form>
    </SignForm>
  );
}

export default Register;
