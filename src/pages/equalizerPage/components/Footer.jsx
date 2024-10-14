import React from 'react';
import logo from '../assets/logo.svg';
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="mt-[-140px] md:mt-[11.438em] xl:mt-[12.625em]">
      <div className="footer-layout">
        <img
          src={logo}
          alt="logo"
          className="footer-logo col-start-1 row-start-1"
        />
        <div className="footer-contacts">
          <p>All rights reserved © Equalizer 2021</p>
          <p>
            Have any problems? Contact us via social media or email us at{' '}
            <strong>equalizer@example.com</strong>
          </p>
        </div>
        <div className="social-icons">
          <a href="#facebook" className="social-icon-filter">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#instagram">
            <img
              src={instagram}
              alt="instagram"
              className="social-icon-filter"
            />
          </a>
          <a href="#twitter">
            <img src={twitter} alt="twitter" className="social-icon-filter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
