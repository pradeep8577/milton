import React from "react";
// @ts-ignore
import logo from "../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex flex-row items-center justify-between align-center md:max-w-[90rem] mx-auto max-w-[24.43rem] px-5 py-4 h-20">
      <div className="">
        <a href="/" className="flex flex-row">
          <img src={logo} alt="logo" className=" mr-1" />
          <p className="text-base font-PlusJakartaSansBold text-gray-600 ">
            Milton
          </p>
        </a>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-gray-600 text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      <ul className="list-none lg:flex hidden justify-end gap-10 items-center font-PlusJakartaSansBold text-gray-500 text-base">
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#features">Features</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#testimonials">Testimonial</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#faqs">FAQs</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#blog">Blog</a>
        </li>
      </ul>

      <div className={`${showMenu ? "block" : "hidden"} flex gap-2 lg:flex`}>
        <a href="#login">
          <button className="bg-slate-100 text-gray-600 rounded-xl py-2 px-5 font-PlusJakartaSansBold text-base">
            <p>Log in</p>
          </button>
        </a>

        <a href="#contact">
          <button className="bg-black text-[#FEFEFE] rounded-xl py-2 px-5 font-PlusJakartaSansBold text-base">
            <p>Get started</p>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
