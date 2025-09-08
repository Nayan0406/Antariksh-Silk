import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 bg-white">
      <div className="w-full flex items-center justify-between py-3 px-2 sm:px-4">
        {/* Logo and Brand */}
        <div className="flex-shrink-0 flex items-center h-[44px] sm:h-[50px]">
          <img src='home-logo.png' alt="Saree Logo" className="h-full object-contain mx-auto sm:ml-1 lg:ml-6" />
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden ml-auto text-[#b76e79] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links (desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 lg:ml-20 xl:ml-120">
          <a href="/" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Home</a>
          <a href="/about" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">About Us</a>
          <a href="/collections" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Collections</a>
          <a href="/blog" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Blog</a>
          <a href="/contact" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Contact Us</a>
        </div>
        {/* Icons (desktop) */}
        <div className='hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 lg:mr-2 xl:mr-3'>
          <CiHeart className='w-8 h-8 lg:w-10 lg:h-10'/>
          <PiShoppingCartThin className='w-8 h-8 lg:w-10 lg:h-10'/>
        </div>
        {/* Auth Buttons (desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 lg:mr-4 xl:mr-12">
          <Link to="/login"><button className="px-4 lg:px-6 py-2 rounded-full border-2 border-[#550000] text-[#b76e79] font-medium bg-white hover:bg-[#f8e6ea] transition cursor-pointer text-sm lg:text-base">Login</button></Link>
          <Link to="/signup"><button className="px-4 lg:px-6 py-2 rounded-full bg-[#550000] text-white font-medium hover:bg-[#a05a65] transition cursor-pointer text-sm lg:text-base">Signup</button></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 z-50 w-full">
          <div className="flex flex-col gap-3 mt-3">
            <a href="/" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Home</a>
            <a href="/about" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">About Us</a>
            <a href="/collections" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Collections</a>
            <a href="/blog" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Blog</a>
            <a href="/contact" className="text-base font-medium text-gray-800 hover:text-[#550000] transition">Contact Us</a>
            <div className='flex gap-4 mt-2'>
              <CiHeart className='w-8 h-8'/>
              <PiShoppingCartThin className='w-8 h-8'/>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/login"><button className="w-full px-4 py-2 rounded-full border-2 border-[#550000] text-[#b76e79] font-medium bg-white hover:bg-[#f8e6ea] transition cursor-pointer">Login</button></Link>
              <Link to="/signup"><button className="w-full px-4 py-2 rounded-full bg-[#550000] text-white font-medium hover:bg-[#a05a65] transition cursor-pointer">Signup</button></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;