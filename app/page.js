import React from "react";
import Navbar from "./Shared/Components/Navbar";
import Header from "./LandingPage/Header";
import About from "./LandingPage/About";
import PopularCategories from "./LandingPage/PopularCategories";
import PopularProducts from "./LandingPage/PopularProducts";
import Accolades from "./LandingPage/Accolades";
import Footer from "./Shared/Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <PopularCategories />
      <About />
      <PopularProducts />
      <Accolades />
      <Footer />
    </div>
  );
}
