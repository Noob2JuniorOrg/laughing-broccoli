import React, { useState } from 'react';
import menuIcon from '../images/icon-menu.svg';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import { nav_links_desktop } from '../Data/data';
import MobileMenu from '../Components/MobileMenu';
import Cart from './Cart';
import { useCart } from '../Contexts/CartContext';
import '../Styling/header.css';
import CartIcon from './IconComponents/CartIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { toggleCart, isCartOpen } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-6 xl:mx-[165px]">
      <div className="header">
        {/* Left section */}
        <section className="nav-left">
          <img
            src={menuIcon}
            alt="menu"
            className="xl:hidden cursor-pointer"
            onClick={toggleMenu}
          />
          {/* Logo */}
          <div className="-mt-[2.5px]">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* NavLinks Desktop */}
          <div className="nav-links-desktop">
            {nav_links_desktop.map((link, index) => (
              <div key={link.key} className="group">
                <a href="#" key={index} className="desktop-link-styling">
                  {link.target}
                </a>
                <div className="desktop-link-border"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <section className="nav-right">
          {/* Cart Icon */}
          <div className="group text-gray-500  relative z-50">
            <CartIcon />
            {/* Cart modal */}
            {isCartOpen && <Cart toggleCart={toggleCart} />}
          </div>

          {/* Avatar */}
          <div className="group avatar">
            <img
              src={avatar}
              alt="avatar"
              className="avatar-border group-hover:border-2 group-hover:rounded-full group-hover:border-[#FF7E1B]"
            />
          </div>
        </section>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        {/* Backdrop - Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu-backdrop" onClick={toggleMenu}></div>
        )}
      </div>
    </div>
  );
};

export default Header;
