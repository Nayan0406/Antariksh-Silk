import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="md:w-full w-full border-b border-gray-300 bg-white">
      <div className="w-full md:w-full flex items-center justify-between py-3 px-4 md:px-2">
        {/* Logo and Brand */}
        <div className="flex h-[50px] items-center">
          <img src='logo.png' alt="Saree Logo" className="sm:ml-1 lg:ml-6 h-full object-cover" />
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
        <div className="hidden md:flex items-center gap-8 lg:ml-190">
          <a href="/" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Home</a>
          <a href="/about" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">About Us</a>
          <a href="/blog" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Blog</a>
          <a href="/contact" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Contact Us</a>
        </div>
        {/* Auth Buttons (desktop) */}
        <div className="hidden md:flex items-center gap-3 mr-2">
          <button className="px-6 py-2 rounded-full border-2 border-[#b76e79] text-[#b76e79] font-medium bg-white hover:bg-[#f8e6ea] transition cursor-pointer">Login</button>
          <button className="px-6 py-2 rounded-full bg-[#b76e79] text-white font-medium hover:bg-[#a05a65] transition cursor-pointer">Signup</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <div className="flex flex-col gap-3 mt-3">
            <a href="/" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Home</a>
            <a href="/about" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">About Us</a>
            <a href="/blog" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Blog</a>
            <a href="/contact" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Contact Us</a>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 px-4 py-2 rounded-full border-2 border-[#b76e79] text-[#b76e79] font-medium bg-white hover:bg-[#f8e6ea] transition cursor-pointer">Login</button>
              <button className="flex-1 px-4 py-2 rounded-full bg-[#b76e79] text-white font-medium hover:bg-[#a05a65] transition cursor-pointer">Signup</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;