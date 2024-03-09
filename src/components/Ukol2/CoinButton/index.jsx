import './style.css';

export const CoinButton = ({ value, onCoinClick }) => {

  const handleClick = () => {
    onCoinClick(value);
  }
  return (
    <button className="icon-button" onClick={handleClick}>
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
