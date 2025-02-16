import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import GalleryOverlay from './GalleryOverlay';

const MainContent = () => {
  return (
    <div className=" flex flex-col xl:flex-row xl:gap-[125px] xl:mx-[165px] xl:px-[48px] xl:pt-[90px] xl:justify-between">
      <ProductGallery />
      <ProductDetails />
    </div>
  );
};

export default MainContent;
