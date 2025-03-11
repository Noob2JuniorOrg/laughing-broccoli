import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import '../Styling/main.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <ProductGallery />
      <ProductDetails />
    </div>
  );
};

export default MainContent;
