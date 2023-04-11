"use client";
import Image from "next/image";
import React from "react";
import coverImage from "../../public/assets/Images/cover1.jpg";
import playBtn from "../../public/assets/Icons/play.svg";
import { Fade } from "react-awesome-reveal";
// import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div className='bg-home-color h-screen pt-12 pb-20 px-20 bg-[#5143F6]/95'>
      <div className='border h-[80vh] rounded-2xl p-3 lg:p-10 lg:max-w-screen-xl mx-auto'>
        <div className='w-full h-[71vh] flex justify-between'>
          <div className='w-full bg-gradient-to-tl from-[#5143F6] via-indigo-500 to-[#5143F6] rounded-tl-2xl rounded-tr-none rounded-bl-2xl text-white py-8 pl-8 pr-20'>
            <Fade direction='left' triggerOnce>
              <div className='text-5xl font-semibold mb-5 mt-10'>
                Best Shop Budget-friendly Online
              </div>
              <div className='mb-10'>
                From light and breezy linen to classic terracotta, the makings
                of a summer restyling have landed.
              </div>
              <div className='inline-block bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer'>
                EXPLORE
              </div>
            </Fade>
          </div>
          <div className='w-full h-full relative'>
            <Fade direction='right' triggerOnce>
              <Image
                src={coverImage}
                alt='img'
                className='hidden lg:block w-full h-[71vh]'
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
