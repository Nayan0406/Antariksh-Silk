import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";

const SubscribeSection = () => {
  return (
    <section className="py-6 max-w-full lg:ml-10 lg:mr-10 lg:mb-10 sm:py-8 md:py-12 lg:py-16 bg-[#e9dadb] md:rounded-tl-[6rem] lg:rounded-tl-[8rem] xl:rounded-tl-[10rem] md:rounded-br-[6rem] lg:rounded-br-[8rem] xl:rounded-br-[10rem]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Left image */}
          <div className="w-full order-2 lg:order-1">
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
              <img 
                src="/subscribe-img.jpg" 
                alt="store" 
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover" 
              />
            </div>
          </div>

          {/* Right content */}
          <div className="w-full order-1 lg:order-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-prata font-bold text-[#1f1f1f] leading-tight">
              Subscribe to newsletter
            </h3>
            <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sign up for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.
            </p>

            <form className="mt-5 sm:mt-6 md:mt-8">
              <label htmlFor="email" className="sr-only">Email</label>

              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                {/* left icon */}
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none text-gray-900">
                  <MdOutlineMailOutline className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your mail"
                  className="w-full pl-10 sm:pl-12 pr-24 sm:pr-28 md:pr-32 py-2.5 sm:py-3 md:py-3.5 rounded-full border border-pink-200 bg-white text-xs sm:text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-colors"
                />

                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-black text-white text-xs sm:text-sm md:text-base font-medium shadow-md hover:bg-gray-800 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection