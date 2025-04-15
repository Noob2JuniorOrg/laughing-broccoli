import React from 'react';

import { useDarkMode } from '../DarkModeContext';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const Header = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="header-main-style">
      <h2 className="logo">devfinder </h2>

      <div
        className="flex gap-4 cursor-pointer items-center group dark:hidden"
        onClick={toggleDarkMode}
      >
        <p className="uppercase tracking-[2.5px] text-[13px] text-light-grey dark:hidden group-hover:text-[black]  ease-in-out duration-200">
          Dark
        </p>
        <MoonIcon />
      </div>

      <div
        className="hidden dark:flex gap-4 cursor-pointer items-center group"
        onClick={toggleDarkMode}
      >
        <p className="uppercase tracking-[2.5px] text-[13px] text-white hidden dark:block group-hover:text-[#90A4D4]  ease-in-out duration-200">
          Light
        </p>
        <SunIcon />
      </div>
    </div>
  );
};

export default Header;
