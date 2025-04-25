import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import DataSection from './Components/DataSection';
import { DarkModeProvider } from './DarkModeContext';
import './Styles/mainStyles.css';

function GitHubUserPage() {
  const [searchInput, setSearchInput] = useState('octocat');
  const [isResult, setIsResult] = useState(true);

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
      <section className="main-page-style">
        <div className="w-full xl:max-w-[45.625rem] mx-auto">
          <Header />
          <SearchBar setSearchInput={setSearchInput} isResult={isResult} />
          <DataSection
            searchedUser={searchInput}
            isResult={isResult}
            setIsResult={setIsResult}
          />
        </div>
      </section>
    </DarkModeProvider>
  );
}

export default GitHubUserPage;
