import React from "react";
import { send, star, shield } from "../assets";

const BusinessItem = ({ icon, title, subtext }) => (
  <div className="flex sjustify-between sm:items-center items-start sm:flex-row flex-col sm:gap-10 gap-5 feature-card mb-7 p-4 rounded-xl cursor-pointer hover:scale-105 duration-300 sm:max-w-full max-w-[95%] mx-auto">
    <div className="bg-[#09977C1A] rounded-full p-4">
      <img src={icon} alt="" className="w-[32px] h-[32px]" />
    </div>
    <div className="flex-1">
      <h3 className="text-[18px] font-semibold mb-4">{title}</h3>
      <p className="max-w-[420px] opacity-70">{subtext}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section
      id="features"
      className="flex md:flex-row flex-col justify-center py-10 p-4 sm:p-16 max-w-[2000px] mx-auto"
    >
      <div className="flex-1">
        <h2 className="font-semibold sm:text-[48px] text-[32px] mb-10">
          You do the business,
          <br /> we’ll handle the money.
        </h2>
        <p className="text-[18px] opacity-70 font-normal max-w-[570px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-blue-gradient text-[#00040E] mt-10 px-6 py-4 font-semibold rounded-[4px]">
          Get Started
        </button>
      </div>
      <div className="mt-20 md:mt-0">
        <BusinessItem
          icon={star}
          title="Rewards"
          subtext="The best credit cards offer some tantalizing combinations of promotions and prizes"
        />
        <BusinessItem
          icon={shield}
          title="100% Secured"
          subtext="We take proactive steps make sure your information and transactions are secure."
        />
        <BusinessItem
          icon={send}
          title="Balance Transfer"
          subtext="A balance transfer credit card can save you a lot of money in interest charges."
        />
      </div>
    </section>
  );
};

export default Business;
