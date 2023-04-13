"use client";
import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  console.log("cart", cart);
  
  // Passing data to receieve from other components
  return [cart, setCart];
};

export default useCart;
