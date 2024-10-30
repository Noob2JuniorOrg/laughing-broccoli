import React, { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import MainSection from './Components/MainSection';

function CalculatorPage() {
  return (
    <>
      <section className="relative z-50">
        <div className="flex items-center bg-background h-[65px]">
          <div>
            <BackButton />
          </div>
          <div>
            <h1 className=" text-white font-semibold">Equalizer</h1>
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#C5E4E7]">
        <MainSection />
      </section>
    </>
  );
}

export default CalculatorPage;
