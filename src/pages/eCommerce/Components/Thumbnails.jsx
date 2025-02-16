import React from 'react';
import { thumbnails } from '../Data/data';
import { useCart } from '../CartContext';

const Thumbnails = () => {
  const { selectedIndex, setSelectedIndex } = useCart();

  return (
    <div className="flex gap-[31px] group">
      {thumbnails.map((img, index) => (
        <div
          className={`group rounded-[10px] ${selectedIndex === index ? 'outline outline-[#FF7E1B] outline-[2px]' : ''}`}
          onClick={() => setSelectedIndex(index)}
          key={index}
          tabIndex="0"
        >
          <img
            src={img.src}
            alt="image"
            className={`thumbnail group-focus:opacity-30`}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
