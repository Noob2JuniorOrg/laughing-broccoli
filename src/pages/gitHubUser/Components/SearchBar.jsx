import React from 'react';
import searchIcon from '../Assets/icon-search.svg';

const SearchBar = () => {
  return (
    <div className="flex w-full h-[3.75rem] mt-[2.25rem] md:h-[4.313rem] bg-white dark:bg-dark-blue drop-shadow-[0_5px_9px_rgba(75,106,155,0.1)] xl:drop-shadow-[0_5px_3px_rgba(151,151,151,0.6)] dark:drop-shadow-none rounded-[15px] pl-4 pr-[7px] md:pl-8 md:pr-[0.625rem] items-center justify-between font-github-user">
      <div className="flex gap-[8.95px] md:gap-6 group">
        <img src={searchIcon} alt="searchIcon" />
        <input
          type="text"
          className="focus:outline-none min-w-[184px] md:min-w-[254px] dark:bg-dark-blue text-navy-blue dark:text-white placeholder:text-navy-blue placeholder:text-[13px] placeholder:leading-[25px] md:placeholder:text-[18px] placeholder:overflow-ellipsis dark:placeholder:text-[white] text-[13px] md:text-[1rem] xl:text-[18px] leading-[25px]"
          placeholder="Search GitHub username"
          id="search-user"
        />
      </div>
      <div className="group">
        <button className="w-[5.25rem] h-[2.875rem] md:w-[106px] md:h-[50px] bg-light-blue text-white text-[14px] md:text-[1rem] font-bold rounded-[10px] group-hover:bg-[#60ABFF]">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
