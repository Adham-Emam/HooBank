import logo from "../assets/logo.svg";

import { useState } from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({ title, classProps, url }) => {
  return (
    <li
      className={`cursor-pointer px-10 my-4 duration-300 opacity-50 hover:opacity-100 ${classProps}`}
    >
      <a href={url}>{title}</a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex items-center p-4 sm:px-16 navbar max-w-[2000px] mx-auto">
      <div className="flex-1">
        <img src={logo} alt="Logo" className="w-32" />
      </div>
      <ul className=" hidden md:flex">
        <NavbarItem title="Home" classProps="opacity-[1]" url="#Home" />
        <NavbarItem title="Features" url="#features" />
        <NavbarItem title="Testimonials" url="#testimonials" />
        <NavbarItem title="Clients" url="#clients" />
      </ul>
      <div className="relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer "
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 absolute top-[35px] right-0 w-[200px]  p-3 shadow-2xl md:hidden flex flex-col items-end bg-black-gradient rounded-2xl sidebar">
            <NavbarItem title="Home" classProps="opacity-90" url="#Home" />
            <NavbarItem title="Features" url="#features" />
            <NavbarItem title="Testimonials" url="#testimonials" />
            <NavbarItem title="Clients" url="#clients" />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
