"use client";
import useProducts from "@/app/Shared/Hooks/useProducts";
import { Flip } from "react-awesome-reveal";
import Product from "./Product";

const PopularProducts = () => {
  const [products] = useProducts();

  return (
    <div className='w-10/12 mx-auto'>
      <div className='text-2xl font-semibold mb-4 mt-6'>
        Most Popular Products
      </div>
      <div className='grid grid-cols-4'>
        {products?.slice(0, 4)?.map((product, i) => (
          <Flip key={product.id} duration={800} triggerOnce>
            <Product product={product} />
          </Flip>
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
