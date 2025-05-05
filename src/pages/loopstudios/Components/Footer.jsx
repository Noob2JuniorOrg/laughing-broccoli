import React from 'react';
import logo from '../images/logo.svg';
import { navLinks } from '../data';
import { icons } from '../data';

const Footer = () => {
  return (
    <div className="footer-loopstudios">
      <div className="footer-logo-links">
        <a href="#">
          <img
            src={logo}
            alt="logo"
            className="logo-img-mobile cursor-pointer"
          />
        </a>

        <nav className="nav-links-footer">
          {navLinks.map((link, index) => (
            <a
              href="#"
              key={index}
              className="relative underline-middle-footer"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-icons-copyright">
        <div className="social-icons-loopstudios">
          {icons.map((icon, index) => (
            <div className="relative group" key={icon.id}>
              <img
                src={icon.src}
                alt={icon.alt}
                key={icon.key}
                className="cursor-pointer underline-middle-icons"
              />
              <div key={index} className="social-icons-underline"></div>
            </div>
          ))}
        </div>
        <p className="copyright">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
