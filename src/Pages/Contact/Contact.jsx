import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="ec-contact-section">
        <div className="ec-contact-hero">
          <h1 className="ec-contact-hero-title">Contact Us</h1>
          <div className="ec-contact-breadcrumb">
            <Link className="ec-no-underline ec-link-clr" to="/Home">
              Home |{" "}
            </Link>{" "}
            Contact Us
          </div>
        </div>

        <div className="ec-contact-container">
          <div className="ec-contact-header">
            <span className="ec-contact-label">GET IN TOUCH</span>
            <h2 className="ec-contact-title-contact">
              We Ready To Help You! Need Any Products Or Consultations ?
            </h2>
            <p className="ec-contact-description">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="ec-contact-cards">
            <div className="ec-contact-card ec-contact-card1">
              <div className="ec-contact-card-icon">
                <svg
                  className="ec-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h3 className="ec-contact-card-title">Locations</h3>
              <p className="ec-contact-card-text">
                480 Main Street, Prinsengracht, 3rd Block, Japan
              </p>
            </div>

            <div className="ec-contact-card ec-contact-card2">
              <div className="ec-contact-card-icon">
                <svg
                  className="ec-contact-icon contact-icon2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="ec-contact-card-title">Email Address</h3>
              <p className="ec-contact-card-text">example@yahoo.com</p>
              <p className="ec-contact-card-text">example02@yahoo.com</p>
            </div>

            <div className="ec-contact-card ec-contact-card3">
              <div className="ec-contact-card-icon">
                <svg
                  className="ec-contact-icon ec-contact-icon3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="ec-contact-card-title">Phone Us</h3>
              <p className="ec-contact-card-text">+1 234 829 8948</p>
              <p className="ec-contact-card-text">+2 234 229 8948</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ec-contact-page1">
        <div className="ec-contact-header1">
          <span className="ec-contact-label1">GET IN TOUCH</span>
          <h1 className="ec-contact-title1">
            Looking For Agriculture & Organic Products
          </h1>
        </div>

        <div className="ec-contact-content1">
          <div className="ec-map-container1">
            <iframe
              className="ec-google-map1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-93.2889!3d44.9684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMSdOIDkzwrA0NydX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="ec-form-container1">
            <form className="ec-contact-form1">
              <div className="ec-form-group1">
                <input
                  type="text"
                  className="ec-form-input1"
                  placeholder="Full name"
                />
              </div>
              <div className="ec-form-group1">
                <input
                  type="email"
                  className="ec-form-input1"
                  placeholder="Email Address"
                />
              </div>
              <div className="ec-form-group1">
                <input
                  type="tel"
                  className="ec-form-input1"
                  placeholder="Phone Number"
                />
              </div>
              <div className="ec-form-group1">
                <textarea
                  className="ec-form-textarea1"
                  placeholder="Write message"
                  rows={5}
                />
              </div>
              <button type="submit" className="ec-submit-button1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
