import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { CartProvider } from "./Pages/Cart/CartContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<LandingPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
