import React from 'react';

const Creations = () => {
  return (
    <div className="mt-24 flex flex-col xl:flex-row items-center">
      <p className="uppercase font-looptstudios-headline font-light text-[2em] xl:text-[3em] text-center mx-auto ">
        Our Creations
      </p>
      <div className="mobile-cards">
        <div className="mobile-bg-image grow bg-[url('./pages/loopstudios/images/mobile/image-deep-earth.jpg')] mobile-gradient-earth">
          <div className="mobile-card-title">Deep Earth</div>
        </div>
        <div className="mobile-bg-image bg-[url('./pages/loopstudios/images/mobile/image-night-arcade.jpg')] mobile-gradient-arcade">
          <div className="mobile-card-title">night arcade</div>
        </div>
        <div className="mobile-bg-image bg-[url('./pages/loopstudios/images/mobile/image-soccer-team.jpg')] mobile-gradient-soccer">
          <div className="mobile-card-title">soccer team vr</div>
        </div>
        <div className="mobile-bg-image bg-[url('./pages/loopstudios/images/mobile/image-grid.jpg')] mobile-gradient-grid">
          <div className="mobile-card-title max-w-[58px]">The grid</div>
        </div>
        <div className="mobile-bg-image bg-[url('./pages/loopstudios/images/mobile/image-from-above.jpg')] mobile-gradient-above">
          <div className="mobile-card-title">FROM UP ABOVE VR</div>
        </div>
        <div className="mobile-bg-image bg-[url('./pages/loopstudios/images/mobile/image-pocket-borealis.jpg')] mobile-gradient-borealis">
          <div className="mobile-card-title">Pocket borealis</div>
        </div>
        <div className="mobile-bg-image bg-[url('./pages/loopstudios/images/mobile/image-curiosity.jpg')] mobile-gradient-curiosity">
          <div className="mobile-card-title">the curiosity</div>
        </div>
        <div className="mobile-bg-image bg-[url('./pages/loopstudios/images/mobile/image-fisheye.jpg')] mobile-gradient-fisheye">
          <div className="mobile-card-title">Make it fisheye</div>
        </div>
      </div>
      <button className="uppercase border-[1px] border-black text-black font-loopstudios tracking-[5px] font-extralight w-[157px] h-[40px] mt-[34px] focus:bg-black focus:text-white ease-in-out duration-300">
        see all
      </button>
    </div>
  );
};

export default Creations;
