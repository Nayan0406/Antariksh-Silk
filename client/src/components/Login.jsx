import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

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
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="/login-img.png"
          alt="Woman in traditional saree"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-transparent via-[#550000] to-[#550000] px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-12">
            <img src="/home-logo.png" alt="" />
          </div>

          {/* Login Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-white tracking-wider">
              Login
            </h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Phone Input */}
            <div>
              <input
                type="text"
                placeholder="Email / Phone No."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#6f2b2b] bg-opacity-50 border border-red-600 rounded text-white placeholder-red-300 focus:outline-none focus:border-red-400 focus:bg-opacity-70 transition-all"
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
                className="w-full px-4 py-3 bg-red-800 bg-opacity-50 border border-red-600 rounded text-white placeholder-red-300 focus:outline-none focus:border-red-400 focus:bg-opacity-70 transition-all pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-300 hover:text-white transition-colors"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-red-200">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 w-4 h-4 text-red-600 bg-red-800 border-red-600 rounded focus:ring-red-500 focus:ring-2"
                />
                Remember Me
              </label>
              <a href="#" className="text-red-200 hover:text-white transition-colors">
                Forget Password
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-600 text-white font-medium py-3 px-4 rounded transition-colors duration-200 uppercase tracking-wider"
            >
              LOGIN
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8 flex justify-center space-x-4">
            <button className="flex items-center justify-center hover:scale-105 transition-transform">
              <FcGoogle />
            </button>
            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-red-200 text-sm">
              Don't have an account{' '}
              <a href="/signup" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;