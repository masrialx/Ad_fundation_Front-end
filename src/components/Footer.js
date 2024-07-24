// components/Footer.js

import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about" data-aos="fade-down">
          <h3>About Us</h3>
          <p>
            Our mission is to provide support to those in need through generous donations and innovative solutions. We aim to promote education, healthcare, and community development while ensuring transparency and accountability in all our activities.
          </p>
        </div>
        <div className="footer-section services" data-aos="fade-down">
          <h3>Our Services</h3>
          <ul>
            <li>Monetary Donations</li>
            <li>Food and Clothing Drives</li>
            <li>Medical Supply Donations</li>
            <li>Volunteer Opportunities</li>
          </ul>
        </div>
        <div className="footer-section contact" data-aos="fade-up">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@donationservices.org">info@donationservices.org</a></p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Donation St, Help City, HC 12345</p>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:info@donationservices.org" aria-label="Email">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" data-aos="fade-up">
        <p>&copy; 2024 Donation Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
