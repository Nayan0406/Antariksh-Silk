import React, { useState } from 'react';
import { IoMicOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const CollectionSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
  <section className="relative md:min-h-screen flex items-start md:items-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 flex">
        {/* Left side - Gradient Background */}
        <div 
          className="w-full lg:w-3/5 h-full custom-bg"
          // className="w-full lg:w-3/5 h-full bg-gradient-to-r from-[#340808] to-[#870900] z-10"
        ></div>
        
        {/* Right side - Model Image */}
        <div className="hidden lg:block lg:w-3/5 h-full relative">
          <img
            src="/login-img.png"
            alt="Woman in traditional saree"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay for blending */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(270deg, transparent 60%, rgba(119, 3, 3, 0.3) 100%)'
            }}
          ></div>
        </div>
      </div>

  {/* Mobile background image intentionally removed to keep mobile view clean */}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 md:py-0">
        <div className="w-full lg:w-3/5">
          
          {/* Search Bar */}
          <div className="mb-8 lg:mb-6">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="flex items-center bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-3 border border-white border-opacity-30">
                <CiSearch className="text-white text-opacity-80 mr-3" size={24} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white placeholder-opacity-80 focus:outline-none text-sm"
                />
                <IoMicOutline className="text-white text-opacity-80 ml-3 cursor-pointer hover:text-opacity-100 transition-opacity" size={24} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center lg:text-left text-[#f7e5c1]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-6 lg:mb-6">
              <span className="block font-playfair">Festive Saree</span>
              <span className="block font-playfair">Collection</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white text-opacity-95 mb-8 lg:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light font-inter">
              "Drape yourself in timeless traditions with a touch of modern elegance."
            </p>
            
            {/* Shop Now Button */}
            <button className="bg-[#870900]  text-white font-semibold py-4 px-10 lg:px-12 rounded-sm transition-colors duration-300 uppercase  text-sm lg:text-base cursor-pointer ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;