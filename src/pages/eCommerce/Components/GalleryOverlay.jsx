import { thumbnails } from '../Data/data';
import Thumbnails from './Thumbnails';
import { useGallery } from '../Contexts/GalleryContext';

const GalleryOverlay = () => {
  const {
    activeGallery,
    toggleGallery,
    overlayIndex,
    setOverlayIndex,
    prevItemOverlay,
    nextItemOverlay,
  } = useGallery();

  return (
    <div
      className={`${activeGallery ? 'xl:absolute' : 'hidden'} w-full h-screen z-10 flex top-0 left-0 bg-[hsla(0,0%,0%,0.75)] justify-center`}
    >
      <div className="flex flex-col mt-[133px] top-0 z-50 items-center">
        {/* the main img and the span el-s*/}
        <div className="mb-[40px] relative">
          {/* close icon */}
          <span
            className="cursor-pointer absolute -top-[40px] right-0"
            onClick={toggleGallery}
          >
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
          <span
            className="flex items-center justify-center absolute w-[56px] h-[56px] top-[237px] -left-[28px] bg-white rounded-full cursor-pointer"
            onClick={prevItemOverlay}
          >
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
            className="flex items-center justify-center absolute w-[56px] h-[56px] top-[237px] -right-[28px] bg-white rounded-full cursor-pointer"
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
