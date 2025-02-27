import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Gallery functionality
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState(false);
  const toggleGallery = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      setActiveGallery(!activeGallery);
    }
  };

  // Cart functionality
  const [items, setItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        toggleCart,
        isCartOpen,
        selectedIndex,
        setSelectedIndex,
        activeGallery,
        setActiveGallery,
        toggleGallery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
// Custom hook for easier access
export function useCart() {
  return useContext(CartContext);
}
