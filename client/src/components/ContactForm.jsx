import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaHome, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuHouse } from "react-icons/lu";

const ContactForm = () => {
  return (
    <section className="max-w-full min-h-screen bg-white flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 px-2 sm:px-4 lg:px-8">
      <div className="bg-[#e3cfcd] relative flex flex-col  max-w-full rounded-tl-[10rem] rounded-br-[10rem]">
        {/* Background image */}
        {/* <img 
          src="/contact-form-background.png" 
          alt="" 
          className="h-96 sm:h-120 md:h-140 lg:h-full lg:w-full object-cover lg:object-fill absolute top-0 left-0 z-0 rounded-lg sm:rounded-xl" 
        /> */}
        {/* Overlay content */}
        <div className="relative z-10 w-full flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
          {/* page heading outside the card */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <div className="text-xs sm:text-sm md:text-base tracking-widest font-semibold mb-2 sm:mb-3 text-[#f44336] uppercase">
              GET IN TOUCH!
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#550000] font-serif leading-tight">
              We are here to help<br className="hidden sm:block"/>
              <span className="sm:hidden"> </span>you always...
            </h2>
          </div>
          <div className="w-full max-w-6xl">
            <div className="flex flex-col xl:flex-row shadow-lg rounded-lg sm:rounded-xl overflow-hidden">
              {/* Left image panel with contact details */}
              <div className="w-full xl:w-1/2 relative order-2 xl:order-1">
                {/* background image layer */}
                <div className="absolute inset-0" style={{
                  backgroundImage: "url('/homesection-img.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div className="relative p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between min-h-[300px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[500px]">
                  <div>
                    <div className="text-xs md:text-sm tracking-widest font-semibold mb-2 text-pink-300 uppercase">GET IN TOUCH</div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Contact Information</h3>
                    <p className="text-sm mb-6 max-w-md">“Have a query? Wrap it in a message—we'll unfold the answer.”</p>

                    <ul className="space-y-8 mt-6">
                      <li className="flex items-start gap-3">
                        <span className="text-2xl"><FiPhoneCall /></span>
                        <div>
                          <div className="text-sm font-semibold">Call Us :</div>
                          <div className="text-xs">CALL: 1-800-123-9999</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-2xl"><MdOutlineMailOutline /></span>
                        <div>
                          <div className="text-sm font-semibold">Drop Us :</div>
                          <div className="text-xs">support@beautyness.com</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-1xl h-10"><LuHouse className='h-10'/></span>
                        <div>
                          <div className="text-sm font-semibold">Visit Us :</div>
                          <div className="text-xs">Mariendalsvej 50D 2 2000 Frederiksberg.</div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 md:mt-80">
                    <button aria-label="facebook" className="w-9 h-9 rounded-full border-2 border-[#ec7171] flex items-center justify-center text-white/90"><FaFacebookF /></button>
                    <button aria-label="twitter" className="w-9 h-9 rounded-full border-2 border-[#ec7171] flex items-center justify-center text-white/90"><FaTwitter /></button>
                    <button aria-label="linkedin" className="w-9 h-9 rounded-full border-2 border-[#ec7171] flex items-center justify-center text-white/90"><FaLinkedinIn /></button>
                    <button aria-label="instagram" className="w-9 h-9 rounded-full border-2 border-[#ec7171] flex items-center justify-center text-white/90"><FaInstagram /></button>
                  </div>
                </div>
              </div>

              {/* Right: form panel */}
              <div className="w-full xl:w-1/2 bg-white p-4 sm:p-6 md:p-8 lg:p-10 flex items-center order-1 xl:order-2">
                {/* heading moved above the card */}

                <form className="w-full max-w-5xl bg-white bg-opacity-100 rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* First row: First Name / Last Name */}
              <div>
                <label className="text-xs sm:text-sm text-black font-medium">First Name</label>
                <input type="text" className="w-full mt-2 sm:mt-3 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2 sm:pb-3 text-sm sm:text-base transition-colors" />
              </div>
              <div>
                <label className="text-xs sm:text-sm text-black font-medium">Last Name</label>
                <input type="text" className="w-full mt-2 sm:mt-3 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2 sm:pb-3 text-sm sm:text-base transition-colors" />
              </div>

              {/* Second row: Email / Phone */}
              <div>
                <label className="text-xs sm:text-sm text-black font-medium">Email</label>
                <input type="email" className="w-full mt-2 sm:mt-3 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2 sm:pb-3 text-sm sm:text-base transition-colors" />
              </div>
              <div>
                <label className="text-xs sm:text-sm text-black font-medium">Phone Number</label>
                <input type="tel" className="w-full mt-2 sm:mt-3 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2 sm:pb-3 text-sm sm:text-base transition-colors" />
              </div>

              {/* Query options row */}
              <div className="lg:col-span-2">
                <p className="text-sm sm:text-base font-semibold text-gray-700 mb-3 sm:mb-4">Query Box?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" defaultChecked />
                    <span className="text-xs sm:text-sm text-gray-600">Booking</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" />
                    <span className="text-xs sm:text-sm text-gray-600">Custom Saree Request</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" />
                    <span className="text-xs sm:text-sm text-gray-600">Bulk Orders</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" />
                    <span className="text-xs sm:text-sm text-gray-600">General Inquiry</span>
                  </label>
                </div>
              </div>

              {/* Message textarea */}
              <div className="lg:col-span-2">
                <label className="text-xs sm:text-sm text-black font-medium">Message</label>
                <textarea className="w-full mt-2 sm:mt-3 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none resize-none min-h-[100px] sm:min-h-[120px] md:min-h-[140px] pb-2 sm:pb-3 text-sm sm:text-base transition-colors" placeholder="Write your message.." />
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
              <button type="submit" className="w-full sm:w-auto bg-[#5a0e0e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-sm sm:text-base font-medium shadow hover:bg-[#6a1b1b] transition-colors duration-200">
                Send Message
              </button>
            </div>
          </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm