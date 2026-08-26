interface TestItem {
  name: string;
  price: number;
  department: string;
  sampleType: string;
  prerequisite: string;
}

import { useState, useContext, useEffect } from "react";
import './styles/PriceList.css';
import { PriceListContext } from './PriceListContext'; 
/*import NavBar from "../../components/NavBar";
import PageHero from "../../components/PageHero"
import Footer from "../../components/Footer";
*/
function Tests() {
  const [searchQuery, setSearchQuery] = useState("");
  const { priceListArray, isLoading, error } = useContext(PriceListContext);

  // 1. Track the hovered item and its locked X/Y coordinates
  const [hoveredTest, setHoveredTest] = useState<TestItem | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const filteredTestsArray = priceListArray.filter((item: TestItem) => {
    const query = searchQuery.toLowerCase();
    const safeName = String(item.name || "");
    const safeDepartment = String(item.department || "");
    
    return (
      safeName.toLowerCase().includes(query) ||
      safeDepartment.toLowerCase().includes(query)
    );
  });

  const groupedData = filteredTestsArray.reduce((acc, currentItem) => {
    const dept = currentItem.department || "Other"; 
    
    if (!acc[dept]) {
      acc[dept] = []; 
    }
    acc[dept].push(currentItem);
    
    return acc;
  }, {} as Record<string, TestItem[]>);

  // 2. NEW: Calculate position exactly ONCE when the mouse enters the row
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>, item: TestItem) => {
    // Finds exactly where the row is on the user's screen
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Anchor it 20px indented from the left, and 8px below the row
    let calculatedX = rect.left + 20;
    let calculatedY = rect.bottom + 8;

    // Safety measure: If the row is at the very bottom of the screen, 
    // flip the card ABOVE the row so it doesn't get cut off.
    if (calculatedY + 200 > window.innerHeight) {
      calculatedY = rect.top - 190;
    }

    setTooltipPos({ x: calculatedX, y: calculatedY });
    setHoveredTest(item);
  };

  return (
    <section className="tests">
      <h2>Menu</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {isLoading && <p style={{ textAlign: "center", padding: "20px" }}>Loading test prices...</p>}
      {error && <p style={{ textAlign: "center", padding: "20px", color: "red" }}>Error: {error}</p>}
      
      {!isLoading && !error && (
        <div className="departments-container">
          {Object.entries(groupedData).map(([departmentName, tests]) => (
            <div key={departmentName} className="department-card">
              <h3>{departmentName}</h3>
              <div className="list-container">
                <ul className="test-list">
                  {tests.map((item: TestItem, index: number) => (
                    <li 
                      key={index} 
                      className="test-item"
                      // 3. Trigger the single calculation on enter, remove on leave
                      onMouseEnter={(e) => handleMouseEnter(e, item)}
                      onMouseLeave={() => setHoveredTest(null)}
                    >
                      <span className="test-name">{item.name}</span>
                      <span className="test-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {Object.keys(groupedData).length === 0 && (
            <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "20px" }}>No tests found matching your search.</p>
          )}
        </div>
      )}

      {/* 4. Display the card locked to the calculated X/Y coordinates */}
      {hoveredTest && (
        <div 
          className="hover-tooltip-card"
          style={{ 
            top: tooltipPos.y, 
            left: tooltipPos.x 
          }}
        >
          <h4>{hoveredTest.name}</h4>
          <div className="tooltip-details">
            <p><span>Department:</span> {hoveredTest.department}</p>
            <p><span>Sample Type:</span> {hoveredTest.sampleType}</p>
            <p><span>Prerequisite:</span> {hoveredTest.prerequisite}</p>
            <p className="tooltip-price"><span>Price:</span> ₹{hoveredTest.price}</p>
          </div>
        </div>
      )}
    </section>
  );
}

/*function Packages() {
  return(
    <section className="packages">
      <h2>Packages</h2>
    </section>
  )
}*/

export default function PriceList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <>
    {/*<NavBar />
    <PageHero text="Price List" subText="All our tests and packages" />*/}
    <Tests /> 
    {/*<Packages />
    <Footer />*/}
    </>
  )
}