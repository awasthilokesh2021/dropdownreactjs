import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);
  const [value, setValue] = useState(false);

  const handleEvent = () => {
    setValue(!value);
  };

  const handleHomeClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCampusClick = () => {
    setCampusOpen(!campusOpen);
  };

  const content = (
    <div className="lg:hidden absolute block h-[100vh] bg-white text-black py-6 mt-6 left-0 right-0 w-full">
      <ul className="flex flex-col items-center gap-4">
        <li className="hover:bg-red-600 text-xl px-4 py-2 rounded-md cursor-pointer">
          Home
        </li>
        <NavLink to="/about">
        <li className="hover:bg-red-600 text-xl px-4 py-2 rounded-md cursor-pointer">
          About
        </li>
        </NavLink>
        <li className="hover:bg-red-600 text-xl px-4 py-2 rounded-md cursor-pointer">
          Profile
        </li>
        <li className="hover:bg-red-600 text-xl px-4 py-2 rounded-md cursor-pointer">
          Campus
        </li>
        <li className="hover:bg-red-600 text-xl px-4 py-2 rounded-md cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );

  return (
    <div
      className="w-full text-white fixed mt-0 md:py-4 flex items-center justify-between z-50"
    >
      <div className="container w-[90%] mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-green-300">Grow-life</h1>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden left-4">
          <button className="text-2xl block transition" onClick={handleEvent}>
            {value ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
          {value && content}
        </div>
        {/*  Mobile Menu Toggle */}
        <ul className="hidden lg:flex lg:gap-6 lg:px-2">
          <li
            className="cursor-pointer text-l font-serif hover:bg-red-600 px-3 py-2 rounded-full relative"
            onClick={handleHomeClick}
          >
            <div className="flex items-center">
              {" "}
              Home <FaAngleDown className="ml-1" />
              {dropdownOpen && (
                <ul className="absolute mt-2 top-full left-0 bg-white shadow-md rounded-md">
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    Topwear
                  </li>
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    Innerwear
                  </li>
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    Sleepwear
                  </li>
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    Outwear
                  </li>
                </ul>
              )}
            </div>
          </li>
          <NavLink to="/">
          <li className="cursor-pointer text-l font-serif hover:bg-red-600 px-3 py-2 rounded-full">
            About us
          </li>
          </NavLink>
          <li className="cursor-pointer text-l font-serif hover:bg-red-600 px-3 py-2 rounded-full">
            Profile
          </li>
          <li
            className="cursor-pointer text-l font-serif hover:bg-red-600 px-3 py-2 rounded-full relative"
            onClick={handleCampusClick}
          >
            <div className="flex items-center">
              {" "}
              Campus <FaAngleDown className="ml-1" />
              {campusOpen && (
                <ul className="absolute mt-2 top-full left-0 bg-white shadow-md rounded-md">
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    College
                  </li>
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    School
                  </li>
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    School-parking
                  </li>
                  <li className="py-1 px-10 mb-1 text-black hover:bg-gray-100">
                    University
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="cursor-pointer text-l font-serif hover:bg-red-600 px-3 py-2 rounded-full">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
