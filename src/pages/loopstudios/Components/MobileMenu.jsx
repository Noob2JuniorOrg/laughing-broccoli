import React from 'react';
import logo from '../images/logo.svg';
import closeIcon from '../images/icon-close.svg';
import { useState } from 'react';

const MobileMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  const [isCloseIconClicked, setCloseIsIconClicked] = useState(false);

  const closeMenu = () => {
    if (!isCloseIconClicked) {
      setIsMenuOpened(true);
    } else {
      setIsMenuOpened(false);
    }
    setCloseIsIconClicked(!isCloseIconClicked);
  };

  return (
    <div
      className={`xl:hidden  left-0 top-0 h-[667px] bg-black w-full z-50 px-[1.5rem] pt-[2.5rem] ${isMenuOpened ? 'absolute' : 'menu-hidden'}`}
    >
      <div className="flex justify-between items-center ">
        <a href="#home">
          <img
            src={logo}
            alt="logo"
            className="w-[9rem] h-[1.5rem] xl:w-[12rem] xl:h-[2rem]"
          />
        </a>
        <div onClick={closeMenu}>
          <img src={closeIcon} alt="icon-close" />
        </div>
      </div>
      <div className="flex flex-col justify-between font-looptstudios-headline font-extralight text-[1.5em] text-white uppercase h-[221px] mt-[159px]">
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
      </div>
    </div>
  );
};

export default MobileMenu;
