import React from 'react';
import AppleButton from "./AppleButton"
import './styles/AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">Committed to Clinical Excellence</h2>
        
        <div className="about-content">
          <p>
            For over four decades, Central Laboratories has been a trusted cornerstone of 
            healthcare in Kerala. Equipped with state-of-the-art technology and backed by 
            prestigious NABL and ICMR accreditations, we deliver accurate, timely, and 
            accessible diagnostic services you can rely on.
          </p>
        </div>

        <AppleButton text="Read More About Us" to="/#contact" />
      </div>
    </section>
  );
};

export default AboutSection;