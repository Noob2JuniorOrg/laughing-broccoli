import React from 'react';
import preview from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';
import { useCart } from '../Contexts/CartContext';
import '../Styling/cart.css';

const Cart = () => {
  const { items, setItems } = useCart();

  const decrease = () => {
    if (items > 0) {
      setItems((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="cart">
      {/* Heading "Cart" */}
      <div className="cart-heading">Cart</div>
      {items === 0 ? (
        <p className="text-[#69707D] font-bold m-auto">Your cart is empty.</p>
      ) : (
        <div className="cart-styling">
          <div className="cart-item-styling">
            <img src={preview} alt="preview" className="cart-item-img" />
            <div className="flex flex-col">
              <p className="text-[#69707D]">Fall Limited Edition Sneakers</p>

              {/* Pricing */}
              <div className="flex min-gap-[0.375rem]">
                <p className="w-[6rem] text-[#69707D]">$125.00 x {items}</p>
                <div className="font-bold text-black">{`$${items * 125}`}</div>
              </div>
            </div>
            <img
              src={deleteIcon}
              alt="delete"
              className="w-[14px] h-[16px] cursor-pointer"
              onClick={decrease}
            />
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
