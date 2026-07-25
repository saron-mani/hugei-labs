import React from 'react';
import './styles/AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
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

        {/* Note: If you are using react-router-dom, you can swap this standard button 
            for a <Link to="/about"> component instead */}
        <button 
          className="about-button" 
          onClick={() => window.location.href = '/about'}
        >
          Read Our Full Story
        </button>
      </div>
    </section>
  );
};

export default AboutSection;