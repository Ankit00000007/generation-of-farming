import React from "react";
import { Router, Routes, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";

const NavPages = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path="/*" element={<Home />}></Route>
        <Route exact={true} path="/about" element={<About />}></Route>
        <Route exact={true} path="/products" element={<Products />}></Route>
        <Route exact={true} path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default NavPages;
