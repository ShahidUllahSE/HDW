import React from 'react';
import logo1 from './logo1.png'
import { BrowserRouter as Router ,Routes, Route,Link } from 'react-router-dom';
// import Team from './Team';
const Navbar = () => {
    return (
        <div className="container mx-auto bg-gray-200">
            <div className="navbar flex justify-between items-center p-4">
                <div className="flex justify-center items-center  md:order-2">
                    <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                        <div className="line h-0.5 w-6 my-1 bg-black"></div>
                    </div>
                    <div className="search md:hidden w-4 mr-6"><img src="assets/search.svg" alt="" /></div>
                </div>

                <div className="logo text-center bg-gray-200 flex md:order-1">
                    <div className="flex justify-start bg-gray-200"><img className="w-[50%]" src="assets/mslogo.png" alt="" /></div>

                    <div className="features absolute w-fit md:static md:w-auto bg-gray-200 inset-0 md:flex md:items-center md:mx-4 -mb-4 md:space-x-6 -translate-x-96 md:translate-x-0">
  <img className="mr-4 h-1.5 w-24 md:h-24 md:w-24 -mt-7" src={logo1} alt="Women Empowerment" />
                        <a href='/Home' className="hover:underline hover:underline-offset-8 bg-gray-200 hover:text-blue-600 cursor-pointer font-semibold">Home</a>
                        <a href='/Team'  className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer  font-semibold ">Who We Are</a>
                        <a href='/Gallery' className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Gallery</a>
                        <div className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Projects</div>
                        <div className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Videos</div>
                        <div className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Become Volenteer </div>
                        <div className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Help us </div>
                        <div className="hover:underline hover:underline-offset-8 hover:text-blue-600 cursor-pointer font-semibold">Contact Us</div>

                    </div>
                </div>
                {/* <div className="cart text-center md:order-3 flex">
                    <div className="search hidden md:block mr-6"> All Microsoft </div>
                    <div className="mx-2">Search</div>
                    <img className="w-4 mr-6" src="assets/search.svg" alt="" />
                    <div className="flex pt-1">
                        <img className="w-4 h-4 mr-4" src="assets/cart icon.svg" alt="" />
                        <img className="w-4 h-4 mr-4" src="assets/account icon.svg" alt="" />
                    </div>
                </div> */}
            </div>

        

            {/* <div className="promo space-y-6 flex flex-col lg:flex-row justify-center">
                <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col" >
                    <img src="assets/ic1.png" alt="" />
                    <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Choose your Microsoft 365</span>
                </div>
                <div className="item flex md:flex-col items-center mx-4 space-x-2" >
                    <img src="assets/ic2.webp" alt="" />
                    <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Explore Surface devices</span>
                </div>
                <div className="item flex items-center mx-4 space-x-2 md:flex-col" >
                    <img src="assets/ic3.webp" alt="" />
                    <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Buy Xbox games</span>
                </div>
                <div className="item flex items-center mx-4 space-x-2 md:flex-col" >
                    <img src="assets/ic4.png" alt="" />
                    <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Get Windows 11</span>
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;
