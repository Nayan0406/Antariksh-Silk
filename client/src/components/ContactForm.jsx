import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaHome, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuHouse } from "react-icons/lu";

const ContactForm = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-10 px-2 sm:px-4 lg:px-8">
      <div className="relative flex flex-col items-center w-full ">
        {/* Background image */}
        <img src="/contact-form-background.png" alt="" className="h-150 lg:h-full lg:w-full object-cover lg:object-fill absolute top-0 left-0 z-0 rounded-xl" />
        {/* Overlay content */}
        <div className="relative z-10 w-full flex flex-col items-center px-4 py-8 sm:px-6 md:px-8">
          {/* page heading outside the card */}
          <div className="text-center mb-8">
            <div className="text-xs md:text-sm tracking-widest font-semibold mb-2 text-[#f44336] uppercase">GET IN TOUCH!</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#550000] font-serif">We are here to help<br/>you always...</h2>
          </div>
          <div className="w-full max-w-6xl ">
            <div className="flex flex-col lg:flex-row ">
              {/* Left image panel with contact details (hidden on small screens, stacked above on mobile) */}
              <div className="w-full lg:w-1/2 relative">
                {/* background image layer */}
                <div className="absolute inset-0" style={{
                  backgroundImage: "url('/homesection-img.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div className="relative p-8 text-white flex flex-col justify-between min-h-[420px]">
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
              <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 flex items-center">
                {/* heading moved above the card */}

                <form className="w-full max-w-5xl bg-white bg-opacity-100 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First row: First Name / Last Name */}
              <div>
                <label className="text-xs text-black">First Name</label>
                <input type="text" className="w-full mt-2 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2" />
              </div>
              <div>
                <label className="text-xs text-black">Last Name</label>
                <input type="text" className="w-full mt-2 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2" />
              </div>

              {/* Second row: Email / Phone */}
              <div>
                <label className="text-xs text-black">Email</label>
                <input type="email" className="w-full mt-2 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2" />
              </div>
              <div>
                <label className="text-xs text-black">Phone Number</label>
                <input type="tel" className="w-full mt-2 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none pb-2" />
              </div>

              {/* Query options row */}
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-gray-700 mb-3">Query Box?</p>
                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" defaultChecked />
                    <span className="text-sm text-gray-600">Booking</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" />
                    <span className="text-sm text-gray-600">Custom Saree Request</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" />
                    <span className="text-sm text-gray-600">Bulk Orders</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="query" className="form-radio text-[#422a3c]" />
                    <span className="text-sm text-gray-600">General Inquiry</span>
                  </label>
                </div>
              </div>

              {/* Message textarea */}
              <div className="md:col-span-2">
                <label className="text-sm text-gray-500">Message</label>
                <textarea className="w-full mt-2 border-0 border-b-2 border-gray-300 focus:border-[#422a3c] outline-none resize-none min-h-[140px] pb-2" placeholder="Write your message.." />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button type="submit" className="bg-[#5a0e0e] text-white px-6 py-3 rounded shadow hover:bg-[#6a1b1b] transition">Send Message</button>
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