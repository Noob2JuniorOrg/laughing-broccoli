import React from 'react';
import logo from '../images/logo.svg';
import { navLinks } from '../data';
import { icons } from '../data';

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-12 h-[470px] py-[3.5rem] px-[3.25rem] xl:flex-row xl:justify-between xl:gap-[28.625rem] xl:h-[160px] xl:px-[165px] xl:pt-[44px] xl:pb-[33px] bg-black">
      <div className="flex flex-col gap-8 xl:gap-6">
        <img src={logo} alt="logo" className="logo-img-mobile" />
        <nav className="nav-links-footer">
          {navLinks.map((link, index) => (
            <a href="#" key={index} className="relative underline-middle">
              {link.title}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-4 xl:items-end xl:gap-6">
        <div className="social-icons">
          {icons.map((icon, index) => (
            <img
              src={icon.path}
              alt="icon"
              key={index}
              className="relative cursor-pointer underline-middle-icons"
            />
          ))}
        </div>
        <p className="text-white font-loopstudios font-extralight text-[15px] leading-[25px] opacity-50">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
