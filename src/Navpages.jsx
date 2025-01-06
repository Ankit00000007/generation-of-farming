import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import ProductsVariety from "./Pages/ProductsVariety/ProductsVariety";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";
import Cart from "./Pages/Cart/Cart";

const NavPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductsVariety />} />
        <Route
          path="/purchase/:productId/:varietyName"
          element={<PurchaseProduct />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default NavPages;
