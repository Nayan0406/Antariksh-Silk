import React, { useState } from "react";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";

const AddressSection = () => {
  const [currentStep, setCurrentStep] = useState(2); // 👉 active step

  const steps = [
    { id: 1, name: "Review" },
    { id: 2, name: "Address" },
    { id: 3, name: "Payment" },
  ];

  return (
    <div className="max-w-full mx-auto min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* === Step Indicator === */}
      <div className="w-full max-w-2xl relative mb-12">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -translate-y-1/2"></div>

        {/* Progress Line */}
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-[#a31f1f] -translate-y-1/2 transition-all duration-700"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {/* Steps */}
        <div className="flex justify-between relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-500 ${
                  step.id < currentStep
                    ? "bg-[#a31f1f] text-white"
                    : step.id === currentStep
                    ? "border-2 border-[#a31f1f] text-[#a31f1f] bg-white"
                    : "border-2 border-gray-400 text-gray-400 bg-white"
                }`}
              >
                {step.id < currentStep ? <FaCheck /> : step.id}
              </div>

              {/* Label */}
              <p
                className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                  step.id <= currentStep ? "text-[#a31f1f]" : "text-gray-500"
                }`}
              >
                {step.name}
              </p>
            </div>
          ))}
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
          <div className="">
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

          {/* Locality */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Locality
            </label>
            <input
              type="text"
              className="mt-1 w-full border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City/Town/District
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
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={() =>
              setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev))
            }
            className="bg-gray-800 text-white px-6 py-2 rounded-md cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev))
            }
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
