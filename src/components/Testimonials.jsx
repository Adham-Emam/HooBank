import React from "react";

import { quotes, people01, people02, people03 } from "../assets";

const TestimonialsItem = ({ text, img, name, title }) => (
  <div className="flex flex-col items-start justify-center feedback-card duration-300 hover:scale-105 hover:shadow-2xl p-10 rounded-xl w-[370px] md:my-0 my-5">
    <img src={quotes} alt="quote" className="w-[42px] h-[27px]" />
    <p className="my-10 max-w-[290px]">{text}</p>
    <div className="flex items-center mt-10">
      <div>
        <img src={img} alt="user" className="w-[48px] h-[48px]" />
      </div>
      <div className="flex-1 ml-8">
        <h4 className="sm:text-[20px] text-normal">{name}</h4>
        <span className="opacity-70 sm:text-normal text-[10px]">{title}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="p-4 py-10 sm:p-16 max-w-[2000px] mx-auto relative z-[2]"
    >
      <div className="flex justify-evenly items-center md:flex-row flex-col md:gap-20 gap-7 md:text-left text-center ">
        <h2 className="sm:text-[48px] text-[40px] font-semibold max-w-[470px]">
          What people are saying about us
        </h2>
        <p className="sm:text-[18px] text-[16px] opacity-70 max-w-[450px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-evenly items-center mt-32 md:flex-nowrap flex-wrap ">
        <TestimonialsItem
          text="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
          img={people01}
          name="Herman Jensen"
          title="Founder & Leader"
        />
        <TestimonialsItem
          text="Money makes your life easier. If you're lucky to have it, you're lucky."
          img={people02}
          name="Steve Mark"
          title="Founder & Leader"
        />
        <TestimonialsItem
          text="It is usually people in the money business, finance, and international trade that are really rich."
          img={people03}
          name="Kenn Gallagher"
          title="Founder & Leader"
        />
      </div>
      <div className="absolute z-[-1]  right-0 bottom-0 w-[250px] h-[150%] rounded-full blue__gradient" />
    </section>
  );
};

export default Testimonials;
