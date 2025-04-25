import React from 'react';
import '../Styling/peopleInput.css';

const PeopleInput = ({ peopleCount, setPeopleCount }) => {
  return (
    <div className="people-input">
      {peopleCount > 0 || peopleCount === null ? (
        <>
          <div className="flex justify-between">
            <label htmlFor="people-count" className="font-bold text-[#5E7A7D]">
              Number of People
            </label>
          </div>
          <input
            type="text"
            id="people-count"
            placeholder="0"
            className="input-field people-icon"
            onChange={(e) => setPeopleCount(parseFloat(e.target.value))}
          />
        </>
      ) : (
        <>
          <div className="flex justify-between">
            <label
              htmlFor="people-count-error"
              className="font-bold text-[#5E7A7D]"
            >
              Number of People
            </label>
            <p className="font-bold text-[#E17457]">Can't be zero</p>
          </div>
          <input
            type="text"
            id="people-count-error"
            placeholder="0"
            className="input-field-error"
            onChange={(e) => setPeopleCount(parseFloat(e.target.value))}
          />
        </>
      )}
    </div>
  );
};

export default PeopleInput;
