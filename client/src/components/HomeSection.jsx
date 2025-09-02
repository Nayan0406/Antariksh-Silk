import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const HomeSection = () => {
  return (
    <section className="relative min-h-screen  overflow-hidden">
      {/* Decorative left gradient to blend with image */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1d0200] to-[#1d0200] pointer-events-none z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
  <div className="relative lg:pr-24">
          {/* Left content: constrained width so right image can show */}
          <div className="max-w-2xl text-white">
            <div className="flex items-center lg:pb-[-20px]">
              <img src="/home-logo.png" alt="Saree Logo" className="h-80 w-80 lg:ml-30 object-contain lg:pt-[-20px] lg:pb-[-40px]" />
            </div>

            {/* Compact inline search (matches image) */}
            {/* <div className="mb-6">
              <form className="flex items-center gap-6 flex-wrap md:flex-nowrap">
        <div className="flex flex-col w-full sm:w-auto">
                  <label className="text-sm text-white/80 mb-2 font-medium">Service Name</label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Book your services..."
          className="w-full sm:w-64 md:w-56 bg-transparent border-0 border-b-2 border-white/40 focus:border-white/80 text-white placeholder-white/60 py-2 pr-10 text-sm"
                    />

                    <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col w-full sm:w-auto">
                  <label className="text-sm text-white/80 mb-2 font-medium">Address</label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Where"
                      className="w-full sm:w-48 md:w-44 bg-transparent border-0 border-b-2 border-white/40 focus:border-white/80 text-white placeholder-white/60 py-2 pr-10 text-sm"
                    />

                    <CiLocationOn className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" />
                  </div>
                </div>

                <button type="submit" className="mt-3 md:mt-0 inline-flex items-center gap-2 px-5 py-2 bg-white text-[#5d2b34] rounded-md text-sm font-medium border border-[#d6b9a9] shadow-sm bg-blur-20 w-full md:w-auto justify-center">
                  <span>Search</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </form>
            </div> */}

            <div className="inline-flex items-center gap-3 px-3 py-2  w-max mb-4">
              {/* <img src="/home-logo.png" alt="badge" className="h-6 w-5" /> */}
              <span className="text-lg font-medium uppercase tracking-wider text-white/90">SAREES FOR EVERY OCCASION</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#f3e0c9]">
                Find a service<br />
                <span className="text-[#f3e0c9]">close to you</span>
              </h1>
              <p className="text-md md:text-lg text-white/80 max-w-lg leading-relaxed">
                There are many variation of passages are lorem available,
                majority have suffered alteration in some form.
              </p>
            </div>
          </div>

          {/* Mobile image (stacked under content) */}
          <div className="mt-8 lg:hidden">
            <img src="/Saree.png" alt="Saree" className="w-full h-64 object-fill rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Right image covers full right half on large screens */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <img src="/homesection-img.png" alt="Beautiful Pink Saree" className="w-full h-full object-right" />
      </div>
    </section>
  )
}

export default HomeSection
