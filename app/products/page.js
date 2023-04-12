import React from "react";
import Navbar from "../Shared/Components/Navbar";
import Footer from "../Shared/Components/Footer";
import ProductsFilter from "./ProductsFilter";
import Products from "./;

const Products = () => {
  return (
    <>
      <Navbar dark={false}/>
      <ProductsFilter />
      <Products/>
      <Footer />
    </>
  );
};

export default Products;
