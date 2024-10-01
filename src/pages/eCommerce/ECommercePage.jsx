import React from 'react';
import BackButton from '../../components/BackButton';

function ECommercePage() {
  return (
    <div className="flex items-center">
      <div>
        <BackButton />
      </div>
      <div>
        <h1 className=" text-white font-semibold">E-Commerce</h1>
      </div>
    </div>
  );
}

export default ECommercePage;
