import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AddressSection = () => {
  return (
    <div className="max-w-full mx-auto min-h-screen bg-gray-50 flex flex-col items-center p-8">
      
      {/* === Step Indicator === */}
      <div className="w-[400px] lg:w-2/4 flex items-center justify-between mb-12">
        {/* Step 1 - Review */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#a31f1f] text-[#a31f1f]  font-bold">
              1
            </div>
            <p className="mt-2 text-sm font-medium text-[#a31f1f]">Review</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300 mx-2"></div>
        </div>

        {/* Step 2 - Address */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#a31f1f] text-[#a31f1f] font-bold">
              2
            </div>
            <p className="mt-2 text-sm font-medium text-[#a31f1f]">Address</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300 mx-2"></div>
        </div>

        {/* Step 3 - Payment */}
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold">
            3
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">Payment</p>
        </div>
      </div>

      {/* === Heading + Use Current Location === */}
      <div className="w-full lg:w-3/4 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shipping Address</h2>
        <button className="flex items-center gap-2 bg-indigo-50 text-gray-700 px-4 py-2 rounded-md cursor-pointer">
          <FaMapMarkerAlt />
          Use Current Location
        </button>
      </div>

      {/* === Form === */}
      <form className="max-w-full lg:w-3/4 bg-[#f6efef] p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Alternate Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Alternate Phone Number
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Street Address / House No. / Apartment Name
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Landmark */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Landmark
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Pin Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pin code
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            className="bg-gray-800 text-white px-6 py-2 rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#550000] text-white px-6 py-2 rounded-md cursor-pointer"
          >
            Delivery Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressSection;
