import React from 'react';
import moon from '../Assets/icon-moon.svg';
import sun from '../Assets/icon-sun.svg';
import { useDarkMode } from '../DarkModeContext';

const Header = ({ isDarkMode }) => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="header-main-style">
      <h2 className="logo">devfinder </h2>
      <div
        className="flex gap-4 cursor-pointer items-center group "
        onClick={toggleDarkMode}
      >
        <p className="uppercase tracking-[2.5px] text-[13px] text-light-grey dark:hidden group-hover:text-[black]  ease-in-out duration-200">
          Dark
        </p>
        <p className="uppercase tracking-[2.5px] text-[13px] text-white hidden dark:block group-hover:text-[#90A4D4]  ease-in-out duration-200">
          Light
        </p>
        <img
          src={moon}
          alt="theme-icon"
          className="w-[20px] h-[20x]  dark:hidden"
        />

        <img src={sun} alt="theme-icon" className="hidden dark:block " />
      </div>
    </div>
  );
};

export default Header;
