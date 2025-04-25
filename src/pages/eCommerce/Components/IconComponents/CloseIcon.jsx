import React from 'react';
import { useGallery } from '../../Contexts/GalleryContext';

const CloseIcon = () => {
  const { toggleGallery } = useGallery();

  return (
    <span className="overlay-close" onClick={toggleGallery}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 14 15"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5 h-5 text-white hover:text-[#FF7E1B] ease-in-out duration-200"
      >
        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
      </svg>
    </span>
  );
};

export default CloseIcon;
