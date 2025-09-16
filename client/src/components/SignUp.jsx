import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempted with:', { name, email, password, confirmPassword, rememberMe });
  };  return (
  <div className="relative flex flex-col md:flex-row md:min-h-screen overflow-hidden bg-[#560101]">
      {/* Mobile background image (shows only on small screens) */}
      <div
        className="absolute inset-0 bg-center bg-cover md:hidden pointer-events-none"
        style={{ backgroundImage: "url('/login-img.png')", opacity: 0.70 }}
        aria-hidden
      />
          {/* Left Side - Image */}
          <div className="hidden md:flex md:w-1/2 relative">
            <img
              src="/login-img.png"
              alt="Woman in traditional saree"
              className="w-full h-full object-cover"
            />
          </div>
    
        {/* Right Side - SignUp Form */}
  <div className="w-full md:w-1/2 flex items-start md:items-center justify-start md:justify-center bg-transparent md:bg-[#550101] px-4 sm:px-6 py-6 sm:py-10 relative z-10">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-md">
            {/* Logo */}
            <div className="text-center mb-4 sm:mb-6">
              <img src="/home-logo.png" alt="Logo" className='w-28 sm:w-36 md:w-40 lg:w-44 h-auto mx-auto'/>
            </div>

            {/* SignUp Heading */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wider text-center md:text-left">
                Sign Up
              </h2>
            </div>

            {/* SignUp Form */}
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
                  className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all pr-12 text-sm sm:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-300 hover:text-white transition-colors cursor-pointer"
                >
                  {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all pr-12 text-sm sm:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-300 hover:text-white transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
              </div>

              {/* Terms & Policy */}
              <div className="flex items-center text-sm">
                <label className="flex items-center text-red-200 cursor-pointer text-sm">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-1 flex items-center justify-center transition-all duration-200 ${
                      rememberMe 
                        ? ' border-white' 
                        : 'bg-transparent border-white hover:border-white'
                    }`}>
                      {rememberMe && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-white">
                    I accept the <span className='text-blue-400 hover:text-blue-300 transition-colors'>Terms</span> & <span className='text-blue-400 hover:text-blue-300 transition-colors'>Policy</span>
                  </span>
                </label>
              </div>

              {/* SignUp Button */}
              <Link to="/profilesetup">
                <button
                  type="button"
                  className="w-full bg-[#8a0c0c] text-white font-medium py-3 px-4 rounded transition-colors duration-200 uppercase tracking-wider cursor-pointer text-sm sm:text-base"
                >
                  Next
                </button>
              </Link>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-white text-sm">
                Already have an account ?{' '}
                <Link to="/login" className="text-blue-400 underline transition-colors font-medium cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
            </div>
          </div>
        </div>
      );
    };

export default SignUp