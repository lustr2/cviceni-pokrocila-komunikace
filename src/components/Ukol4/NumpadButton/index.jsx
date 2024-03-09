import './style.css';

export const NumpadButton = ({ digit, onDigitClick }) => {

  const handleOnClick = () => {
    onDigitClick(digit);
  }

  return (
    <button className="numpad-button" onClick={handleOnClick} >{digit}</button>
  );
};
