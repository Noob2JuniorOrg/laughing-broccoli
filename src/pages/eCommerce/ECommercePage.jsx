import React from 'react';
import BackButton from '../../components/BackButton';
import Header from './Components/Header';
import '../eCommerce/Styling/main.css';
import MainContent from './Components/MainContent';

function ECommercePage() {
  return (
    <>
      <section className="relative z-50">
        <div className="flex items-center max-xl:justify-around bg-background h-[65px]">
          <BackButton />

          <div>
            <h1 className=" text-white font-semibold">Loopstudios</h1>
          </div>
        </div>
      </section>
      <section className="h-screen bg-white">
        <Header />
        <MainContent />
      </section>
    </>
  );
}

export default ECommercePage;
