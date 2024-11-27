import React from 'react';

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

export default Statistics;
