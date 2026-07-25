import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="lab-footer">
{/*      <div className="brand-section">
          <h3 className="footer-brand">Central Laboratories</h3>
        </div>*/}
      <div className="footer-container">
        
        {/* Column 1: Brand Info */}

        {/* Column 3: Locations */}
        <div className="footer-section locations-section">
          <h4>Our Socials</h4>
          <ul>
            <li><a target="_blank" href="https://www.facebook.com/CentralLaboratoriesOfficial/">Facebook</a></li>
            <li><a target="_blank" href="https://www.instagram.com/centrallaboratories/">Instagram</a></li>
            <li><a target="_blank" href="https://wa.me/918281956994">WhatsApp</a></li>
            <li><a target="_blank" href="#">Youtube</a></li>
          </ul>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <p>☎️ 0487 2602861</p>
          <p>📞 +91 8281 956 994</p>
          <p>✉️ <a href="mailto:info.centrallabs@gmail.com">info.centrallabs@gmail.com</a></p>
          <p>📍 Head Office, Central Laboratories, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Khadeeja Memorial Building, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vatanappilly 680614</p>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Central Laboratories. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;