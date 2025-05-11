import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-three-cols">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Sana's Bakery</h3>
          <p><FaMapMarkerAlt /> 123 Cake Street, Sweet City</p>
          <p><FaPhoneAlt /> +91-9876543210</p>
          <p><FaEnvelope /> info@sanasbakery.com</p>
        </div>

        {/* Social & Note */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
          <p className="tagline">Baking sweet memories since 2023 🍰</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sana's Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
