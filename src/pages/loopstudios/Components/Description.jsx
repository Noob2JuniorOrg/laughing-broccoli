import React from 'react';
import bgImage from '../images/mobile/image-interactive.jpg';
import bgImageDesktop from '../images/desktop/image-interactive.jpg';

const Description = () => {
  return (
    <div className="description">
      <div className="xl:absolute">
        <img src={bgImage} alt="" className="xl:hidden m-auto" />
        <img src={bgImageDesktop} alt="" className="hidden xl:inline" />
      </div>
      <div className="information-styling">
        <div className="information-components">
          <p className="information-heading">The leader in interactive VR</p>
          <p className="information-text ">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
