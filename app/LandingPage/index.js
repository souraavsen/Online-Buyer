import React from "react";
import Header from "./Header";
import PopularCategories from "./PopularCategories";
import About from "./About";
import PopularProducts from "./PopularProducts";
import Accolades from "./Accolades";

const LandingPage = () => {
  return (
    <>
      <Header />
      <PopularCategories />
      <About />
      <PopularProducts />
      <Accolades />
    </>
  );
};

export default LandingPage;
