import React from 'react';

const BillInput = ({ setBill }) => {
  return (
    <div>
      {' '}
      <div className="bill-input">
        <div className="flex items-center justify-between">
          <label htmlFor="bill-size" className="label-styling">
            Bill
          </label>
        </div>
        <input
          type="text"
          id="bill-size"
          placeholder="0"
          className="input-field dollar-icon"
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default BillInput;
