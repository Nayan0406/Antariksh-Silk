import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <img src='/logo-img.png' alt="Saree Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-serif font-semibold text-[#b76e79] tracking-wide">SAREE</span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Home</a>
          <a href="#" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">About Us</a>
          <a href="#" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Blog</a>
          <a href="#" className="text-base font-medium text-gray-800 hover:text-[#b76e79] transition">Contact Us</a>
        </div>
        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-6 py-2 rounded-full border-2 border-[#b76e79] text-[#b76e79] font-medium bg-white hover:bg-[#f8e6ea] transition">Login</button>
          <button className="px-6 py-2 rounded-full bg-[#b76e79] text-white font-medium hover:bg-[#a05a65] transition">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;