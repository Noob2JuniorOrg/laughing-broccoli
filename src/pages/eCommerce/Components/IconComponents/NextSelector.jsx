import React from 'react';
import { useGallery } from '../../Contexts/GalleryContext';
import { thumbnails } from '../../Data/data';

const NextSelector = () => {
  const { nextItemOverlay } = useGallery();

  return (
    <span
      className="next-icon"
      onClick={() => nextItemOverlay(thumbnails.length - 1)}
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

export default NextSelector;
