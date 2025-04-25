import React from 'react';

const Information = ({ iconId, darkIcon, data }) => {
  return (
    <div
      className={`information-icon ${data === 'Not Available' ? 'opacity-50' : 'opacity-100'} ${iconId === 'src/pages/gitHubUser/Assets/icon-twitter.svg' ? 'row-start-1 col-start-2' : ''}`}
    >
      <div className="w-[20px] h-[20px]">
        <img
          src={iconId}
          alt="icon"
          className={`dark:hidden ${data === 'Not Available' ? 'opacity-60' : 'opacity-100'}`}
        />
        <img
          src={darkIcon}
          alt="icon"
          className={`dark:block ${data === 'Not Available' ? 'opacity-60' : 'opacity-100'}`}
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
