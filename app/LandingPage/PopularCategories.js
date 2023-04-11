"use client";
import Image from "next/image";
import React from "react";
import watches from "../../public/assets/Images/watches.jpg";
import makeups from "../../public/assets/Images/makeups.jpg";
import shirt from "../../public/assets/Images/shirt.jpg";
import { Fade, Rotate, Flip } from "react-awesome-reveal";

const PopularCategories = () => {
  return (
    <div className='w-10/12 mx-auto py-8 mt-10'>
      <div className='pb-8 pt-12'>
        <div className='text-2xl font-semibold'>Most Popular Categories</div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
        <div className='w-10/12 lg:w-1/2 rounded-md'>
          <Fade direction='left' triggerOnce>
            <div className='h-81 w-full relative mx-auto'>
              <Image
                src={watches}
                alt='category-1'
                className='h-full w-full rounded-lg shadow'
              />
              <div className='bg-black/40 rounded-lg overflow-hidden backdrop-filter backdrop-blur-[2px] absolute top-0 min-h-full min-w-full'>
                <div className='text-white p-4 flex flex-col justify-start items-start'>
                  <div className='text-xl font-semibold'>
                    Cosmatics Collection
                  </div>
                  <div className='text-white text-sm font-thin'>
                    Lipstics, Shades plates, Eyeliner etc.
                  </div>
                  <button className='bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer mt-10'>
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className='w-10/12 lg:w-1/2 flex flex-col justify-center'>
          <Fade direction='right' cascade  triggerOnce>
            <div className='relative rounded-lg'>
              <Image
                src={makeups}
                alt='category-1'
                className='h-40 rounded-lg shadow'
              />
              <div className='bg-black/40 rounded-lg overflow-hidden backdrop-filter backdrop-blur-[2px] absolute top-0 min-h-full min-w-full'>
                <div className='text-white p-4 flex flex-col justify-start items-start'>
                  <div className='text-xl font-semibold'>
                    Cosmatics Collection
                  </div>
                  <div className='text-white text-sm font-thin'>
                    Lipstics, Shades plates, Eyeliner etc.
                  </div>
                  <button className='bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer mt-10'>
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className='relative rounded-lg mt-3'>
              <Image
                src={shirt}
                alt='category-1'
                className='h-40 rounded-lg shadow'
              />
              <div className='bg-black/40 rounded-lg overflow-hidden backdrop-filter backdrop-blur-[2px] absolute top-0 min-h-full min-w-full'>
                <div className='text-white p-4 flex flex-col justify-start items-start'>
                  <div className='text-xl font-semibold'>Men's Fashion</div>
                  <div className='text-white text-sm font-thin'>
                    Men's Shirt, T-Shirt, Pants etc.
                  </div>
                  <button className='bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer mt-10'>
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
