import React from 'react';
import largeImg from '../images/image-product-1.jpg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';

const ProductGallery = () => {
  return (
    <div className="xl:flex xl:flex-col gap-[32px]">
      {/* Displayed Image */}
      <div className="w-full xl:w-[445px] xl:h-[445px]">
        <img
          src={largeImg}
          alt="image"
          className=" xl:rounded-[15px] cursor-pointer"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-[31px]">
        <img src={thumb1} alt="thumb1" className="thumbnail" />
        <img src={thumb2} alt="thumb2" className="thumbnail" />
        <img src={thumb3} alt="thumb3" className="thumbnail" />
        <img src={thumb4} alt="thumb4" className="thumbnail" />
      </div>
    </div>
  );
};

export default ProductGallery;
