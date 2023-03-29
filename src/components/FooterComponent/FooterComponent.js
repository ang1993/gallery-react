import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';
import "./footer.css"


const FooterComponent = () => (
  <div className='FooterComponentBox'>
     <footer className="Footer">
      <div className="FooterContainer">
        <div className="social-media">
          <div className="icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="contact-info">
          <p>hello@artoday.com</p>
        </div>
        <div className="legal">
          <p>© 2023 - Artoday</p>
        </div>
      </div>
    </footer>
  </div>
);

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
