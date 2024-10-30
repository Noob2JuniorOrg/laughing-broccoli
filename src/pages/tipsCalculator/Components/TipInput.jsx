import React from 'react';

const TipInput = ({ setTip }) => {
  const handleCustomInput = () => {
    document.getElementById('custom-tip').style.display = 'initial';
    document.getElementById('custom-tip').focus();
  };

  return (
    <div className="tip-input">
      <p htmlFor="tip-amount" className="label-styling">
        Select tip %
      </p>
      <div className="button-section">
        <button
          className="percent-btn"
          value="5"
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          5%
        </button>
        <button
          className="percent-btn"
          value="10"
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          10%
        </button>
        <button
          className="percent-btn"
          value="15"
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          15%
        </button>
        <button
          className="percent-btn"
          value="25"
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          25%
        </button>
        <button
          className="percent-btn"
          value="50"
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          50%
        </button>
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
