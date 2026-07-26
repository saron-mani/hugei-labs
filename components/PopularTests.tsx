import React from 'react';
import AppleButton from './AppleButton';
import './styles/PopularTests.css';

interface DiagnosticItem {
  id: string;
  name: string;
}

const popularTests: DiagnosticItem[] = [
  { id: "t1", name: "Vitamin D (25-OH)" },
  { id: "t2", name: "Fasting Blood Sugar (FBS)" },
  { id: "t3", name: "Complete Blood Count (CBC)" },
  { id: "t4", name: "Thyroid Profile (T3, T4, TSH)" },
  { id: "t5", name: "Chest X-Ray (PA View)" },
  { id: "t6", name: "ECG (Electrocardiogram)" }
];

const healthPackages: DiagnosticItem[] = [
  { id: "p1", name: "Comprehensive Health Checkup" },
  { id: "p2", name: "Complete Diabetes Checkup" },
  { id: "p3", name: "Mini Health Checkup" },
  { id: "p4", name: "Arthritis Panel" },
  { id: "p5", name: "MRI Package" }
];

const PopularTestsSection: React.FC = () => {
  return (
    <section className="diagnostics-section">
      <div className="diagnostics-container">
        
        <div className="diagnostics-header">
          <h2>Popular Diagnostics & Scans</h2>
          <p>Walk-ins welcome. Fast and accurate reporting.</p>
        </div>
        
        <div className="diagnostics-layout-split">
          
          {/* Left Column: 6 Tests */}
          <div className="diagnostics-column">
            <h3 className="section-subheader">Individual Tests & Scans</h3>
            <ul className="diagnostics-list">
              {popularTests.map((test) => (
                <li key={test.id} className="diagnostic-item">
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {test.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: 5 Packages */}
          <div className="diagnostics-column">
            <h3 className="section-subheader">Health Packages</h3>
            <ul className="diagnostics-list">
              {healthPackages.map((pkg) => (
                <li key={pkg.id} className="diagnostic-item">
                  <svg className="check-icon package-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {pkg.name}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="diagnostics-action">
          
          <AppleButton text="All Tests and Prices &rarr;" />
        </div>

      </div>
    </section>
  );
};

export default PopularTestsSection;