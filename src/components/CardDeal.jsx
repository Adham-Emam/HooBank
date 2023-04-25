import React from "react";

import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center p-4 py-10 sm:p-16 md:gap-20 gap-7 max-w-[2000px] mx-auto">
      <div>
        <h2 className="font-semibold sm:text-[48px] text-[32px] mb-10">
          Find a better card deal in few easy steps.
        </h2>
        <p className="opacity-70 max-w[500px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-blue-gradient text-[#00040E] mt-10 px-6 py-4 font-semibold rounded-[4px]">
          Get Started
        </button>
      </div>
      <div className="mt-10 md:mt-0">
        <img src={card} alt="" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
