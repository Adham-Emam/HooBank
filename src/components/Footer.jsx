import React from "react";

import { logo, instagram, facebook, twitter, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#0B0A0C99]">
      <div className="flex md:flex-row flex-col justify-center max-w-[2000px]  mx-auto py-10 p-4 sm:p-16">
        <div className="flex-[2]">
          <img src={logo} alt="logo" />
          <p className="opacity-70 text-[18px] max-w-[312px] mt-10">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <ul className="w-[150px] flex-1 md:mt-0 mt-10">
          <h4 className="text-[18px] font-[500] mb-5">Usefull Links</h4>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Content
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            How it Works
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Create
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Explore
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Terms & Services
          </li>
        </ul>
        <ul className="w-[150px] flex-1 md:mt-0 mt-10">
          <h4 className="text-[18px] font-[500] mb-5">Community</h4>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Help Center
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Partners
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Suggestions
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Blog
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Newsletters
          </li>
        </ul>
        <ul className="w-[150px] flex-1 md:mt-0 mt-10">
          <h4 className="text-[18px] font-[500] mb-5">Partner</h4>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Our Partner
          </li>
          <li className="opacity-50 mb-4 cursor-pointer hover:opacity-100 duration-300">
            Become a Partner
          </li>
        </ul>
      </div>
      <div className="w-[90%] max-w-[1800px] h-[2px] bg-[#3F3E45] mx-auto  " />
      <div className="flex md:flex-row flex-col justify-between items-center max-w-[2000px]  mx-auto py-10 px-4 sm:px-16 text-center md:text-left">
        <p className="opacity-70 text-[18]px">
          Copyright &copy; 2023 HooBank. All Rights Reserved.
        </p>
        <div className="flex gap-10 mt-5 md:mt-0">
          <img
            src={instagram}
            alt="Instagram"
            className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          />
          <img
            src={facebook}
            alt="Facebook"
            className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          />
          <img
            src={twitter}
            alt="Twitter"
            className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          />
          <img
            src={linkedin}
            alt="Linkedin"
            className="cursor-pointer opacity-50 hover:opacity-100 duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
