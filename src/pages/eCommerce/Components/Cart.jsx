import React from 'react';
import preview from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';
import { useCart } from '../CartContext';

const Cart = () => {
  const { items, setItems } = useCart();

  const decrease = () => {
    if (items > 0) {
      setItems((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="absolute right-[-64px] xl:-right-[180px] top-[54px] xl:top-[50px] flex flex-col w-[360px] h-[256px] bg-white rounded-[10px] drop-shadow-xl font-e-commerce">
      {/* Heading "Cart" */}
      <div className="font-e-commerce font-bold pt-[24px] pr-[302px] pb-[27px] pl-[24px] border-b-[1px] rounded-t-[10px] text-black">
        Cart
      </div>
      {items === 0 ? (
        <p className="text-[#69707D] font-bold m-auto">Your cart is empty.</p>
      ) : (
        <div className="h-full flex flex-col px-[24px] pt-[24px] pb-[32px]">
          <div className="flex items-center justify-between mb-[24px]">
            <img
              src={preview}
              alt="preview"
              className="w-[50px] h-[50px] rounded-[4px]"
            />
            <div className="flex flex-col">
              <p className="text-[#69707D]">Fall Limited Edition Sneakers</p>

              {/* Pricing */}
              <div className="flex gap-[6px]">
                <p className="text-[#69707D]">$125.00 x {items}</p>
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
          <button className="flex xl:w-full h-[56px] bg-[#FF7E1B] text-white font-bold rounded-[10px] items-center justify-center xl:gap-[16px] hover:opacity-50 ease-in-out duration-200">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
