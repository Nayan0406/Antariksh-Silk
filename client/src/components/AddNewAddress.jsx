import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddNewAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState(null) // null means no address selected by default

  // sample addresses to display
  const addresses = [
    {
      name: 'Sana',
      email: 'sana31@example.com',
      phone: '+91 9876543210',
      altPhone: '+91 9123456780',
      addressLine: 'Flat No. 203, Green Residency Apartments',
      landmark: 'Near City Mall',
      pincode: '411001',
      locality: 'Pune',
      city: 'Pune',
      state: 'Maharashtra',
    },
    {
      name: 'Riya Sharma',
      email: 'riyasharma24@example.com',
      phone: '+91 9823456789',
      altPhone: '+91 9934567890',
      addressLine: 'B-14, Lotus Heights, MG Road',
      landmark: 'Opposite Central Park',
      pincode: '110001',
      locality: 'New Delhi',
      city: 'New Delhi',
      state: 'Delhi',
    },
    {
      name: 'Ananya Sharma',
      email: 'ananyasharma@gmail.com',
      phone: '+91 9988776655',
      altPhone: '+91 8877665544',
      addressLine: 'B-402, Lotus Heights, MG Road',
      landmark: 'Opposite Central Park',
      pincode: '560001',
      locality: 'Bangalore',
      city: 'Bengaluru',
      state: 'Karnataka',
    }
  ]

  return (
    <div className='max-w-full min-h-screen  flex flex-col items-center p-4 sm:p-6 lg:p-8'>

        {/* === Step Indicator === */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl flex items-center justify-between mb-8 sm:mb-10 lg:mb-12">
        {/* Step 1 - Review */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#a31f1f] text-[#a31f1f] font-bold text-sm sm:text-base">
              1
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-[#a31f1f]">Review</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300 mx-2"></div>
        </div>

        {/* Step 2 - Address */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#a31f1f] text-[#a31f1f] font-bold text-sm sm:text-base">
              2
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-[#a31f1f]">Address</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-300 mx-2"></div>
        </div>

        {/* Step 3 - Payment */}
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-sm sm:text-base">
            3
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">Payment</p>
        </div>
      </div>

      <div className='w-full max-w-5xl mx-auto bg-[#f4eded] p-4 sm:p-6 -mb-5'>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <h2 className="text-lg sm:text-xl font-semibold sm:justify-center">Select Delivery Address</h2>
          <Link to="/addresssection">
            <button className="text-black text-xs sm:text-sm font-medium bg-[#ebf0ff] border-0 px-3 py-2 sm:px-4 sm:py-2 w-full sm:w-auto cursor-pointer">
              + ADD NEW ADDRESS
            </button>
          </Link>
        </div>
      </div>

        {/* Address list */}
        <div className="w-full max-w-5xl mx-auto mt-6 space-y-4 px-2 sm:px-0">
          {addresses.map((addr, idx) => (
            <div key={idx} className={`p-4 sm:p-6 border-0 ${selectedAddress === idx ? 'bg-[#fcf6f6] border-0' : 'bg-[#f7f7f7]'}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input
                  type="radio"
                  name="selectedAddress"
                  checked={selectedAddress === idx}
                  onChange={() => setSelectedAddress(idx)}
                  className="lg:-mt-47 sm:mt-1 mr-3 w-4 h-4 sm:w-5 sm:h-5 accent-[#a31f1f]"
                />
                <div className="flex-1 text-sm sm:text-base">
                  <p className="font-normal">Full Name: {addr.name}</p>
                  <p className="font-normal">Email Address: {addr.email}</p>
                  <p className="font-normal">Phone Number: {addr.phone}</p>
                  <p className="font-normal">Alternate Phone Number: {addr.altPhone}</p>
                  <p className="font-normal">Street Address / House No. / Apartment Name: {addr.addressLine}</p>
                  <p className="font-normal">Landmark: {addr.landmark}</p>
                  <p className="font-normal">Pin code: {addr.pincode}</p>
                  <p className="font-normal">Locality: {addr.locality}</p>
                  <p className="font-normal">City: {addr.city}</p>
                  <p className="font-normal">State: {addr.state}</p>
                </div>
              </div>
              {/* show action buttons only when this address is selected */}
              {selectedAddress === idx && (
                <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link to='/paymentsection'>
                    <button className={`px-4 py-2 rounded-md text-white w-full sm:w-auto lg:ml-10 bg-[#870900] cursor-pointer`}>Delivery Address</button>
                  </Link>
                  <button className="px-4 py-2 rounded-md bg-[#eef2ff] text-sm w-full sm:w-auto">Edit</button>
                </div>
              )}
            </div> 
          ))}
        </div>

      
      
    </div>
  )
}

export default AddNewAddress