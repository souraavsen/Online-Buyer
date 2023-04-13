"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/assets/Images/logo.png";
import CartIconDark from "../../../public/assets/Icons/shopping_cart_dark.svg";
import CartIconLight from "../../../public/assets/Icons/shopping_cart.svg";
import Cart from "./Cart";
import { Modal } from "antd";

const Navbar = ({ dark }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`py-3 ${
        dark ? "text-white bg-[#5143F6]" : "text-black bg-white"
      }`}
    >
      <div className='w-10/12 mx-auto flex justify-between items-center'>
        <div className='w-1/2'>
          <div className='flex items-center' href='#' data-config-id='brand'>
            <Image src={logo} width='40' alt='logo' />
            <span className='ml-3 text-lg font-semibold'>Online Buyer</span>
          </div>
        </div>

        <div className='w-1/3 pt-3 pb-2'>
          <ul className=' ms-auto flex justify-between items-center'>
            <li className='nav-item mx-2'>
              <div className='nav-link ps-2 cursor-pointer'>Home</div>
            </li>
            <li className='nav-item mx-2'>
              <div className='nav-link ps-2 cursor-pointer'>Products</div>
            </li>
            <li className='nav-item mx-2'>
              <div className='nav-link ps-2 cursor-pointer'>Shop</div>
            </li>
            <li className='nav-item mx-2'>
              <div className='nav-link ps-2 cursor-pointer'>Blog</div>
            </li>
            <li className='nav-item mx-2 cursor-pointer'>
              {dark ? (
                <Image
                  src={CartIconLight}
                  alt='Cart'
                  width={18}
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <Image
                  src={CartIconDark}
                  alt='Cart'
                  width={18}
                  onClick={() => setOpen(!open)}
                />
              )}
            </li>

            <Modal
              className='NavbarModal bg-white bg-opacity-80 backdrop:filter backdrop-blur-sm border rounded-md sm:float-right cross_btn'
              title={false}
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              footer={false}
            >
              <div className='w-8/12 h-[92vh] flex flex-col text-black text-xl py-10 pl-10'>
                <Cart />
              </div>
            </Modal>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
