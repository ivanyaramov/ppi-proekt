import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <p>Vetrino pets &copy; 2023 My Company.</p>
        <div>
          <p>Follow us on social media:</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="contacts">Contact us Phone: +359878773238</div>
      </div>
    </footer>
  );
}

export default Footer;
