import React, { useState } from 'react';
import { IoMicOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const CollectionSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
  <section className="relative min-h-[60vh] md:min-h-[650px] overflow-hidden bg-[#550000]">
      {/* Decorative left gradient to blend with image - only on large screens */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-transparent via-[#550000] to-[#550000] pointer-events-none z-1" />

      {/* Mobile background image (shows only on small screens) */}
      <div
        className="absolute inset-0 bg-center bg-cover lg:hidden pointer-events-none"
        style={{ backgroundImage: "url('/login-img.png')", opacity: 0.45 }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 lg:py-8">
  <div className="relative lg:pr-24 min-h-[60vh] md:min-h-[650px] lg:min-h-auto flex flex-col justify-center lg:mt-20">
          {/* Left content: constrained width so right image can show */}
          <div className="w-full max-w-xl md:max-w-2xl text-white mx-auto lg:mx-0 px-4">
            {/* Search Bar */}
          <div className="mb-6 lg:mb-6">
            <div className="relative max-w-md w-full mx-auto lg:mx-0">
              <div className="flex items-center bg-[#6e3c3c] backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-white border-opacity-30 w-full">
                <CiSearch className="text-white text-opacity-80 mr-3" size={24} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white placeholder-opacity-80 focus:outline-none text-sm sm:text-base"
                />
                <IoMicOutline className="text-white text-opacity-80 ml-3 cursor-pointer hover:text-opacity-100 transition-opacity" size={24} />
              </div>
            </div>
          </div>

            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#f7e5c1] font-playfair">
                Festive Saree<br />
                <span className="text-[#f7e5c1]">Collection</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#ffffff] max-w-lg leading-relaxed mx-auto lg:mx-0">
                “Drape yourself in timeless traditions with a touch of <br />  modern elegance.”
              </p>
            </div>

            {/* Shop Now Button */}
            <button className="bg-[#870900] text-white font-semibold py-3 px-6 lg:px-12 rounded-sm transition-colors duration-300 uppercase text-sm lg:text-base cursor-pointer mt-8 lg:mt-10 w-full lg:w-auto">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Right image covers full right half on large screens */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <img src="/login-img.png" alt="Beautiful Pink Saree" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default CollectionSection;