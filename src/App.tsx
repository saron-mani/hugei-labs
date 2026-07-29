import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import PriceList from "./Pages/PriceList"
import "./App.css"

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tests" element={<PriceList />} />
      </Routes>
    </Router>
  )
}