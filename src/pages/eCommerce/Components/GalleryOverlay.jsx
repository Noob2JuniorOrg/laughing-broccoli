import { thumbnails } from '../Data/data';
import Thumbnails from './Thumbnails';
import { useGallery } from '../Contexts/GalleryContext';
import '../Styling/galleryOverlay.css';
import CloseIcon from './IconComponents/CloseIcon';
import PreviousSelector from './IconComponents/PreviousSelector';
import NextSelector from './IconComponents/NextSelector';

const GalleryOverlay = () => {
  const { activeGallery, overlayIndex } = useGallery();

  return (
    <div className={`${activeGallery ? 'gallery-overlay-size' : 'hidden'} `}>
      <div className="gallery-overlay-styling">
        <div className="mb-[40px] relative">
          <CloseIcon />
          <PreviousSelector />
          <NextSelector />
          <img
            src={thumbnails[overlayIndex]?.displayImage}
            alt="largeImage"
            className="w-[550px] h-[550px] rounded-[15px]"
          />
        </div>
        <Thumbnails indexType="overlay" />
      </div>
    </div>
  );
};

export default GalleryOverlay;
