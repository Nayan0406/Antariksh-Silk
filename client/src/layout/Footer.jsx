import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white border-t border-white pt-8 pb-10 px-4 md:px-0 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url('/footer-img.png')` }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
      
      {/* Top: Brand left, Socials right */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b-1 border-white pb-4">
        {/* Brand */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <img src="/logo.png" alt="Logo" className="h-20 w-30 object-contain" />
        </div>
        {/* Socials */}
        <div className="flex gap-3 justify-center md:justify-end">
          <a href="#" className="border border-[#e1bfcf] rounded-full p-2 hover:bg-[#e1bfcf] hover:text-[#2a1b22] transition" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="border border-[#e1bfcf] rounded-full p-2 hover:bg-[#e1bfcf] hover:text-[#2a1b22] transition" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="border border-[#e1bfcf] rounded-full p-2 hover:bg-[#e1bfcf] hover:text-[#2a1b22] transition" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" className="border border-[#e1bfcf] rounded-full p-2 hover:bg-[#e1bfcf] hover:text-[#2a1b22] transition" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom: Content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 mt-8">
        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 font-prata">Explore</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#e1bfcf] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#e1bfcf] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#e1bfcf] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#e1bfcf] transition">Blog</a></li>
            <li><a href="#" className="hover:text-[#e1bfcf] transition">Contact Us</a></li>
          </ul>
        </div>
        {/* Utility Pages */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 font-prata">Utility Pages</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#e1bfcf] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#e1bfcf] transition">Terms of Use</a></li>
          </ul>
        </div>
        {/* Keep in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 font-prata">Keep in Touch</h3>
          <ul className="text-sm space-y-4">
            <li><span className="font-semibold">Address :</span> Mariendalsvej 50D 2 2000<br className="hidden sm:inline"/> Frederiksberg.</li>
            <li><span className="font-semibold">Mail :</span> support@servicemarket.com</li>
            <li><span className="font-semibold">Phone :</span> (+22) 123 - 4567 - 900</li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-25 border-gray-700 pt-4 text-center text-xs text-[#e1bfcf]">
        &copy; {new Date().getFullYear()} ServiceMarket. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;