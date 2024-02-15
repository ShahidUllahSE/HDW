import React, { useState, useEffect } from "react";
import Logoo from "./Logoo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
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
      <div className="navbar flex justify-between items-center p-2">
        {/* Logo */}
        <div className="logo flex align-baseline">
          <img src={Logoo} alt="Logo" className="w-20 h-20 -mt-2" />
          <div className="md:hidden lg:block">
            <h1 className="text-green-700 mt-2 tracking-widest font-semibold">
              Empower<span className="text-pink-500">Her</span> <br />
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

        {/* Menu Overlay with Close Button */}
        {showMenu && (
          <div className="fixed top-0 left-0 right-0 z-10 bg-white p-4 md:hidden overflow-auto" style={{ maxHeight: "100vh" }}>
            <div className="flex justify-end">
              {/* Close Button */}
              <button onClick={handleToggleMenu} className="p-2">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              {/* Navigation links for small screens */}
              <a href="/" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Home</a>
              <a href="/Team" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Team</a>
              <a href="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Gallery</a>
              <a href="/Projects" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Projects</a>
              <a href="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Become Volunteer</a>
              <a href="/Help" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Help Us</a>
              <a href="/Contact" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Contact Us</a>
            </div>
          </div>
        )}

        

        {/* Navigation links for larger screens */}
        <div className="hidden md:flex space-x-9 m-5">
          {/* Links */}
          <a href="/" className="hover:underline hover:underline-offset-8 active:bg-pink-600 hover:text-pink-500 cursor-pointer font-normal">Home</a>
            <a href="/Team" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Team</a>
            <a href="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Gallery</a>
            <a href="/Projects" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Projects</a>
            <div className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Videos</div>
            <a href="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Become Volunteer</a>
            <a href="/Help" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Help Us</a>
            <a href="/Contact" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Contact Us</a>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
