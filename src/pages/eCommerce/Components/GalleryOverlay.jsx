import React, { useState } from 'react';
import { thumbnails } from '../Data/data';
import { useCart } from '../CartContext';
import Thumbnails from './Thumbnails';

const GalleryOverlay = () => {
  const { selectedIndex, setSelectedIndex, activeGallery, toggleGallery } =
    useCart();

  const [galleryIndex, setGalleryIndex] = useState(selectedIndex);

  const nextItem = () => {
    if (selectedIndex < thumbnails.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  const prevItem = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(3);
    }
  };

  return (
    <div
      className={`${activeGallery ? 'xl:absolute' : 'hidden'} w-full h-screen z-10 flex top-0 left-0 bg-[hsla(0,0%,0%,0.75)] justify-center`}
    >
      {/* block of large img and thumbnails */}
      <div className="flex flex-col mt-[133px] top-0 z-50 items-center">
        {/* the main img and the span el-s*/}
        <div className="mb-[40px] relative">
          {/* close icon */}
          <span
            className="cursor-pointer absolute -top-[40px] right-0"
            onClick={toggleGallery}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 15"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
            </svg>
          </span>
          {/* icon-prev */}
          <span
            className="flex items-center justify-center absolute w-[56px] h-[56px] top-[237px] -left-[28px] bg-white rounded-full cursor-pointer"
            onClick={prevItem}
          >
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
          {/* icon-next */}
          <span
            className="flex items-center justify-center absolute w-[56px] h-[56px] top-[237px] -right-[28px] bg-white rounded-full cursor-pointer"
            onClick={nextItem}
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
          <img
            src={thumbnails[selectedIndex]?.displayImage}
            alt="largeImage"
            className="w-[550px] h-[550px] rounded-[15px]"
          />
        </div>
        {/* the thumbnails */}
        <Thumbnails />
      </div>
    </div>
  );
};

export default GalleryOverlay;
