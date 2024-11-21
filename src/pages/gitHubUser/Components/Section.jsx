import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import DataSection from './DataSection';

const Section = () => {
  return (
    <div className="dark:bg-dark-mode-black h-screen flex flex-col px-6 pt-[1.938rem] pb-[4.938rem] md:px-[6.094rem] md:pt-[8.75rem] md:pb-[14.75rem] xl:px-[22.188rem] xl:pt-[9rem] xl:pb-[10.625rem]">
      <Header />
      <SearchBar />
      <DataSection />
    </div>
  );
};

export default Section;
