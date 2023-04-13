"use client";
import { useEffect, useState } from "react";
import { handleFetchProducts } from "../services/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // Accessing all products throw API
      const popularProductsResponse = await handleFetchProducts();
      setProducts(popularProductsResponse?.data);
    })();
  }, []);

  // Passing data to receieve from other components
  return [products, setProducts];
};

export default useProducts;
