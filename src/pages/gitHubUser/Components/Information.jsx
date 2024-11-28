import React from 'react';

const Information = ({ iconId, data }) => {
  return (
    <div
      className={` ${data === 'Not Available' ? 'opacity-50' : 'opacity-100'} flex gap-[19.25px] text-navy-blue dark:text-white text-[13px] md:text-[15px] ${iconId === 'src/pages/gitHubUser/Assets/icon-twitter.svg' ? 'row-start-1 col-start-2' : ''}`}
    >
      <div className="w-[20px] h-[20px]">
        <img
          src={iconId}
          alt="icon"
          className={`${data === 'Not Available' ? 'opacity-50' : 'opacity-100'}`}
        />
      </div>
      <a
        href={data.includes('http') ? data : '#'}
        className={`${data.includes('http') ? 'cursor-pointer hover:underline' : 'cursor-default'}`}
      >
        {data}
      </a>
    </div>
  );
};

export default Information;
