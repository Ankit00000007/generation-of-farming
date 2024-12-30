import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<LandingPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
