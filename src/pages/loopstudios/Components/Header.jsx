import React, { useState } from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import MobileMenu from './MobileMenu';
import { navLinks } from '../data';

const Header = () => {
  const [menu_opened, setMenuOpened] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    if (!isMenuClicked) {
      setMenuOpened(true);
    } else {
      setMenuOpened(false);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="header-loopstudios">
      <div className="header-overlay"></div>
      <div className="header-components">
        <div className="header-left">
          <a href="#home">
            <img src={logo} alt="logo" className="logo-img" />
          </a>
          <div className="relative xl:hidden" onClick={toggleMenu}>
            <img src={hamburger} alt="" />
          </div>
        </div>
        <nav className="nav-links">
          {navLinks.map((link, index) => (
            <a href="#" key={index} className="relative underline-middle">
              {link.title}
            </a>
          ))}
        </nav>
      </div>
      <div>{menu_opened && <MobileMenu />}</div>
      <div className="banner">
        <p className="banner-content">Immersive experiences that deliver</p>
      </div>
    </div>
  );
};

export default Header;
