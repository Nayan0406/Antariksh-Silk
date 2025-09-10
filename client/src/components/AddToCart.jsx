import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Green");
  const price = 6000;
  const discount = 0;
  const gst = 60;
  const platformFee = 40;
  const subtotal = price * quantity + gst + platformFee - discount;

  return (
    <div className="max-w-full mx-auto min-h-screen bg-gray-50 flex flex-col items-center p-8">

      {/* === Step Indicator === */}
      <div className="w-full max-w-[400px] lg:w-4/2 flex items-center justify-between mb-8 lg:mb-12 px-4 lg:px-0">
        {/* Step 1 - Review */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full border-2 border-[#a31f1f] text-[#a31f1f] font-bold text-sm lg:text-base">
              1
            </div>
            <p className="mt-1 lg:mt-2 text-xs lg:text-sm font-medium text-[#a31f1f]">Review</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300 mx-1 lg:mx-2"></div>
        </div>

        {/* Step 2 - Address */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-sm lg:text-base">
              2
            </div>
            <p className="mt-1 lg:mt-2 text-xs lg:text-sm font-medium text-gray-700">Address</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300 mx-1 lg:mx-2"></div>
        </div>

        {/* Step 3 - Payment */}
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-sm lg:text-base">
            3
          </div>
          <p className="mt-1 lg:mt-2 text-xs lg:text-sm font-medium text-gray-700">Payment</p>
        </div>
      </div>

      {/* === Main Content Section === */}
      <div className="w-full max-w-full flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-8 px-4 lg:px-0 items-start">

        {/* Left Column - Product Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img
            src="/Kanjeevaram-saree.png"
            alt="Silk Saree"
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-6xl lg:w-[400px] h-[300px] sm:h-[350px] lg:h-[450px] object-fit lg:ml-10"
          />
        </div>

        {/* Middle Column - Product Details */}
        <div className="w-full lg:w-1/3">
          <div className="p-4 lg:p-6">
            <h3 className="uppercase text-xs tracking-[0.2em] text-gray-600 mb-3 lg:mb-4">
              VISIT OUR STORE!
            </h3>
            
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Silk Saree</h1>
            
            <p className="text-gray-600 mb-3 lg:mb-4 text-sm">
              known for best appearance in occasions like diwali.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 mb-4 lg:mb-6">
              <span>• Color: Yellow</span>
              <span>• Material: Silk</span>
            </div>

            <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Rs.6,000</p>

            {/* Color and Quantity in one row */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-4 lg:mb-6">
              {/* Color Selection */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <select 
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none bg-white"
                >
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="Red">Red</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div>

              {/* Quantity Selection */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Quantity</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-lg font-bold text-red-600"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center py-0 text-lg font-medium ">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-lg font-bold text-red-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-4">
              <button className="w-full sm:flex-1 bg-gray-600 text-white py-3 px-4 rounded-sm font-medium hover:bg-gray-700 transition-colors cursor-pointer text-sm">
                Move to Wishlist
              </button>
              <button className="w-full sm:flex-1 bg-[#a31f1f] text-white py-3 px-4 rounded-sm font-medium hover:bg-red-800 transition-colors cursor-pointer text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Price Details */}
        <div className="w-full lg:w-1/3 lg:mt-10">
          <div className="">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 lg:p-6 border-b border-gray-200 gap-3 sm:gap-0">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900">Price Details</h2>
              <Link to="/addnewaddress">
                <button className="bg-red-700 text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-red-800 transition-colors cursor-pointer">
                  Proceed to pay
                </button>
              </Link>
            </div>

            <div className="p-4 lg:p-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Price({quantity} item)</span>
                <span className="font-medium">{(price * quantity).toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>{discount}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>GST</span>
                <span>{gst}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Platform fee</span>
                <span>{platformFee}</span>
              </div>
              
              <hr className="border-gray-200" />
              
              <div className="flex justify-between font-bold text-base lg:text-lg pt-2">
                <span className="text-sm lg:text-base">(Including all taxes) Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AddToCart;
