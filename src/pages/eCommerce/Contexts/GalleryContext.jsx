import { createContext, useState, useContext } from 'react';

const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState(false);
  const [overlayIndex, setOverlayIndex] = useState(selectedIndex);
  const toggleGallery = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      setOverlayIndex(selectedIndex);
      setActiveGallery(!activeGallery);
    }
    setSelectedIndex(overlayIndex);
  };

  // Overlay image change
  const prevItemOverlay = () => {
    if (overlayIndex > 0) {
      setOverlayIndex(overlayIndex - 1);
    } else {
      setOverlayIndex(3);
    }
  };
  const nextItemOverlay = (totalItems) => {
    if (overlayIndex < totalItems) {
      setOverlayIndex(overlayIndex + 1);
    } else {
      setOverlayIndex(0);
    }
  };

  // Mobile mode image change
  const prevItem = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(3);
    }
  };
  const nextItem = (totalItems) => {
    if (selectedIndex < totalItems) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  return (
    <GalleryContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        activeGallery,
        setActiveGallery,
        toggleGallery,
        nextItem,
        nextItemOverlay,
        prevItem,
        prevItemOverlay,
        overlayIndex,
        setOverlayIndex,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  return useContext(GalleryContext);
}
