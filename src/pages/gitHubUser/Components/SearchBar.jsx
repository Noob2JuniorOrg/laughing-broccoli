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
    <div className="search-bar-user">
      <div className="search-bar-left">
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
