import React, { useState } from 'react';
import menuIcon from '../images/icon-menu.svg';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import { nav_links_desktop, nav_links_mobile } from '../Data/data';
import MobileMenu from '../Components/MobileMenu';
import Cart from './Cart';
import { useCart } from '../CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="mx-6 xl:mx-[165px]">
      <div className="flex w-full xl:border-b-[1px] xl:border-b-[#979797] pt-[1.188rem] pb-[1.563rem]  xl:pt-[28px] xl:pb-[34px] xl:h-[112px] justify-between items-center">
        {/* Left section */}
        <section className="nav-left flex gap-4 items-center">
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
          <div className="hidden xl:flex justify-between gap-8 ml-[3.531rem]">
            {nav_links_desktop.map((link, index) => (
              <div key={link.key} className="group">
                <a
                  href="#"
                  key={index}
                  className="transition-all ease-in duration-100 font-e-commerce text-[15px] text-[#69707D] hover:text-black"
                >
                  {link.target}
                </a>
                <div className="relative top-[45px] ease-in duration-100 border-b-4 border-b-transparent group-hover:border-b-[#FF7E1B]"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <section className="nav-right flex items-center gap-[1.375rem] xl:gap-[2.875em] h-6">
          {/* Cart Icon */}
          <div
            className="group text-gray-500 cursor-pointer relative"
            onClick={toggleCart}
          >
            <svg
              className="group-hover:text-black fill-current transition-colors"
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="current"
                fillRule="nonzero"
              />
            </svg>

            <span
              className={`${items === 0 ? 'hidden' : 'bg-orange-500 w-[19px] h-[13px] flex justify-center items-center absolute -top-[7px] left-[9px] rounded-[6.5px] text-[white] text-[12px] font-bold'}`}
            >
              {items}
            </span>
          </div>

          {/* Cart Window */}
          {isCartOpen && <Cart toggleCart={toggleCart} />}

          {/* Avatar */}
          <div className="group cursor-pointer w-[26px] h-[26px] xl:w-[3.25em] xl:h-[3.25em]">
            <img
              src={avatar}
              alt="avatar"
              className="border-transparent border-2 group-hover:border-2 group-hover:rounded-full group-hover:border-[#FF7E1B] ease-in-out duration-200"
            />
          </div>
        </section>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        {/* Backdrop - Mobile menu */}
        {isMenuOpen && (
          <div
            className="backdrop fixed top-0 left-0 w-screen h-screen bg-black opacity-70 z-10"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Header;
