import React from "react";
import { Home, AboutUs, Services, GiftCardPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gift-cards" element={<GiftCardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
