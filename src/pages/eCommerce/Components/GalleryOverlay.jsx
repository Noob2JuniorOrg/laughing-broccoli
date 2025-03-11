import { thumbnails } from '../Data/data';
import Thumbnails from './Thumbnails';
import { useGallery } from '../Contexts/GalleryContext';
import '../Styling/galleryOverlay.css';

const GalleryOverlay = () => {
  const {
    activeGallery,
    toggleGallery,
    overlayIndex,
    prevItemOverlay,
    nextItemOverlay,
  } = useGallery();

  return (
    <div className={`${activeGallery ? 'gallery-overlay-size' : 'hidden'} `}>
      <div className="gallery-overlay-styling">
        {/* Image and spans */}
        <div className="mb-[40px] relative">
          {/* close icon */}
          <span className="overlay-close" onClick={toggleGallery}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 15"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 text-white hover:text-[#FF7E1B] ease-in-out duration-200"
            >
              <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
            </svg>
          </span>
          {/* icon-prev */}
          <span className="prev-icon" onClick={prevItemOverlay}>
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
          {/* icon-next */}
          <span
            className="next-icon"
            onClick={() => nextItemOverlay(thumbnails.length - 1)}
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
