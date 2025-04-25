import React from 'react';
import { thumbnails } from '../../Data/data';

const NextImgMobile = ({ nextItem }) => {
  return (
    <span
      className="next-img-mobile"
      onClick={() => nextItem(thumbnails.length - 1)}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

export default NextImgMobile;
