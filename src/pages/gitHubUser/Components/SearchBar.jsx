import React from 'react';
import searchIcon from '../Assets/icon-search.svg';
import { useState } from 'react';

const SearchBar = ({ setSearchInput, isResult }) => {
  const [localInput, setLocalInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(localInput.trim());
  };

  return (
    <div className="flex w-full h-[3.75rem] mt-[2.25rem] md:h-[4.313rem] bg-white dark:bg-dark-blue drop-shadow-[0_5px_9px_rgba(75,106,155,0.1)] md:drop-shadow-[0_5px_3px_rgba(151,151,151,0.6)] dark:drop-shadow-none rounded-[15px] pl-4 pr-[7px] md:pl-8 md:pr-[0.625rem] items-center justify-between font-github-user">
      <div className="flex gap-[8.95px] md:gap-6 group">
        <img src={searchIcon} alt="searchIcon" />
        <input
          value={localInput}
          type="text"
          className="input-field"
          placeholder="Search GitHub username"
          id="search-user"
          onChange={(e) => setLocalInput(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-6">
        <p
          className={`${isResult ? 'hidden' : 'block'} text-[#F74646] font-bold`}
        >
          No results
        </p>

        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
