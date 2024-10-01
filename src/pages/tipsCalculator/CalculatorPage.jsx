import React from 'react';
import BackButton from '../../components/BackButton';

function CalculatorPage() {
  return (
    <div className="flex items-center">
      <div>
        <BackButton />
      </div>
      <div>
        <h1 className=" text-white font-semibold">Calculator</h1>
      </div>
    </div>
  );
}

export default CalculatorPage;
