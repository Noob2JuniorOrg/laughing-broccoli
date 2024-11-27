import React from 'react';

const Information = ({ iconId, data }) => {
  return (
    <div
      className={`${data === 'Not Available' ? 'opacity-50' : 'opacity-100'} flex gap-[19.25px] text-navy-blue dark:text-white text-[13px] md:text-[15px] ${iconId === 'src/pages/gitHubUser/Assets/icon-twitter.svg' ? 'row-start-1 col-start-2' : ''}`}
    >
      <img
        src={iconId}
        alt="icon"
        className={`${data === 'Not Available' ? 'opacity-50' : 'opacity-100'} w-[21px]`}
      />
      <a className="">{data}</a>
    </div>
  );
};

export default Information;
