import React from 'react';

const PlusBtn = ({ increase }) => {
  return (
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
  );
};

export default PlusBtn;
