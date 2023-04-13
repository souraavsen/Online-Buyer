"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";

const ProductCardView = ({
  cart,
  product,
  handleAddToCart,
  handleIncreaseFromCart,
  handleReduceFromCart,
}) => {
  return (
    <div className='cursor-pointer'>
      <Zoom triggerOnce>
        <div className='p-2 mb-5'>
          <div className='bg-white rounded-2xl shadow-lg pb-5 border px-4 py-3 ml-auto'>
            <div className='overflow-hidden relative'>
              <Image
                src={`${product?.image}`}
                alt='img'
                className='w-6/12 mx-auto h-36'
                width={400}
                height={400}
              />
              <span className='italic bg-black/40 backdrop-blur-md px-8 py-1 absolute -left-8 top-3 -rotate-45 font-semibold text-sm text-white'>
                $ {product?.price}
              </span>

              {product?.count > 0 ? (
                <span className='absolute top-0 right-0 w-8 h-8 flex justify-center items-center text-sm border font-semibold bg-white/80 rounded-full'>
                  {product?.count}x
                </span>
              ) : null}
            </div>
            <div className='text-base my-5 h-12'>
              {product?.title?.length > 50
                ? `${product?.title.slice(0, 50)}...`
                : product?.title}
            </div>
            <div className='text-base pb-8 font-normal flex justify-between items-center'>
              <span className='italic'>$ {product?.price}</span>
              <span className='font-medium'>
                Ratting: {product?.rating.rate} ({product?.rating.count})
              </span>
            </div>

            {cart?.find((prod) => prod.id === product.id) && cart.length ? (
              <div div className='flex items-center gap-4'>
                <div
                  className='bg-home-color/80 mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer'
                  onClick={() => handleReduceFromCart(product)}
                >
                  -
                </div>
                <div className='bg-gray-100 mx-auto text-black text-sm text-center rounded-md py-3 px-4 cursor-not-allowed'>
                  Added To Cart
                </div>
                <div
                  className='bg-home-color/80 mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer'
                  onClick={() => handleIncreaseFromCart(product)}
                >
                  +
                </div>
              </div>
            ) : (
              <div
                className='w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer'
                onClick={() => handleAddToCart(product)}
              >
                Buy Now
              </div>
            )}
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ProductCardView;
