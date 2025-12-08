import React from "react";
import {
  LandingPage,
  AboutUs,
  Services,
  GiftCardPage,
  ContactUs,
  Gallery,
  Cart,
  Product,
  Checkout,
  ErrorPage,
  Success,
  Cancel,
} from "./pages";
import Layout from "./components/Layout/Layout";
import { ScrollToTop } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gift-cards" element={<GiftCardPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
