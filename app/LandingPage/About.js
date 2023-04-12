"use client";
import Image from "next/image";
import Image1 from "../../public/assets/images/about.png";
// import Image2 from "../../public/assets/images/Method.png";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className='py-14 lg:py-20'>
      <div className='w-10/12 mx-auto flex flex-col-reverse lg:flex-row justify-evenly items-center'>
        <Fade direction='right' triggerOnce>
          <div className='w-6/12 mx-auto shadow-lg p-5 rounded-3xl bg-white  lg:mb-0'>
            <Image src={Image1} alt='img' className='w-full pb-5' />
          </div>
        </Fade>

        <div className='w-11/12 lg:w-6/12 my-auto mx-auto'>
          <Fade direction='right' triggerOnce>
            <div className='font-semibold text-2xl pb-5'>
              About Online Buyer
            </div>
            <div className='pb-5'>
              With a strategy in place including research on who you’re
              targeting, what keywords to use, which topics to cover, and how
              often/where to post content, you’ll differentiate yourself from
              the run-of-the-mill brands posting forgettable blogs no one cares
              about.
            </div>
            <div className='w-6/12 bg-gradient-to-tl from-[#5143F6] via-indigo-400 to-[#5143F6] text-white tracking-widest text-sm text-center rounded-md py-4 px-4 cursor-pointer'>
              <span className='font-bold'>100%</span> Safe to Use
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
