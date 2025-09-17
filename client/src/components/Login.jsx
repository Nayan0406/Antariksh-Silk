import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password, rememberMe });
  };

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen items-center md:items-stretch justify-center md:justify-start overflow-hidden bg-[#1d0200] z-1">

      {/* Mobile gradient background (shows only on small screens) */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #1D0200 0%, #5A1D19 50%, #1D0200 100%)',
        }}
        aria-hidden
      />

    {/* Left Side - Image */}
  <div className="hidden md:flex md:w-1/2 lg:w-1/2 relative md:h-screen">
        <img
          src="/login-img.png"
          alt="Woman in traditional saree"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Side - Login Form */}
  <div className="w-full md:w-1/2 flex items-center md:items-center justify-center bg-transparent md:bg-[#1d0200] px-4 sm:px-8 md:px-12 py-6 sm:py-12 md:py-16 relative z-1">
    <div className="w-full max-w-md md:max-w-lg lg:max-w-md">
          {/* Logo */}
          <div className="text-center mb-6 sm:mb-8">
            <img src="/home-logo.png" alt="Logo" className='w-28 sm:w-36 md:w-40 lg:w-44 h-auto mx-auto' />
          </div>

          {/* Login Heading */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wider text-center md:text-left">
              Login
            </h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Email/Phone Input */}
            <div>
              <input
                type="email"
                placeholder="Email / Phone No."
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
                className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border-0 rounded text-white placeholder-white focus:outline-none transition-all pr-12 text-sm sm:text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-red-300 hover:text-white transition-colors"
              >
                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-red-200 cursor-pointer text-sm">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${rememberMe
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
                <span className="ml-3 text-white">Remember Me</span>
              </label>
              <Link to="/forgot-password" className="text-[#f7e5c1] underline">
                Forget Password
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-600 text-white font-medium py-3 px-4 rounded transition-colors duration-200 uppercase tracking-wider cursor-pointer text-sm sm:text-base"
            >
              LOGIN
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6 sm:mt-8 flex justify-center space-x-3">
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <FcGoogle size={20} />
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-red-200 text-sm">
              Don't have an account ?{' '}
              <Link to="/signup" className="text-blue-400 underline transition-colors font-medium hover:text-blue-300">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;