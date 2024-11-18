import React from 'react';
import { navLinks } from '../data';

const NavLinks = () => {
  return (
    <nav className="nav-links">
      {navLinks.map((link, index) => (
        <a href="#" key={index} className="relative underline-middle">
          {link.title}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
