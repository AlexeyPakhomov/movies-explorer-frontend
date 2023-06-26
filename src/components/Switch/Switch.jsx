import './Switch.css';

function Switch({ isChecked, handleSwitchChange, isLoading }) {
  return (
    <div className="switch">
      <label className="switch__container">
        <input
          className="switch__input"
          type="checkbox"
          checked={isChecked}
          onChange={handleSwitchChange}
          //value={isChecked || ''}
          disabled={isLoading}
        />
        <span className="switch__slider"></span>
      </label>
      <p className="switch__title">Короткометражки</p>
    </div>
  );
}

export default Switch;
