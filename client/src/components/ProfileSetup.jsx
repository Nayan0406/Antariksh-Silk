import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileSetup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile setup logic here
    console.log('Profile setup with:', { name, email, phone, address, city, state });
  };

  const handleSkip = () => {
    // Handle skip logic here
    console.log('Profile setup skipped');
  };

  return (
  <div className="relative flex flex-col md:flex-row md:min-h-screen overflow-hidden bg-[#560101]">
      {/* Mobile background image (shows only on small screens) */}
      <div
        className="absolute inset-0 bg-center bg-cover md:hidden pointer-events-none"
        style={{ backgroundImage: "url('/login-img.png')", opacity: 0.70 }}
        aria-hidden
      />
      {/* Left Side - Image (shows from md up) */}
      <div className="hidden md:flex md:w-1/2 relative z-10">
        <img
          src="/login-img.png"
          alt="Woman in traditional saree"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Profile Setup Form */}
  <div className="w-full md:w-1/2 relative overflow-visible flex items-start md:items-center justify-start md:justify-center bg-transparent md:bg-gradient-to-r md:from-[#550101] md:to-[#2e0303] px-4 sm:px-6 py-6 sm:py-10 z-10">
        {/* Decorative shade that slightly overlaps the left image on large screens */}
        {/* <div className="hidden lg:block absolute -left-20 top-0 h-full w-10 pointer-events-none bg-gradient-to-l from-[#2e0303]" /> */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-md">
          {/* Logo */}
      <div className="text-center mb-4 sm:mb-6">
            <img src="/home-logo.png" alt="Logo" className='w-28 sm:w-36 md:w-40 lg:w-44 h-auto mx-auto'/>
          </div>

          {/* Profile Setup Heading */}
      <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wider text-center md:text-left">
              Profile Setup
            </h2>
          </div>

          {/* Profile Setup Form */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Address Input */}
            <div>
              <input
                type="text"
                placeholder="Street Address / House No. / Apartment Name"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* City and State Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3">
              <button
                type="button"
                onClick={handleSkip}
        className="w-full bg-[#2e0303] border-0 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer text-sm sm:text-base"
              >
                Skip
              </button>
              <button
                type="submit"
        className="w-full bg-red-700 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200 text-sm sm:text-base"
              >
                Save & Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
    };

export default ProfileSetup