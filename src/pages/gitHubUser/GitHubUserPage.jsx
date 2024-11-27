import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import './Styles/GitHubUser.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import DataSection from './Components/DataSection';
import { DarkModeProvider } from './DarkModeContext';

function GitHubUserPage() {
  const [searchInput, setSearchInput] = useState('octocat');

  return (
    <DarkModeProvider>
      <section className="relative z-50">
        <div className="flex items-center bg-background h-[65px]">
          <div>
            <BackButton />
          </div>
          <div>
            <h1 className=" text-white font-semibold">GitHub User</h1>
          </div>
        </div>
      </section>
      <section className="bg-off-white  dark:bg-dark-mode-black flex flex-col px-6 pt-[1.938rem] pb-[4.938rem] md:px-[6.094rem] md:pt-[8.75rem] md:pb-[14.75rem] xl:px-[22.188rem] xl:pt-[9rem] xl:pb-[10.625rem]">
        <div className="xl:max-w-[730px] m-auto">
          <Header />
          <SearchBar setSearchInput={setSearchInput} />
          <DataSection searchedUser={searchInput} />
        </div>
      </section>
    </DarkModeProvider>
  );
}

export default GitHubUserPage;
