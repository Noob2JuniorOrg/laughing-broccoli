import React from 'react';
import { nav_links_mobile } from '../Data/data';
import closeIcon from '../images/icon-close.svg';
import '../Styling/mobileMenu.css';

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="mobile-menu">
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
            <a href="#" className="mobile-nav-link">
              {link.target}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
