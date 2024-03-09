import './style.css';

export const SwitchButton = ({ label, on, onSwitch }) => {

  const handleSwitch = () => {
    onSwitch(!on);
  }

  return (
    <button className={on ? "switch-button switch-button--on" : "switch-button switch-button"}  onClick={handleSwitch}>
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
