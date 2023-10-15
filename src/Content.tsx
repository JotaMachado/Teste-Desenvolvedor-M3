import React from "react";
import { Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
const Content = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Store />} />
    </Routes>
  );
};

export default Content;
