import React from 'react';
import logo from '../assets/logo.svg';
import pattern1 from '../assets/bg-pattern-1.svg';
import '../Styling/header.css';

const Header = () => {
  return (
    <header className="flex justify-between">
      <section>
        <div className="header-left-section">
          <div className="header-logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="header-info">
            <h1 className="h1">We make your music sound extraordinary.</h1>
            <p className="header-p">
              A system audio equalizer specifically designed for Android and
              iOS. Freely tune the way your music sounds with a professional
              grade parametric EQ & volume mixer. Control bass, mids, treble,
              gain control, reverb, and more!
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="header-right-section">
          <img src={pattern1} alt="pattern1" />
        </div>
      </section>
    </header>
  );
};

export default Header;
