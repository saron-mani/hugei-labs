import { useState } from 'react';
import './styles/Faq.css';

// Define the shape of our FAQ data
interface FaqItem {
  question: string;
  answer: string;
}

// The raw data for the lab
const faqData: FaqItem[] = [
  { 
    question: "Do I need to fast before my blood test?", 
    answer: "Many blood tests, like lipid panels or fasting blood glucose, require you to fast for 8-12 hours. We will inform you if your specific test requires fasting when you book."
  },
  { 
    question: "How long does it take to get my results?", 
    answer: "Most routine blood test results are available within 12 to 36 hours. Specialized tests may take up to a week." 
  },
  { 
    question: "Do I need an appointment, or do you accept walk-ins?", 
    answer: "We accept both! Although we prefer walk-ins." 
  },
  { 
    question: "Is my personal and medical information secure?", 
    answer: "Absolutely. We follow strict data privacy guidelines to ensure your medical records are encrypted and kept strictly confidential." 
  }
];

const Faq = () => {
  // State to track which accordion item is currently open
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to handle the click event
  const toggleFaq = (index: number) => {
    // If clicking the already open item, close it (set to null). Otherwise, open the new index.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      
      <div className="faq-list">
        {/* Mapping through the array to render each question */}
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleFaq(index)}
            >
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            
            {/* Conditional rendering: only show the answer if this item's index matches the activeIndex */}
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;