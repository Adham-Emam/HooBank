import React from "react";
import { discount, robot, arrowUp } from "../assets";

const GetStarted = () => (
  <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
    <div className="flex justify-center items-center w-[100%] h-[100%] rounded-full bg-primary">
      <div className="font-medium text-[18px] leading-[23px]">
        <p className="flex justify-between items-center">
          <span className="text-gradient">Get</span>
          <img
            src={arrowUp}
            alt=""
            className="w-[23px] h-[23px] object-contain"
          />
        </p>
        <span className="text-gradient">Started</span>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="flex md:flex-row flex-col justify-center items-center  sm:px-16 sm:pr-0 max-w-[2000px] mx-auto mb-20 ">
    <div className="flex-1  flex flex-col p-4">
      <div className="flex items-center w-fit py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="" className="w-[32px] h-[32px]" />
        <p className="text-lg font-extralight">
          20% <span className="opacity-60"> DISCOUNT FOR </span> 1 MONTH{" "}
          <span className="opacity-60"> ACCOUNT</span>
        </p>
      </div>
      <div className="flex items-center md:gap-5">
        <h1 className="flex-1 ss:text-7xl text-[40px] font-semibold mt-2 ss:leading-[100px] leading-[50px]">
          The Next <br />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="ss:text-[68px] text-[40px] font-semibold ss:leading-[100px] leading-[50px]">
        Payment Method.
      </h1>
      <p className="text-lg opacity-70 max-w-[470px] mt-5">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] "
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className="ss:hidden mx-auto my-10">
      <GetStarted />
    </div>
  </section>
);
export default Hero;
