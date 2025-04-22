import { thumbnails } from '../Data/data';
import Thumbnails from './Thumbnails';
import { useGallery } from '../Contexts/GalleryContext';
import '../Styling/productGallery.css';
import PrevImgMobile from './IconComponents/PrevImgMobile';
import NextImgMobile from './IconComponents/NextImgMobile';

const ProductGallery = () => {
  const { selectedIndex, toggleGallery, prevItem, nextItem } = useGallery();

  return (
    <div className="product-gallery-container">
      <div className="product-gallery-sizing ">
        <PrevImgMobile prevItem={prevItem} />
        {/* Image on focus */}
        <img
          src={thumbnails[selectedIndex]?.displayImage}
          alt="image"
          className="focused-img"
          index={selectedIndex}
          onClick={toggleGallery}
        />
        <NextImgMobile nextItem={nextItem} />
      </div>
      <Thumbnails indexType="main" />
    </div>
  );
};

export default ProductGallery;
