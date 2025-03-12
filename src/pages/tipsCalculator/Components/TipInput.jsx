import React from 'react';
import '../Styling/tipInput.css';

const TipInput = ({ setTip }) => {
  const handleCustomInput = () => {
    document.getElementById('custom-tip').style.display = 'initial';
    document.getElementById('custom-tip').focus();
  };

  const tipValues = [5, 10, 15, 25, 50];

  return (
    <div className="tip-input">
      <label htmlFor="tip-amount" className="label-styling">
        Select tip %
      </label>
      <div className="button-section">
        {tipValues.map((value) => (
          <button
            key={value}
            className="percent-btn"
            value={value}
            onClick={(e) => setTip(parseInt(e.target.value))}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          id="custom-tip"
          placeholder="Custom"
          className="custom-btn"
          onChange={(e) => setTip(parseFloat(e.target.value))}
          onClick={handleCustomInput}
        />
      </div>
    </div>
  );
};

export default TipInput;
