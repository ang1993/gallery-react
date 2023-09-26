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
import logo from "../../assets/artBLogo.png";
import { Link } from "react-router-dom";

const FooterComponent = () => (
    <footer className="Footer">
        <div className="ContactInfo">
          <Link to="/"><img src={logo} className="FooterLogo" alt="artbrowser" /></Link>
          <div className="SocialMedia">
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
          <div>
            <p>© 2023 - Artbrowser</p>
            <p>hello@artbrowser.com</p>
          </div>
        </div>
        
    </footer>
);

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
