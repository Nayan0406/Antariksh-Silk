import React, { useState } from 'react'

const AddNewAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState(0) // 0 for first address selected by default

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

      <div className='w-full max-w-xs sm:max-w-2xl lg:max-w-5xl bg-[#f4eded] p-4 sm:p-6 -mb-5'>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <h2 className="text-lg sm:text-xl font-semibold sm:justify-center">Select Delivery Address</h2>
          <button className="text-black text-xs sm:text-sm font-medium bg-[#ebf0ff] border-0 px-3 py-2 sm:px-4 sm:py-2 w-full sm:w-auto">+ ADD NEW ADDRESS</button>
        </div>
        </div>

      {/* Select Delivery Address Section */}
      <div className="w-full max-w-xs sm:max-w-2xl lg:max-w-5xl p-4 sm:p-6">
        

        <div className="space-y-3 sm:space-y-4">
          {/* Address 1 - Selected */}
          <div className={`border-0 p-3 sm:p-4 rounded-lg ${selectedAddress === 0 ? 'bg-[#fcf6f6]' : 'bg-[#f7f7f7]'}`}>
            <div className="flex items-start gap-2 sm:gap-3">
              <input 
                type="radio" 
                name="address" 
                checked={selectedAddress === 0}
                onChange={() => setSelectedAddress(0)}
                className="mt-1 w-4 h-4 text-[#550000] accent-[#550000] flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="break-words"><strong>Full Name:</strong> Sana</p>
                  <p className="break-words"><strong>Email Address:</strong> sana31@example.com</p>
                  <p><strong>Phone Number:</strong> +91 9876543210</p>
                  <p><strong>Alternate Phone Number:</strong> +91 9123456780</p>
                  <p className="break-words"><strong>Street Address / House No. / Apartment Name:</strong> Flat No. 203, Green Residency Apartments</p>
                  <p><strong>Landmark:</strong> Near City Mall</p>
                  <p><strong>Pin code:</strong> 411001</p>
                  <p><strong>City:</strong> Pune</p>
                  <p><strong>State:</strong> Maharashtra</p>
                  <p><strong>Country:</strong> India</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4">
                  <button className="bg-[#5a0e0e] text-white px-6 sm:px-10 py-2 rounded text-xs sm:text-sm">
                    Delivery Address
                  </button>
                  <button className="border border-gray-300 px-5 sm:px-7 py-2 rounded text-xs sm:text-sm bg-[#ebf0ff]">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Address 2 */}
          <div className={`border-0 p-3 sm:p-4 rounded-lg ${selectedAddress === 1 ? 'bg-[#fcf6f6]' : 'bg-[#f7f7f7]'}`}>
            <div className="flex items-start gap-2 sm:gap-3">
              <input 
                type="radio" 
                name="address" 
                checked={selectedAddress === 1}
                onChange={() => setSelectedAddress(1)}
                className="mt-1 w-4 h-4 text-[#550000] accent-[#550000] flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="break-words"><strong>Full Name:</strong> Riya Sharma</p>
                  <p className="break-words"><strong>Email Address:</strong> riyasharma24@example.com</p>
                  <p><strong>Phone Number:</strong> +91 9823456789</p>
                  <p><strong>Alternate Phone Number:</strong> +91 9934567890</p>
                  <p className="break-words"><strong>Street Address / House No. / Apartment Name:</strong> B-14, Lotus Heights, MG Road</p>
                  <p><strong>Landmark:</strong> Opposite Central Park</p>
                  <p><strong>Pin code:</strong> 110001</p>
                  <p><strong>City:</strong> New Delhi</p>
                  <p><strong>State:</strong> Delhi</p>
                  <p><strong>Country:</strong> India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address 3 */}
          <div className={`border-0 p-3 sm:p-4 rounded-lg ${selectedAddress === 2 ? 'bg-[#fcf6f6]' : 'bg-[#f7f7f7]'}`}>
            <div className="flex items-start gap-2 sm:gap-3">
              <input 
                type="radio" 
                name="address" 
                checked={selectedAddress === 2}
                onChange={() => setSelectedAddress(2)}
                className="mt-1 w-4 h-4 text-[#550000] accent-[#550000] flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="break-words"><strong>Full Name:</strong> Ananya Sharma</p>
                  <p className="break-words"><strong>Email Address:</strong> ananyasharma@gmail.com</p>
                  <p><strong>Phone Number:</strong> +91 9988776655</p>
                  <p><strong>Alternate Phone Number:</strong> +91 8877665544</p>
                  <p className="break-words"><strong>Street Address / House No. / Apartment Name:</strong> B-402, Lotus Heights, MG Road</p>
                  <p><strong>Landmark:</strong> Opposite Central Park</p>
                  <p><strong>Pin code:</strong> 560001</p>
                  <p><strong>City:</strong> Bengaluru</p>
                  <p><strong>State:</strong> Karnataka</p>
                  <p><strong>Country:</strong> India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddNewAddress