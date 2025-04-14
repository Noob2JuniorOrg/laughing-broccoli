import React from 'react';
import apple from '../assets/icon-apple.svg';
import android from '../assets/icon-android.svg';
import '../Styling/card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-elements">
        <h2 className="card-h2">Premium EQ</h2>
        <p className="card-p">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <div className="card-price">
          <span className="font-bold text-[4.063em]">$4</span>
          <span>/ month</span>
        </div>
        <div className="buttons-layout">
          <button className="apple-btn">
            <img src={apple} alt="apple" />
            iOS Download
          </button>
          <button className="android-btn">
            <img src={android} alt="" />
            Android Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
