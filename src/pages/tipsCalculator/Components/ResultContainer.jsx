import React from 'react';

const ResultContainer = ({
  tip,
  bill,
  peopleCount,
  tipAmount,
  totalAmount,
  setTip,
  setBill,
  setPeopleCount,
  setTipAmount,
  setTotalAmount,
}) => {
  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeopleCount(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <div className="result-output">
      <div className="tip-result-person">
        <div>
          <p className="font-bold text-white">
            Tip Amount <br />
          </p>
          <span className="text-[0.813em] text-[#7F9D9F]">/ person</span>
        </div>
        <span className="font-bold text-calc-mid-green text-[2em] xl:text-[3em]">
          {tipAmount > 0 ? <p>${tipAmount}</p> : <p>$0.00</p>}
        </span>
      </div>
      <div className="tip-result-total">
        <div>
          <p className="font-bold text-white">
            Total
            <br />
          </p>
          <span className="text-[0.813em] text-[#7F9D9F]">/ person</span>
        </div>
        <span className="font-bold text-calc-mid-green text-[2em] xl:text-[3em]">
          {totalAmount > 0 ? <p>${totalAmount}</p> : <p>$0.00</p>}
        </span>
      </div>

      {tipAmount > 0 &&
      totalAmount > 0 &&
      bill != null &&
      tip != null &&
      peopleCount != null ? (
        <button className="reset-btn" onClick={handleReset}>
          reset
        </button>
      ) : (
        <button className="reset-btn-empty" onClick={handleReset}>
          reset
        </button>
      )}
    </div>
  );
};

export default ResultContainer;
