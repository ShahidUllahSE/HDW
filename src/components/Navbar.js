import React, { useState, useEffect } from "react";
import Logoo from "./Logoo.png";

import logo1 from "./logo1.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 768) {
        setShowMenu(false); // Automatically hide the menu on larger screens when resizing
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container mx-auto bg-white">
      <div className="navbar flex justify-between items-center p-4">
        {/* Logo always visible */}
        <div className="logo flex align-baseline">
          <img src={Logoo} alt="Logo" className="w-20 h-20 " />
          <div className="flex align-baseline md:hidden lg:block ">
            <h1 className="text-green-500 mt-1">Empower<span className="text-pink-500">Her</span> <br />
            Organization
            </h1>
        </div>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="hamburger md:hidden ml-auto p-4 cursor-pointer" onClick={handleToggleMenu}>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>

        {showMenu && (
          <div className="fixed inset-0 z-10 bg-gray-200 p-4 md:hidden">
            <div className="flex flex-col items-center space-y-4">
              {/* Navigation links for small screens */}
              {/* Links */}
              <a href="/" className="hover:underline hover:underline-offset-8 bg-gray-200 hover:text-blue-600 cursor-pointer font-semibold">Home</a>
              <Link to="/Team" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Team</Link>
              <a href="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Gallery</a>
              <a href="/Projects" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Projects</a>
              <a href="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Become Volunteer</a>
              <a href="/Help" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Help Us</a>
              <a href="/Contact" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Contact Us</a>
            </div>
          </div>
        )}

        

        {/* Navigation links for larger screens */}
        <div className="hidden md:flex space-x-8">
          {/* Links */}
          <Link to="/" className="hover:underline hover:underline-offset-8 bg-gray-200 hover:text-blue-600 cursor-pointer font-semibold">Home</Link>
            <a href="/Team" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Team</a>
            <a href="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Gallery</a>
            <a href="/Projects" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Projects</a>
            <div className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Videos</div>
            <a href="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Become Volunteer</a>
            <a href="/Help" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Help Us</a>
            <a href="/Contact" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Contact Us</a>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
