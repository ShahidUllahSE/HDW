import React, { useState } from "react";
import logo1 from "./logo1.png";
// Import any additional components or stylesheets if needed

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container mx-auto bg-gray-200">
      <div className="navbar flex justify-between items-center p-4">
        <div className="flex justify-center items-center  md:order-2">
          <div className="hamburger inline-block p-4 cursor-pointer md:hidden" onClick={handleToggleMenu}>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
          <div className="search md:hidden w-20 mr-6">
            <img src={logo1} alt="" />
          </div>
        </div>

        {showMenu && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-200">
            <div className="flex flex-col items-center p-4">
              <a href="/" className="hover:underline hover:underline-offset-8 bg-gray-200 hover:text-blue-600 cursor-pointer font-semibold">Home</a>
              <a href="/Team" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Team</a>
              <a href="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Gallery</a>
              <a href="/Projects" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Projects</a>
              <a href="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Become Volenteer</a>
              <a href="/Help" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Help us</a>
              <a href="/Contact" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Contact Us</a>
            </div>
          </div>
        )}

        <div className="logo text-center bg-gray-200 flex md:order-1">
          <div className="flex justify-start bg-gray-200">
            <img className="w-[50%]" src="assets/mslogo.png" alt="" />
          </div>

          <div className="features absolute w-fit md:static md:w-auto bg-gray-200 inset-0 md:flex md:items-center md:mx-4 -mb-4 md:space-x-6 -translate-x-96 md:translate-x-0">
            <img className="mr-4 h-1.5 w-24 md:h-24 md:w-24 -mt-7" src={logo1} alt="Women Empowerment" />
            <a href="/" className="hover:underline hover:underline-offset-8 bg-gray-200 hover:text-blue-600 cursor-pointer font-semibold">Home</a>
            <a href="/Team" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Team</a>
            <a href="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Gallery</a>
            <a href="/Projects" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Projects</a>
            <div className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Videos</div>
            <a href="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Become Volenteer</a>
            <a href="/Help" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Help us</a>
            <a href="/Contact" className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
