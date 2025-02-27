import React, { useState } from 'react';
import { thumbnails } from '../Data/data';
import Thumbnails from './Thumbnails';
import { useGallery } from '../Contexts/GalleryContext';

const ProductGallery = () => {
  const { selectedIndex, toggleGallery, prevItem, nextItem } = useGallery();

  return (
    <div className=" xl:flex xl:flex-col gap-[32px] xl:relative ">
      <div className="flex w-full xl:w-[445px] xl:h-[445px] relative">
        {/* icon-prev */}
        <span
          className="flex xl:hidden items-center justify-center absolute w-[40px] h-[40px] top-1/2 -translate-y-1/2 left-4 bg-white rounded-full cursor-pointer"
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
        <img
          src={thumbnails[selectedIndex]?.displayImage}
          alt="image"
          className="w-full object-cover xl:rounded-[15px] cursor-pointer"
          index={selectedIndex}
          onClick={toggleGallery}
        />
        {/* icon-next */}
        <span
          className="flex xl:hidden items-center justify-center absolute w-[40px] h-[40px] top-1/2 -translate-y-1/2 right-4 bg-white rounded-full cursor-pointer"
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
      </div>
      <Thumbnails indexType="main" />
    </div>
  );
};

export default ProductGallery;
