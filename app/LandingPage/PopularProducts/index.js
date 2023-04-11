"use client";
import { getPopularProducts } from "@/app/Shared/services/products";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const popularProductsResponse = await getPopularProducts();
      console.log("popularProducts", popularProductsResponse?.data);
      setPopularProducts(popularProductsResponse?.data?.slice(0, 4));
    })();
  }, []);

  return (
    <div className='w-10/12 mx-auto'>
      <div className='text-2xl font-semibold mb-4 mt-6'>
        Most Popular Products
      </div>
      <div className='grid grid-cols-4'>
        {popularProducts?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className='flex justify-center items-center py-4'>
        <div className='inline-block bg-indigo-500 text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer uppercase'>
          explore more
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
