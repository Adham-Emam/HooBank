import React from "react";

const StatItem = ({ count, title }) => (
  <p className="flex gap-5 justify-between items-center md:text-[40px] sm:text-[30px] text-[25px] font-semibold">
    {count}{" "}
    <span className="text-gradient flex-1 md:text-[18px] text-[16px]  font-normal">
      {title}
    </span>
  </p>
);

const Stats = () => {
  return (
    <section className="flex sm:flex-row flex-col justify-evenly items-center my-[10rem] max-w-[2000px] mx-auto">
      <StatItem title="USER ACTIVE" count="3800+" />
      <div className="sm:h-[20px] h-[4px] sm:w-[4px] w-[20px] bg-white opacity-60 rounded-xl my-3" />
      <StatItem title="TRUSTED BY COMPANY" count="230+" />
      <div className="sm:h-[20px] h-[4px] sm:w-[4px] w-[20px] bg-white opacity-60 rounded-xl my-3" />
      <StatItem title="TRANSACTION" count="$230M+" />
    </section>
  );
};

export default Stats;
