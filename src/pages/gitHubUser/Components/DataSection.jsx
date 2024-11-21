import React from 'react';
import mockImg from '../Assets/cat.png';

const Statistics = ({ subject, count }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-navy-blue dark:text-white text-[11px]">{subject}</p>
      <p className="font-bold text-[16px] dark:text-white">{count}</p>
    </div>
  );
};

const Information = ({ iconId, data }) => {
  return (
    <div className="flex gap-[19.25px] text-navy-blue dark:text-white text-[13px]">
      <img src={iconId} alt="icon" />
      <p>{data}</p>
    </div>
  );
};

const DataSection = () => {
  return (
    // When its time for xl screen - adjust margin of info-section so it goes up next to the avatar

    <div className="flex flex-col gap-[33px] w-full min-h-[517px] px-[1.5rem] pt-[2rem] pb-[3rem] mt-6 font-github-user rounded-[15px] bg-white dark:bg-dark-blue drop-shadow-[0_5px_9px_rgba(75,106,155,0.1)]">
      <div className="name-and-avatar flex  gap-[19px]">
        <img src={mockImg} alt="img" className="w-[70px] h-[70px]" />
        <div className="name-tag-joined flex flex-col h-[69px]">
          <div className="name-tag">
            <p className="font-bold text-black text-[16px] dark:text-white">
              The Octocat
            </p>
            <p className="font-light text-light-blue">@octocat</p>
          </div>
          <div className="joined text-light-grey text-[13px]">
            Joined 25 Jan 2011
          </div>
        </div>
      </div>

      <div className="information w-full flex flex-col">
        <p className="text-[13px] leading-[25px] text-navy-blue dark:text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className="w-full h-[85px] flex justify-between px-[14.5px] py-[18.5px] mt-6 bg-off-white dark:bg-dark-mode-black rounded-[10px]">
          <Statistics subject="Repos" count="8" />
          <Statistics subject="Followers" count="3933" />
          <Statistics subject="Following" count="9" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-4">
        <Information
          iconId="src/pages/gitHubUser/Assets/icon-location.svg"
          data="San Francisco"
        />
        <Information
          iconId="src/pages/gitHubUser/Assets/icon-website.svg"
          data="https://github.blog"
        />
        <Information
          iconId="src/pages/gitHubUser/Assets/icon-twitter.svg"
          data="Not Available"
        />
        <Information
          iconId="src/pages/gitHubUser/Assets/icon-company.svg"
          data="@github"
        />
      </div>
    </div>
  );
};

export default DataSection;
