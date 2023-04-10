"use client";
import Image from "next/image";
import logo from "../../public/assets/Images/logo.png";
import { Storage } from "../Shared/utils/store";
import { useEffect, useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // if (Storage.getItem("auth_tok")) {
    //   navigate("/dashboard");
    // }

    if (Storage.getItem("crm_email") && Storage.getItem("crm_password")) {
      setData({
        email: Storage.getItem("crm_email"),
        password: Storage.getItem("crm_password")?.split("_")[0],
      });
    }
  }, []);

  const userData = (e) => {
    const userdata = { ...data };
    userdata[e.target.id] = e.target.value;
    setData(userdata);
  };

  const handleLoginReq = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleRememberMe = (e) => {
    if (e.target.checked) {
      Storage.setItem("__ue__", data.email);
      Storage.setItem(
        "__up__",
        data.password +
          "_" +
          makeid(3) +
          "_" +
          makeid(3) +
          "_" +
          makeid(3) +
          "_" +
          makeid(3)
      );
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='container max-w-md border border-gray-200 rounded-md p-3 bg-white'>
        <div className='pb-3 pt-8'>
          <div className='flex flex-col items-center'>
            <Image src={logo} width={50} height={50} />
          </div>
        </div>

        <div className='text-center my-6'>
          <h1 className='text-2xl font-semibold text-gray-700 font-poppins'>
            Login
          </h1>
          <p className='text-gray-500 pt-2 pb-4 font-poppins'>
            Login to access your account
          </p>
        </div>

        <div className='m-6'>
          <form className='mb-4' onSubmit={handleLoginReq}>
            <div className='mb-6 font-poppins'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm text-gray-600'
              >
                Email
              </label>
              {/* <Input
              size='large'
              name='email'
              id='email'
              placeholder='Enter your username'
              className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
              required
            /> */}
              <input
                type='text'
                name='email'
                id='email'
                onChange={userData}
                placeholder='Enter your email'
                className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
                required
              />
            </div>
            <div className='mb-4 font-poppins'>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm text-gray-600'>
                  Password
                </label>
              </div>
              {/* <Input.Password
              size='large'
              name='password'
              id='password'
              placeholder='Enter your password'
              className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
              required
            /> */}
              <input
                type='password'
                name='password'
                id='password'
                onChange={userData}
                placeholder='Enter your password'
                className='w-full px-6 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-brand-color'
                required
              />
            </div>

            <div className='mb-6 font-poppins flex items-center'>
              <input
                className='cursor-pointer mr-2'
                type='checkbox'
                name='remember me'
                id='remember_me'
                defaultValue='off'
                disabled={data.email && data.password ? false : true}
                onChange={handleRememberMe}
              />
              <label className='cursor-pointer' htmlFor='remember_me'>
                Remember Me
              </label>
            </div>

            <div className='mb-6'>
              <button
                type='submit'
                className='w-full p-3 text-orange-700 border border-orange-700 font-medium bg-brand-color bg-opacity-80 hover:bg-primary-800 rounded-md focus:outline-none font-poppins'
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
