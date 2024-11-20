import React from 'react';
import moon from '../Assets/icon-moon.svg';
import { useDarkMode } from '../DarkModeContext';

const Header = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="flex justify-between items-center font-github-user font-bold text-black">
      <h2 className="text-[26px]">devfinder</h2>
      <div
        className=" flex gap-4 cursor-pointer items-center group"
        onClick={toggleDarkMode}
      >
        <p className=" uppercase tracking-[2.5px] text-[13px] text-light-grey group-hover:text-[black]">
          Dark
        </p>
        <img src={moon} alt="them-icon" className="group-hover:fill-black" />
      </div>
    </div>
  );
};

export default Header;
