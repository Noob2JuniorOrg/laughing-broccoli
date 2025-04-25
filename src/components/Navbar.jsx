import React from 'react';
import MenuButtons from './MenuButtons';

const Navbar = () => {
  return (
    <div>
      <h3 className="w-full text-3xl font-medium text-[#61dbfb] mx-auto text-center">
        React
      </h3>
      <div>
        <MenuButtons />
      </div>
    </div>
  );
};

export default Navbar;
