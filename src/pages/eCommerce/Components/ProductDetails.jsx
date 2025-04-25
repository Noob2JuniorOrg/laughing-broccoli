import React, { useState } from 'react';
import { useCart } from '../Contexts/CartContext';
import '../Styling/productDetails.css';
import MinusBtn from './ButtonComponents/MinusBtn';
import PlusBtn from './ButtonComponents/PlusBtn';
import AddToCartBtn from './ButtonComponents/AddToCartBtn';

const ProductDetails = () => {
  const { items, setItems, toggleCart, isCartOpen } = useCart();
  const [chosenCount, setChosenCount] = useState(0);

  const increase = () => {
    setChosenCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    if (chosenCount > 0) {
      setChosenCount((prevCount) => prevCount - 1);
    }
  };

  const addToCart = () => {
    items === 0 ? setItems(chosenCount) : setItems(items + chosenCount);

    if (isCartOpen === false && chosenCount > 0) {
      toggleCart();
    }
    setChosenCount(0);
  };

  return (
    <div className="product-info ">
      <div className="manufacturer">Sneaker Company</div>
      <p className="product-name">Fall Limited Edition Sneakers</p>
      <p className="product-description ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      {/* Price */}
      <div className="price">
        <div className="flex gap-4">
          <p className="font-bold text-[#1D2026] xl:text-[28px]">$125.00</p>
          <span className="discount">50%</span>
        </div>
        <p className="text-[#B6BCC8] font-bold line-through">$250.00</p>
      </div>

      {/* Buttons */}
      <div className="buttons-container ">
        <div className="quantity-btn-container">
          <MinusBtn decrease={decrease} />
          <span className="font-bold">{chosenCount}</span>
          <PlusBtn increase={increase} />
        </div>
        <AddToCartBtn addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
