import React from 'react';
import moon from '../Assets/icon-moon.svg';
import sun from '../Assets/icon-sun.svg';
import { useDarkMode } from '../DarkModeContext';

const Header = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="flex justify-between items-center font-github-user font-bold text-black">
      <h2 className="text-[26px] dark:text-white">devfinder</h2>
      <div
        className=" flex gap-4 cursor-pointer items-center group"
        onClick={toggleDarkMode}
      >
        <p className="uppercase tracking-[2.5px] text-[13px] text-light-grey dark:hidden group-hover:text-[black]">
          Dark
        </p>
        <p className="uppercase tracking-[2.5px] text-[13px] text-white hidden dark:block group-hover:text-[#90A4D4]">
          Light
        </p>
        <img
          src={moon}
          alt="theme-icon"
          className="group-hover:fill-black dark:hidden"
        />

        <img
          src={sun}
          alt="theme-icon"
          className="hidden dark:block group-hover:fill-[#90A4D4]"
        />
      </div>
    </div>
  );
};

export default Header;
