import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);

  // Add to Cart function
  //   const addToCart = (item, quantity) => {
  //     setCart((prevCart) => {
  //       if (cart.length === 0) {
  //         return [{ ...item, quantity }];
  //       } else {
  //         return prevCart.map((cartItem) => ({
  //           ...item,
  //           quantity: cartItem.quantity + 1,
  //         }));
  //       }
  //     });
  //     console.log(cart);
  //   };

  // const addToCart = (item) => {
  //   const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

  //   if (isItemInCart) {
  //     setCart(
  //       cart.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //   }
  //   console.log(cart);
  // };

  // const removeFromCart = (item) => {
  //   const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

  //   if (isItemInCart) {
  //     setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  //   } else {
  //     setCart(
  //       cart.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity - 1 }
  //           : cartItem
  //       )
  //     );
  //   }
  //   console.log(isItemInCart);
  // };

  // New version of context

  const [items, setItems] = useState(0);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}
// Custom hook for easier access
export function useCart() {
  return useContext(CartContext);
}
