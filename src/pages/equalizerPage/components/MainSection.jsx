import React from 'react';
import Card from './Card';
import illustration from '../assets/illustration-app.png';
import pattern from '../assets/bg-pattern-2.svg';
import '../Styling/mainSection.css';

const MainSection = () => {
  return (
    <section className="mt-[-280px] md:mt-[15.563em] xl:mt-[20.063em] ">
      <div className="main-section-layout">
        <img src={illustration} alt="" className="phone-illustration" />
        <div className="hero-pattern-position">
          <img src={pattern} alt="" className="hero-pattern" />
        </div>
        <div className="hero-card-section">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
