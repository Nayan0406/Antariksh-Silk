import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const HomeSection = () => {
  return (
  <section className="relative min-h-[93vh] md:min-h-screen overflow-hidden bg-[#1d0200]">
      {/* Decorative left gradient to blend with image - only on large screens */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-transparent via-[#1d0200] to-[#1d0200] pointer-events-none z-1" />

      {/* Mobile background image (shows only on small screens) */}
      <div
        className="absolute inset-0 bg-center bg-cover lg:hidden pointer-events-none"
        style={{ backgroundImage: "url('/homesection-img.png')", opacity: 0.35 }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 lg:py-8">
  <div className="relative lg:pr-24 min-h-[60vh] md:min-h-screen lg:min-h-auto flex flex-col justify-center lg:-mt-10">
          {/* Left content: constrained width so right image can show */}
          <div className="max-w-2xl text-white mt-30">
            <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
              <img src="/home-logo.png" alt="Saree Logo" className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 lg:ml-3 lg:-mb-8 object-contain -mt-10 -mb-10 lg:mt-5" />
            </div>

            <div className="text-center lg:text-left mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium uppercase tracking-wider text-[#f08181] px-3 py-2 inline-block">
                A TOUCH OF TRADITION, A STATEMENT OF LUXURY
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#f7e5c1] font-rosarivo">
                Sarees for every<br />
                <span className="text-[#f7e5c1]">Occasion</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#ffffff] max-w-lg leading-relaxed mx-auto lg:mx-0">
                There are many variation of passages are lorem available,
                majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right image covers full right half on large screens */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <img src="/homesection-img.png" alt="Beautiful Pink Saree" className="w-full h-full object-fit" />
      </div>
    </section>
  )
}

export default HomeSection
