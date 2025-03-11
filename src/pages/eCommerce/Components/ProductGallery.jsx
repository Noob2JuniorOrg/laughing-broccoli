import { thumbnails } from '../Data/data';
import Thumbnails from './Thumbnails';
import { useGallery } from '../Contexts/GalleryContext';
import '../Styling/productGallery.css';

const ProductGallery = () => {
  const { selectedIndex, toggleGallery, prevItem, nextItem } = useGallery();

  return (
    <div className="product-gallery-container">
      <div className="product-gallery-sizing ">
        {/* icon-prev */}
        <span className="prev-img-mobile" onClick={prevItem}>
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
        {/* Image on focus */}
        <img
          src={thumbnails[selectedIndex]?.displayImage}
          alt="image"
          className="focused-img"
          index={selectedIndex}
          onClick={toggleGallery}
        />
        {/* icon-next */}
        <span
          className="next-img-mobile"
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
