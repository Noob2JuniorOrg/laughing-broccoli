import React, { useState } from 'react';
import { thumbnails } from '../Data/data';
import { useCart } from '../CartContext';
import Thumbnails from './Thumbnails';

const ProductGallery = () => {
  const { selectedIndex, setSelectedIndex, toggleGallery } = useCart();

  return (
    <div className="xl:flex xl:flex-col gap-[32px] xl:relative">
      {/* Displayed Image */}
      <div className="w-full xl:w-[445px] xl:h-[445px]">
        <img
          src={thumbnails[selectedIndex]?.displayImage}
          alt="image"
          className="xl:rounded-[15px] cursor-pointer"
          index={selectedIndex}
          onClick={toggleGallery}
        />
      </div>

      {/* Thumbnails */}
      <Thumbnails />
    </div>
  );
};

export default ProductGallery;
