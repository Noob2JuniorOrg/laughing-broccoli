import React from 'react';
import { nav_links_mobile } from '../Data/data';
import closeIcon from '../images/icon-close.svg';

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="absolute top-[65px] left-0 h-screen w-[250px] bg-white z-20">
      {/* Close Icon */}
      <div className="p-6">
        <img
          src={closeIcon}
          alt="close"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile NavLinks */}
      <div className="p-6">
        {nav_links_mobile.map((link) => (
          <div key={link.key} className="mb-4">
            <a
              href="#"
              className="font-e-commerce text-[15px] text-[#69707D] hover:text-black"
            >
              {link.target}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
