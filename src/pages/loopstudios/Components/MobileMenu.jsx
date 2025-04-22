import React from 'react';
import logo from '../images/logo.svg';
import closeIcon from '../images/icon-close.svg';
import { useState } from 'react';
import { menuLinks } from '../data';

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
      <div className="menu-header">
        <a href="#home">
          <img src={logo} alt="logo" className="logo-img-mobile" />
        </a>
        <div onClick={closeMenu}>
          <img src={closeIcon} alt="icon-close" />
        </div>
      </div>
      <div className="menu-links">
        {menuLinks.map((link) => (
          <a href={link.href} key={link.id}>
            {link.target}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
