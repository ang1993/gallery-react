import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSlideshare,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";

const FooterComponent = () => (
  <div className="FooterComponentBox">
    <footer className="Footer">
      <div className="FooterContainer">
        <div className="ContactInfo">
          <p>hello@artbrowser.com</p>
        </div>
        <div className="Legal">
          <p>© 2023 - Artbrowser</p>
        </div>
        <div className="SocialMedia">
          <div className="Icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.slideshare.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSlideshare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
