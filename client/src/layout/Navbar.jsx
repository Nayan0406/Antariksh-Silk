import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }

  return (
    <nav className="w-full border-b border-gray-300 bg-white sticky top-0 z-20" role="navigation" aria-label="Main navigation">
      <div className="w-full relative flex items-center justify-between py-4 sm:py-3 px-3 sm:px-4">
        {/* Logo and Brand */}
        <Link to="/"><div className="flex-shrink-0 flex items-center h-8 sm:h-10">
          <img src='home-logo.png' alt="Saree Logo" className="h-full object-contain mx-auto sm:ml-1 lg:ml-6" />
        </div></Link>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden ml-auto text-[#b76e79] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
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
        <div className="hidden md:flex items-center gap-3 sm:gap-4 lg:gap-8 ml-4 md:ml-6 lg:ml-10 xl:ml-80">
          <Link to="/" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/about') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>About Us</Link>
          <Link to="/collections" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/collections') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Collections</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/blog') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/contact') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Contact Us</Link>
        </div>
        {/* Icons (desktop) */}
        <div className='hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 lg:mr-2 xl:mr-3'>
          <button aria-label="Wishlist" className="text-gray-700 cursor-pointer"><CiHeart className='w-6 h-6 lg:w-8 lg:h-8' /></button>
          <Link to="/addtocart"><button aria-label="Cart" className="text-gray-700 cursor-pointer"><PiShoppingCartThin className='w-6 h-6 lg:w-8 lg:h-8' /></button></Link>
        </div>
        {/* Auth Buttons (desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 lg:mr-4 xl:mr-12">
          <Link to="/login"><button className="px-4 lg:px-6 py-2 rounded-full border-2 border-[#550000] text-[#b76e79] font-medium bg-white hover:bg-[#f8e6ea] transition cursor-pointer text-sm lg:text-base">Login</button></Link>
          <Link to="/signup"><button className="px-4 lg:px-6 py-2 rounded-full bg-[#550000] text-white font-medium hover:bg-[#a05a65] transition cursor-pointer text-sm lg:text-base">Signup</button></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 px-4 pb-4 z-50" role="menu" aria-label="Mobile menu">
          <div className="flex flex-col gap-3 mt-3">
            <Link to="/" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/about') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>About Us</Link>
            <Link to="/collections" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/collections') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Collections</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/blog') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Blog</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className={`text-base font-medium transition ${isActive('/contact') ? 'text-[#550000]' : 'text-gray-800 hover:text-[#550000]'}`}>Contact Us</Link>
            <div className='flex gap-4 mt-2'>
              <button aria-label="Wishlist" className='text-gray-700'><CiHeart className='w-6 h-6' /></button>
              <Link to="/addtocart"><button aria-label="Cart" className='text-gray-700'><PiShoppingCartThin className='w-6 h-6' /></button></Link>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/login" onClick={() => setMenuOpen(false)}><button className="w-full px-4 py-2 rounded-full border-2 border-[#550000] text-[#b76e79] font-medium bg-white hover:bg-[#f8e6ea] transition cursor-pointer">Login</button></Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}><button className="w-full px-4 py-2 rounded-full bg-[#550000] text-white font-medium hover:bg-[#a05a65] transition cursor-pointer">Signup</button></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;