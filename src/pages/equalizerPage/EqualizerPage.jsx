import React from 'react';
import BackButton from '../../components/BackButton';
import Header from './components/Header';
import desktopBg from './assets/bg-main-desktop.png';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function EqualizerPage() {
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
      <section
        className="min-h-screen w-full bg-white bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${desktopBg})` }}
      >
        <Header />
        <MainSection />
        <Footer />
      </section>
    </>
  );
}

export default EqualizerPage;
