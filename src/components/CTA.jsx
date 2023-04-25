import React from "react";

const CTA = () => {
  return (
    <section className="flex md:flex-row flex-col md:text-left text-center  justify-between items-center my-32 p-4 py-10  sm:p-16 md:gap-20 gap-7 xl:max-w-[1800px] max-w-[80%] mx-auto rounded-2xl bg-black-gradient-2">
      <div>
        <h2 className="font-semibold sm:text-[48px] text-[32px] mb-10">
          Let’s try our service now!
        </h2>
        <p className="opacity-70 max-w-[445px] md:mx-0 mx-auto">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        <button className="bg-blue-gradient text-[#00040E] mt-10 px-6 py-4 font-semibold rounded-[4px]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
