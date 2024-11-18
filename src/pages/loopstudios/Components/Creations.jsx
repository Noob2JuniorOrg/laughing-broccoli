import React from 'react';
import { desktopCards, mobileCards } from '../data';

const Creations = () => {
  return (
    <>
      <div className="creations">
        <p className="creations-heading">Our Creations</p>
        <div className="mobile-cards">
          {mobileCards.map((card, index) => (
            <div
              key={index}
              className={`mobile-bg-image ${card.gradientClass}`}
            >
              <div className="mobile-card-title">{card.title}</div>
            </div>
          ))}
        </div>
        <button className="button">see all</button>
      </div>
      <div className="desktop-cards">
        {desktopCards.map((card, index) => (
          <div
            key={index}
            className={`w-[256px] h-[450px] ${card.gradientClass}`}
          >
            <div className="desktop-cards-title">{card.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Creations;
