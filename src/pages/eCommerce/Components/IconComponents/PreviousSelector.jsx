import React from 'react';
import { useGallery } from '../../Contexts/GalleryContext';

const PreviousSelector = () => {
  const { prevItemOverlay } = useGallery();

  return (
    <span className="prev-icon" onClick={prevItemOverlay}>
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

export default PreviousSelector;
