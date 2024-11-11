import React, { useState } from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import MobileMenu from './MobileMenu';

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
    <div className="relative pt-[2.667em] px-[1.6em] pb-0 xl:p-0 h-[40.625rem] xl:h-[43.333rem] bg-[url('./pages/loopstudios/images/mobile/image-hero.jpg')] xl:bg-[url('./pages/loopstudios/images/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-black/40">
      <div className="absolute inset-0 bg-black opacity-0 xl:opacity-40 h-full"></div>
      <div className="flex justify-between relative xl:px-[165px] xl:pt-[64px]">
        <div className="flex justify-between w-full xl:w-[192px]">
          <a href="#home">
            <img
              src={logo}
              alt="logo"
              className="w-[9rem] h-[1.5rem] xl:w-[12rem] xl:h-[2rem]"
            />
          </a>
          <div className="relative xl:hidden" onClick={toggleMenu}>
            <img src={hamburger} alt="" />
          </div>
        </div>
        <nav className="relative hidden font-loopstudios text-white xl:flex justify-between xl:min-w-[380px] ">
          <a href="#" className="relative underline-middle">
            About
          </a>
          <a href="#" className="relative underline-middle">
            Careers
          </a>
          <a href="#" className="relative underline-middle">
            Events
          </a>
          <a href="#" className="relative underline-middle">
            Products
          </a>
          <a href="#" className="relative underline-middle">
            Support
          </a>
        </nav>
      </div>
      <div>{menu_opened && <MobileMenu />}</div>
      <div className="relative xl:w-[40.625rem] xl:h-[17.375rem] border-white border-2 p-[1.5rem] xl:p-[2.5rem] mt-[163px] xl:mt-[123px] xl:ml-[165px]">
        <p className="font-looptstudios-headline font-light uppercase text-white text-[2.5em] xl:text-[4.5em] leading-[2.375rem] xl:leading-[4.375rem] h-full">
          Immersive experiences that deliver
        </p>
      </div>
    </div>
  );
};

export default Header;
