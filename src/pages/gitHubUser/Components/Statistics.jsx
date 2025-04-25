import React from 'react';

const Statistics = ({ subject, count }) => {
  return (
    <div className="statistics">
      <p className="stat-subject">{subject}</p>
      <p className="stat-count">{count}</p>
    </div>
  );
};

export default Statistics;
