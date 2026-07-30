import { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="lab-navbar">
      <div className="navbar-container">
        
        {/* Brand / Logo (Left) */}
        <a href="/" className="navbar-brand pt-sans-narrow-bold">
          <img src="../src/assets/name-img.png" alt="Logo" />
          <span className="brand-text"></span>
        </a>

        {/* Navigation Links (Right on Desktop) */}
        <ul className={`navbar-menu roboto-400 ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <li><a href="../">Home</a></li>
          <li><a href="../#about">About Us</a></li>
          <li><a href="../#tests">Tests</a></li>
          <li><a href="../#HomeCollection">Home Collection</a></li>
          <li><a href="../#contact">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button (Visible only on Mobile) */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;