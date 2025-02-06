import React from 'react';

const Cart = () => {
  return (
    <div className="absolute right-[7px] xl:right-[89px] top-[141px] xl:top-[159px] flex flex-col w-[360px] h-[256px] bg-white rounded-[10px] drop-shadow-xl">
      {/* Heading "Cart" */}
      <div className="font-e-commerce font-bold pt-[24px] pr-[302px] pb-[27px] pl-[24px] border-b-[1px] rounded-t-[10px]">
        Cart
      </div>
      <div className="h-full m-auto">Items</div>
    </div>
  );
};

export default Cart;
