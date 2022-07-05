import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/Home";
import Shop from "../modules/Shop";
import Features from "../modules/Features";
import Blog from "../modules/Blog";
import About from "../modules/About";
import Contact from "../modules/Contact";
import ProductDetails from "../modules/Home/coponents/ProductDetails";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Features />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default PrivateRoutes;
