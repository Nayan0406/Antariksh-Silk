import React, { useState } from 'react';
import { IoMicOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const CollectionSection = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-[40vh] md:min-h-[650px] overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #1D0200 0%, #5A1D19 50%, #1D0200 100%)',
      }}>

      {/* Mobile background removed: relying on gradient background for small screens */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 lg:py-8">
        <div className="relative lg:pr-24 min-h-[40vh] md:min-h-[650px] lg:min-h-auto flex flex-col justify-center lg:mt-20">
          {/* Left content: constrained width so right image can show */}
          <div className="w-full max-w-xl md:max-w-2xl text-white mx-auto lg:mx-0 px-4">
            {/* Search Bar */}
            {/* <div className="mb-6 lg:mb-6">
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
          </div> */}

            <div className="space-y-4 sm:space-y-6 text-center lg:text-left lg:mt-10 -mt-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#f7e5c1] font-playfair">
                Festive Saree <span className="lg:block text-[#f7e5c1]">Collection</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#ffffff] max-w-lg leading-relaxed mx-auto lg:mx-0">
                “Drape yourself in timeless traditions with a touch of modern elegance.”
              </p>

              {/* Shop Now Button - small rectangle on desktop, centered on mobile */}
              <div className="mt-6 lg:mt-8">
                <button className="bg-[#a31f1f] text-white font-semibold py-4 px-8 uppercase text-xs lg:text-sm cursor-pointer mx-auto lg:mx-0">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image: show the product image below the hero on mobile (hidden on lg) */}
      {/* <div className="block lg:hidden w-full mt-6 px-4">
        <div className="max-w-md mx-auto">
          <img src="/collection-img.png" alt="Collection" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div> */}

      {/* Right image covers full right half on large screens */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <img src="/collection-img.png" alt="Collection image" className="w-full h-full object-cover object-right-top" />
      </div>
    </section>
  );
};

export default CollectionSection;