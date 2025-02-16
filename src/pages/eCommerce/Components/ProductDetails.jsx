import React, { useContext, useState } from 'react';
import { useCart } from '../CartContext';

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
    <div className="h-[532px] bg-white xl:w-[445px] px-[24px] pt-[24px] pb-[88px] xl:px-0 xl:pt-[62px] xl:pb-[67px] font-e-commerce">
      <div className="uppercase text-[#FF7E1B] text-[12px] tracking-[1.85px] xl:text-[13px] font-bold xl:tracking-[2px]">
        Sneaker Company
      </div>
      <p className="font-bold text-[28px]  xl:text-[44px] text-[#1D2026] leading-[32px] xl:leading-[48px] mt-[19px] xl:mt-[27px]">
        Fall Limited Edition Sneakers
      </p>
      <p className="text-[#69707D] tracking-[0px] mt-[15px] xl:mt-[32px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      {/* Price */}
      <div className="flex xl:flex-col xl:gap-[10px] mt-6 xl:mt-[24px] justify-between">
        <div className="flex gap-4">
          <p className="font-bold text-[#1D2026] xl:text-[28px]">$125.00</p>
          <span className="flex justify-center relative top-1 xl:top-3 bg-[#FFEEE2] text-[#FF7E1B] font-bold w-[51px] h-[27px] items-center rounded-[6px]">
            50%
          </span>
        </div>
        <p className="text-[#B6BCC8] font-bold line-through">$250.00</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col xl:flex-row justify-between gap-4 mt-6 xl:mt-[32px]">
        {/* Quantity */}
        <div className="flex bg-[#F6F8FD] xl:w-[157px] h-[56px] px-[16px] py-[22px] rounded-[10px] items-center justify-between">
          {/* Minus btn */}
          <button onClick={decrease}>
            <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </button>
          <span className="font-bold">{chosenCount}</span>
          {/* Plus btn */}
          <button onClick={increase}>
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
            </svg>
          </button>
        </div>
        {/* Add to Cart btn */}
        <button
          className="flex xl:w-[272px] h-[56px] bg-[#FF7E1B] rounded-[10px] items-center justify-center xl:gap-[16px] hover:opacity-50 ease-in-out duration-200"
          onClick={addToCart}
        >
          <span>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#FFFFFF"
                fillRule="nonzero"
              />
            </svg>
          </span>
          <span className="text-white font-bold">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
