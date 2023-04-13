import React from "react";
import Navbar from "../Shared/Components/Navbar";
import Footer from "../Shared/Components/Footer";
import ProductsFilter from "./ProductsFilter";
import AllProducts from "./AllProducts";

const Products = () => {
  return (
    <>
      <Navbar dark={false} />
      <ProductsFilter />
      <AllProducts />
      <Footer />
    </>
  );
};

export default Products;
