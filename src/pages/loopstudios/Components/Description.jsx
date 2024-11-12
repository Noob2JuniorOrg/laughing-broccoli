import React from 'react';
import bgImage from '../images/mobile/image-interactive.jpg';
import bgImageDesktop from '../images/desktop/image-interactive.jpg';

const Description = () => {
  return (
    <div className="xl:relative xl:h-[31.25em] xl:flex xl:items-end">
      <div className="xl:absolute">
        <img src={bgImage} alt="" className="xl:hidden m-auto" />
        <img src={bgImageDesktop} alt="" className="hidden xl:inline" />
      </div>
      <div className="flex flex-col gap-4 pl-[1.5rem] pr-[1.5rem] pt-[3rem] xl:pl-[6.4rem] xl:pr-0 xl:pt-[6.4rem] xl:inline-block xl:absolute right-0 bg-white max-w-[731px] m-auto xl:w-[33.813rem] xl:h-[317px]">
        <div className="flex flex-col justify-between items-start gap-6 xl:gap-4 ">
          <p className="uppercase text-[2em] xl:text-[3em] m-auto font-looptstudios-headline font-light text-center xl:text-left leading-[32px] xl:leading-[48px]">
            The leader in interactive VR
          </p>
          <p className="text-center xl:text-left font-loopstudios font-light text-[15px] leading-[25px] opacity-50">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
