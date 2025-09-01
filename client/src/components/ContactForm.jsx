import React from 'react'
import { LuUser } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BsBook } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";

const ContactForm = () => {
  return (
    <section className="w-full min-h-screen bg-[#fbf2e0] flex flex-col items-center justify-center py-10 px-2 sm:px-4 lg:px-8">
      <div className="relative flex flex-col items-center w-full lg:max-w-full">
        {/* Background image */}
        <img src="/contact-form-background.png" alt="" className="h-150 lg:h-full lg:max-w-full object-cover absolute top-0 left-0 z-0 rounded-xl" />
        {/* Overlay content */}
        <div className="relative z-10 w-full flex flex-col items-center px-4 py-8 sm:px-6 md:px-8">
          <div className="text-center mb-6">
            <div className="text-xs md:text-sm tracking-widest font-semibold mb-2 text-[#c97a9b] uppercase">SCHEDULE YOUR PRESENCE</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'serif'}}>Get in touch</h2>
            <p className="text-[#6b6b6b] text-sm md:text-base max-w-sm sm:max-w-md md:max-w-lg mx-auto">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <form className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-180 bg-white bg-opacity-90 rounded-xl shadow-lg p-4 md:p-8 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center border rounded px-3 py-2 bg-white">
              <span className="mr-2 text-[#44263a]">
                <LuUser className='text-[#422a3c] w-4 h-4 sm:w-5 sm:h-5'/>
              </span>
              <input type="text" placeholder="Name" className="w-full text-black font-semibold text-sm sm:text-base outline-none" />
            </div>
            <div className="flex items-center border rounded px-3 py-2 bg-white">
              <span className="mr-2 text-[#44263a]">
                <MdOutlineMail className='text-[#422a3c] w-4 h-4 sm:w-5 sm:h-5'/>
              </span>
              <input type="email" placeholder="Email" className="w-full text-black font-semibold text-sm sm:text-base outline-none" />
            </div>
            <div className="flex items-center border rounded px-3 py-2 bg-white">
              <span className="mr-2 text-[#44263a]">
                <IoCallOutline className='text-[#422a3c] w-4 h-4 sm:w-5 sm:h-5'/>
              </span>
              <input type="tel" placeholder="Phone" className="w-full text-black font-semibold text-sm sm:text-base outline-none" />
            </div>
            <div className="flex items-center border rounded px-3 py-2 bg-white">
              <span className="mr-2 text-[#44263a]">
                <BsBook className='text-[#422a3c] w-4 h-4 sm:w-5 sm:h-5'/>
              </span>
              <input type="text" placeholder="Service You Need" className="w-full text-black font-semibold text-sm sm:text-base outline-none" />
            </div>
            <div className="flex items-start border rounded px-3 py-2 bg-white">
              <span className="mr-2 mt-1 text-[#44263a]">
                <PiNotePencil className='text-[#422a3c] w-4 h-4 sm:w-5 sm:h-5'/>
              </span>
              <textarea placeholder="Any Note For Us" className="w-full text-black font-semibold text-sm sm:text-base outline-none resize-none min-h-[60px]" />
            </div>
            <button type="submit" className="w-full bg-[#44263a] text-white py-3 rounded font-semibold tracking-widest mt-2 hover:bg-[#5a3450] transition text-sm sm:text-base">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm