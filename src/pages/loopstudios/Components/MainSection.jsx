import React from 'react';
import Description from './Description';
import Creations from './Creations';

const MainSection = () => {
  return (
    <div className=" bg-white px-[1.5em] py-[6em] xl:px-[10.313em] xl:pt-[10em] xl:pb-[11.5em]">
      <Description />
      <Creations />
    </div>
  );
};

export default MainSection;
