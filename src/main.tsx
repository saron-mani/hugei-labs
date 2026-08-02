import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PriceListProvider } from './Pages/PriceListContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PriceListProvider>
      <App />
    </PriceListProvider>
  </StrictMode>,
)
