import React from 'react';
import BackButton from '../../components/BackButton';

function EqualizerPage() {
  return (
    <div className="flex items-center">
      <div>
        <BackButton />
      </div>
      <div>
        <h1 className=" text-white font-semibold">Equalizer</h1>
      </div>
    </div>
  );
}

export default EqualizerPage;
