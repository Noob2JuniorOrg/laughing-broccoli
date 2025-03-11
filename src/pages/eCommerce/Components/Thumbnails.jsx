import React from 'react';
import { thumbnails } from '../Data/data';
import { useGallery } from '../Contexts/GalleryContext';
import '../Styling/productGallery.css';

const Thumbnails = ({ indexType }) => {
  const { selectedIndex, setSelectedIndex, overlayIndex, setOverlayIndex } =
    useGallery();

  const activeIndex = indexType === 'overlay' ? overlayIndex : selectedIndex;
  const setActiveIndex =
    indexType === 'overlay' ? setOverlayIndex : setSelectedIndex;

  return (
    <div className="flex gap-[31px]">
      {thumbnails.map((img, index) => (
        <div
          className={`xl:relative group rounded-[10px] ${activeIndex === index ? 'outline outline-[#FF7E1B] outline-[2px]' : ''}`}
          onClick={() => setActiveIndex(index)}
          key={index}
          tabIndex="0"
        >
          <img
            src={img.src}
            alt="image"
            className="hidden xl:block xl:w-[88px] xl:h-[88px] rounded-[10px] "
          />
          <div className="thumbnail-backdrop group-focus:opacity-75"></div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
