import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../Images/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="ec-footer">
      <div className="ec-footer-top">
        <div className="ec-footer-contact">
          {/* Location Section */}
          <div className="ec-contact-item">
            <span className="ec-contact-title">LOCATION</span>
            <p className="ec-contact-text">
              78 JKW Road, Los Angeles, CA 90052
            </p>
          </div>

          {/* Email Section */}
          <div className="ec-contact-item">
            <span className="ec-contact-title">EMAIL US</span>
            <p className="ec-contact-text">
              example@gmail.com
              <br />
              example@gmail.com
            </p>
          </div>

          {/* Phone Section */}
          <div className="ec-contact-item">
            <span className="ec-contact-title">PHONE</span>
            <p className="ec-contact-text">
              1800-258-2750
              <br />
              1800-258-2750
            </p>
          </div>
        </div>

        <div className="ec-footer-content">
          {/* Logo and Description */}
          <div className="ec-footer-info">
            <img
              src={Logo}
              alt="Generation Of Farming"
              className="ec-footer-logo"
            />
            <p className="ec-footer-description">
              Nam pellentesque neque a ipsum tempor Nam pellentesque neque a
              ipsum tempor
            </p>
            <div className="ec-social-links">
              <Link to="#" className="ec-social-icon">
                <FaFacebookSquare />
              </Link>
              <Link to="#" className="ec-social-icon">
                <FaTwitterSquare />
              </Link>
              <Link to="#" className="ec-social-icon">
                <FaSquareInstagram />
              </Link>
            </div>
          </div>

          {/* Pages Links */}
          <div className="ec-footer-links">
            <h3 className="ec-footer-title">PAGES</h3>
            <ul className="ec-footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="ec-footer-links">
            <h3 className="ec-footer-title">Support</h3>
            <ul className="ec-footer-menu">
              <li>
                <Link to="/terms">Terms and conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/account">My Account</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="ec-newsletter">
            <h3 className="ec-footer-title">JOIN OUR MAILING LIST</h3>
            <p className="ec-newsletter-text">
              Join our weekly newsletter to discover about the special process
            </p>
            <div className="ec-newsletter-form">
              <input
                type="email"
                placeholder="your Email"
                className="ec-newsletter-input"
              />
              <button className="ec-newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="ec-footer-bottom">
        <p>©2024 Generation Of Farming. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
