import React from 'react'
import { LuHouse } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const GetInTouch = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-12 px-2 md:px-8 lg:px-24 bg-white">
      {/* Left: Overlapping Images */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:-ml-10">
        <div className="relative w-[280px] h-[200px] sm:w-[320px] sm:h-[220px] md:w-[380px] md:h-[260px]">
          <img src="/contact-img-1.png" alt="Get In Touch 1" className="absolute left-0 lg:top-[-75px] top-0 w-[200px] h-[187px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] object-cover z-10 lg:w-[400px] lg:h-[400px]" />
          <img src="/contact-img.png" alt="Get In Touch 2" className="absolute left-12 lg:top-[-95px] -top-5 w-[220px] h-[220px] sm:left-16 sm:top-8 sm:w-[180px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[450px] object-cover opacity-60 z-0" />
        </div>
      </div>
      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-xl px-4 sm:px-6 md:px-0">
        <div className="text-xs md:text-sm tracking-widest font-semibold mb-2 text-[#6b6b6b] uppercase">GET IN TOUCH!</div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{fontFamily: 'serif'}}>
          We are here to help<br className="hidden md:block" /> you always...
        </h2>
        <p className="text-[#6b6b6b] text-sm md:text-base leading-relaxed mb-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to many desktop publishing packages.
        </p>
        <div className="space-y-3 sm:space-y-2 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 w-full">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 border-2 rounded-md text-[#422a3c] mx-auto sm:mx-0">
              <LuHouse className='w-6 h-6 sm:w-8 sm:h-8 text-[#422a3c]' />
            </span>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-[#232323]">Visit Us :</div>
              <div className="text-xs md:text-sm text-[#6b6b6b]">MARIE NDALSVEJ 50D 2 2000 FREDERIKSBERG.</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 w-full">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 border-2 rounded-md text-[#422a3c] mx-auto sm:mx-0">
              <MdOutlineMail className='w-6 h-6 sm:w-8 sm:h-8 text-[#422a3c]' />
            </span>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-[#232323]">Drop Us :</div>
              <div className="text-xs md:text-sm text-[#6b6b6b]">SUPPORT@BEAUTYNESS.COM</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 w-full">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 border-2 rounded-md text-[#422a3c] mx-auto sm:mx-0">
              <LuPhoneCall className='w-6 h-6 sm:w-8 sm:h-8 text-[#422a3c]' />
            </span>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-[#232323]">Call Us :</div>
              <div className="text-xs md:text-sm text-[#6b6b6b]">CALL: 1-800-123-9999</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch