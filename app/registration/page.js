"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/assets/Images/logo.png";

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleUserRegistrationData = (e) => {
    const userdata = { ...registrationData };
    userdata[e.target.id] = e.target.value;
    setRegistrationData(userdata);
  };

  console.log(registrationData);

  const handleRegistrationReq = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  //   function makeid(length) {
  //     var result = "";
  //     var characters =
  //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     var charactersLength = characters.length;
  //     for (var i = 0; i < length; i++) {
  //       result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     }
  //     return result;
  //   }

  return (
    <div className='flex justify-center items-center bg-gray-100 py-12'>
      <div className='container max-w-md border border-gray-200 rounded-md p-3 bg-white '>
        <div className='pb-3 pt-8'>
          <div className='flex flex-col items-center'>
            <Image src={logo} alt="Brand Logo" width={50} height={50} />
          </div>
        </div>

        <div className='text-center my-6'>
          <h1 className='text-2xl font-semibold text-gray-700 font-poppins'>
            Registration
          </h1>
          <p className='text-gray-500 pt-2 pb-4 font-poppins'>
            Register and explore some goods
          </p>
        </div>

        <div className='m-6'>
          <form className='mb-4' onSubmit={handleRegistrationReq}>
            <div className='flex items-center gap-4'>
              <div className='w-1/2 mb-6 font-poppins'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm text-gray-600'
                >
                  First Name{" "}
                  <span className='text-red-600 text-sm font-semibold'>*</span>
                </label>
                <input
                  type='text'
                  name='last_name'
                  id='first_name'
                  onChange={handleUserRegistrationData}
                  placeholder='Jhon'
                  className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
                  required
                />
              </div>
              <div className='w-1/2 mb-6 font-poppins'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm text-gray-600'
                >
                  Last Name{" "}
                  <span className='text-red-600 text-sm font-semibold'>*</span>
                </label>
                <input
                  type='text'
                  name='last_name'
                  id='last_name'
                  onChange={handleUserRegistrationData}
                  placeholder='Doe'
                  className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
                  required
                />
              </div>
            </div>

            <div className='mb-6 font-poppins'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm text-gray-600'
              >
                Phone{" "}
                <span className='text-red-600 text-sm font-semibold'>*</span>
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                onChange={handleUserRegistrationData}
                placeholder='01XXXXXXXXX'
                maxLength={11}
                className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
                required
              />
            </div>

            <div className='mb-6 font-poppins'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm text-gray-600'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleUserRegistrationData}
                placeholder='example@example.com'
                className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
              />
            </div>

            <div className='mb-4 font-poppins'>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm text-gray-600'>
                  Password{" "}
                  <span className='text-red-600 text-sm font-semibold'>*</span>
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                onChange={handleUserRegistrationData}
                placeholder='Enter your password'
                className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
                required
              />
            </div>

            <div className='float-right mb-6 text-sm'>
              <div>
                Already have an account?{" "}
                <Link href={"/login"} className='text-orange-700 font-semibold'>
                  Login
                </Link>
              </div>
            </div>
            <div className='my-6'>
              <button
                type='submit'
                className='w-full p-3 text-orange-700 border border-orange-700 font-medium bg-brand-color bg-opacity-80 hover:bg-primary-800 rounded-md focus:outline-none font-poppins'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
