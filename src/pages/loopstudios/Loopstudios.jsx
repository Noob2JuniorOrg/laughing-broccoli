import React from 'react';
import BackButton from '../../components/BackButton';
import Header from './Components/Header';

function Loopstudios() {
  return (
    <>
      <section className="relative z-50">
        <div className="flex items-center bg-background h-[65px]">
          <div>
            <BackButton />
          </div>
          <div>
            <h1 className=" text-white font-semibold">Loopstudios</h1>
          </div>
        </div>
      </section>
      <section className="h-screen bg-white">
        <Header />
      </section>
    </>
  );
}

export default Loopstudios;
