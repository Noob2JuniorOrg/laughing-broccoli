import React from 'react';
import mockImg from '../Assets/cat.png';

const Statistics = ({ subject, count }) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-2 md:gap-[1px]">
      <p className="text-navy-blue dark:text-white text-[11px] md:text-[13px] ">
        {subject}
      </p>
      <p className="font-bold text-[16px] md:text-[22px] dark:text-white">
        {count}
      </p>
    </div>
  );
};

const Information = ({ iconId, data }) => {
  return (
    <div
      className={`flex gap-[19.25px] text-navy-blue dark:text-white text-[13px] md:text-[15px] ${iconId === 'src/pages/gitHubUser/Assets/icon-twitter.svg' ? `row-start-1 col-start-2` : ''}`}
    >
      <img src={iconId} alt="icon" />
      <p>{data}</p>
    </div>
  );
};

const DataSection = () => {
  return (
    <div className="flex flex-col gap-[33px] md:gap-6 xl:gap-0 w-full h-[517px] xl:min-h-[419px] px-[1.5rem] pt-[2rem] pb-[3rem] md:p-[2.5rem] xl:p-0 mt-6 font-github-user rounded-[15px] bg-white dark:bg-dark-blue drop-shadow-[0_5px_9px_rgba(75,106,155,0.1)] dark:drop-shadow-none">
      <div className="name-and-avatar flex gap-[19px] md:gap-[41px] xl:px-[3rem] xl:pt-[3rem]">
        <img
          src={mockImg}
          alt="img"
          className="w-[70px] h-[70px] md:w-[117px] md:h-[117px]"
        />
        <div className="name-tag-joined w-full flex flex-col xl:flex-row xl:justify-between h-[69px]">
          <div className="name-tag">
            <p className="font-bold text-black text-[16px] md:text-[26px] dark:text-white">
              The Octocat
            </p>
            <p className="font-light text-light-blue text-[13px] md:text-[16px]">
              @octocat
            </p>
          </div>
          <div className="joined text-light-grey text-[13px] md:text-[15px] xl:self-start xl:mt-2">
            Joined 25 Jan 2011
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col gap-6 xl:gap-0 md:gap-8 xl:pl-[12.625rem] xl:pr-[3rem] xl:-mt-6">
        <p className="text-[13px] xl:text-[15px] leading-[25px] text-navy-blue dark:text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className="w-full h-[85px] flex justify-between px-[14.5px] py-[18.5px] md:pl-[2rem] md:pr-[6rem] xl:mt-[2rem] bg-off-white dark:bg-dark-mode-black rounded-[10px]">
          <Statistics subject="Repos" count="8" />
          <Statistics subject="Followers" count="3933" />
          <Statistics subject="Following" count="9" />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-y-[19px] xl:mt-[2.313rem] items-start justify-between gap-4">
          <Information
            iconId="src/pages/gitHubUser/Assets/icon-location.svg"
            data="San Francisco"
            row_start="1"
            col_start="1"
          />
          <Information
            iconId="src/pages/gitHubUser/Assets/icon-website.svg"
            data="https://github.blog"
            row_start="2"
            col_start="2"
          />
          <Information
            iconId="src/pages/gitHubUser/Assets/icon-twitter.svg"
            data="Not Available"
            row_start="1"
            col_start="2"
          />
          <Information
            iconId="src/pages/gitHubUser/Assets/icon-company.svg"
            data="@github"
            row_start="1"
            col_start="2"
          />
        </div>
      </div>
    </div>
  );
};

export default DataSection;
