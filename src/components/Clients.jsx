import React from "react";

import { airbnb, binance, coinbase, dropbox } from "../assets";

const Clients = () => {
  return (
    <section
      id="clients"
      className="flex justify-evenly items-center max-w-[2000px] gap-10 mx-auto my-20 sm:flex-nowrap flex-wrap"
    >
      <img src={airbnb} alt="airbnb" className="md:w-[190px] w-[130px] " />
      <img src={binance} alt="binance" className="md:w-[190px] w-[130px] " />
      <img src={coinbase} alt="coinbase" className="md:w-[190px] w-[130px] " />
      <img src={dropbox} alt="dropbox" className="md:w-[190px] w-[130px] " />
    </section>
  );
};

export default Clients;
