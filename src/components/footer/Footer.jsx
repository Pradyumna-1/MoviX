import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import { Link } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Step into the enchanting world of movies on our website! Stay updated
          with the latest films, insightful reviews, and thrilling trailers from
          diverse genres. Join our passionate community for exclusive content
          and behind-the-scenes peeks. Let's share the joy of cinema together.
          Happy viewing!
        </div>
        <div className="socialIcons">
          <span className="icon">
            <Link
              className="icon"
              to="https://www.facebook.com/profile.php?id=100035573633791"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </span>
          <span className="icon">
            <Link
              className="icon"
              to="https://www.instagram.com/im_siddharth_20/"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </span>
          <span className="icon">
            <Link
              className="icon"
              to="https://github.com/Pradyumna-1"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </span>
          <span className="icon">
            <Link
              className="icon"
              to="https://www.linkedin.com/in/pradyumna-kumar-naik-9398b723a/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
