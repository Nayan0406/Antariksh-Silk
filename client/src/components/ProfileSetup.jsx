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
  };  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="/login-img.png"
          alt="Woman in traditional saree"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Profile Setup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#550101] px-6 sm:px-8 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-6 sm:mb-8">
            <img src="/home-logo.png" alt="Logo" className='w-32 sm:w-40 h-auto mx-auto'/>
          </div>

          {/* Profile Setup Heading */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wider">
              Profile Setup
            </h2>
          </div>

          {/* Profile Setup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all"
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
                className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all"
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
                className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all"
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
                className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all"
                required
              />
            </div>

            {/* City and State Row */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
              <button
                type="button"
                onClick={handleSkip}
                className="w-full bg-[#2e0303] border-0 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Skip
              </button>
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-600 text-white font-medium py-3 px-4 rounded transition-colors duration-200"
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