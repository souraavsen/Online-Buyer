"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Zoom } from "react-awesome-reveal";

const Product = ({ product }) => {
  return (
    <div>
      <Zoom triggerOnce>
        <div className='p-2 mb-5'>
          <div className='bg-white rounded-2xl shadow-lg pb-5 border px-4 py-3 ml-auto'>
            <Image
              src={`${product?.image}`}
              alt='img'
              className='w-5/12 mx-auto h-40'
              width={0}
              height={0}
            />
            <div className='text-lg font-medium my-5 h-12'>
              {product?.title}
            </div>
            <div className='text-base pb-8 font-normal flex justify-between items-center'>
              <span>$ {product?.price}</span>
              <span>
                Ratting: {product?.rating.rate} ({product?.rating.count})
              </span>
            </div>
            <Link href={"./explore/product"}>
              <div className='w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer'>
                Buy Now
              </div>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Product;
