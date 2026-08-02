interface TestItem {
  name: string;
  price: number;
  department: string;
  sampleType: string;
  prerequisite: string;
}

const webAppUrl="https://script.google.com/macros/s/AKfycbzF--ZpbI37QdEjVGoZwtD-WudOLbZ6lGhvuv6MX3wb7qg_Tn7m4Ti-dJPONmqEvDh-_w/exec"

import { createContext, useState, useEffect, type ReactNode } from 'react';

// Define what our context will hold
interface PriceContextType {
  priceListArray: TestItem[];
  isLoading: boolean;
  error: string | null;
}

// Create the Context
export const PriceListContext = createContext<PriceContextType>({
  priceListArray: [],
  isLoading: true,
  error: null,
});

// Create the Provider Component
export const PriceListProvider = ({ children }: { children: ReactNode }) => {
  const [priceListArray, setPriceListArray] = useState<TestItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(webAppUrl);
        if (!response.ok) throw new Error("Failed to fetch data");
        
        const data: TestItem[] = await response.json();
        setPriceListArray(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <PriceListContext.Provider value={{ priceListArray, isLoading, error }}>
      {children}
    </PriceListContext.Provider>
  );
};