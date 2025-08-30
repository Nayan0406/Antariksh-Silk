import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";

const SubscribeSection = () => {
  return (
    <section className="py-6 mx-w-full bg-[#fbfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-xl p-6 md:p-10">
          {/* Left image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden ">
              <img src="/subscribe-img.jpg" alt="store" className="w-full h-64 md:h-72 object-cover" />
            </div>
          </div>

          {/* Right content */}
          <div className="w-full">
            <h3 className="text-3xl md:text-4xl font-prata font-bold text-[#1f1f1f]">Subscribe to newsletter</h3>
            <p className="mt-4 text-gray-600 max-w-xl">Sign up for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.</p>

            <form className="mt-6">
              <label htmlFor="email" className="sr-only">Email</label>

              <div className="relative w-full max-w-xl">
                {/* left icon */}
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-900">
                  <MdOutlineMailOutline className="w-5 h-5" />
                </div>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your mail"
                  className="w-full pl-12 pr-32 py-3 rounded-full border border-pink-200 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-100"
                />

                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-black text-white text-sm shadow-md"
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