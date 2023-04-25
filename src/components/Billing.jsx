import React from "react";

import { bill, google, apple } from "../assets";

const Billing = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse justify-center items-center p-4 sm:p-16 relative max-w-[2000px] mx-auto">
      <div className="mt-10 md:mt-0 relative z-[5]">
        <img src={bill} alt="" className="w-[100%] h-[100%]" />
        <div className="absolute z-[3]  -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0]  -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div>
        <h2 className="font-semibold sm:text-[48px] text-[32px] mb-10">
          Easily control your billing & invoicing.
        </h2>
        <p className="opacity-70 max-w-[420px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat Elit enim sed.
        </p>
        <div className="flex sm:flex-row flex-col gap-6 mt-10">
          <img src={apple} alt="" className="cursor-pointer h-[42px] mr-auto" />
          <img
            src={google}
            alt=""
            className="cursor-pointer h-[42px] mr-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
