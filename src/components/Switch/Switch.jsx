import './Switch.css';

function Switch() {
  return (
    <div className="switch">
      <label className="switch__container">
        <input className="switch__input" type="checkbox" />
        <span className="switch__slider"></span>
      </label>
      <p className="switch__title">Короткометражки</p>
    </div>
  );
}

export default Switch;
