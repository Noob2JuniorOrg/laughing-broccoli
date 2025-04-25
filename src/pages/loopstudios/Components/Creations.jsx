import React from 'react';
import { desktopCards, mobileCards } from '../data';

const Creations = () => {
  return (
    <>
      <div className="creations">
        <p className="creations-heading">Our Creations</p>
        <div className="mobile-cards">
          {mobileCards.map((card, key) => (
            <div key={key} className={`mobile-bg-image ${card.gradientClass}`}>
              <div className="mobile-card-title">{card.title}</div>
            </div>
          ))}
        </div>
        <button className="button">see all</button>
      </div>
      <div className="desktop-cards">
        {desktopCards.map((card) => (
          <div key={card.key} className="w-[256px] h-[450px] relative group">
            <div
              className={`w-full h-full cursor-pointer absolute group-hover:opacity-50 group-hover:transition-opacity ${card.gradientClass}`}
            ></div>
            <div className="absolute inset-0 desktop-cards-title group-hover:text-black">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Creations;
