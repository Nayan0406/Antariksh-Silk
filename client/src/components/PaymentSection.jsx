import React from 'react'
import { FaTruckFast } from "react-icons/fa6";

const PaymentSection = () => {
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
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#a31f1f] text-[#a31f1f] font-bold text-sm sm:text-base">
            3
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium text-[#a31f1f]">Payment</p>
        </div>
      </div>

        <div className="w-full max-w-6xl">
          <div className="w-full bg-[#f4eded] px-4 sm:px-6 py-6 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold pl-2 sm:pl-6">Select Payment Mode</h2>
          </div>

          <div className="w-full bg-[#fcf6f6] p-4 sm:p-6 lg:-mt-3 -mt-3">
            <div className="space-y-4">
              <label className="flex items-center justify-between border rounded-lg p-4 border-[#b76e79] hover:shadow-md">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-5 h-5 text-[#a31f1f]" defaultChecked />
                  <span className="text-base font-medium">Cash On Delivery</span>
                </div>
                <div className="text-sm text-gray-700"><span className="text-gray-500 mr-2">Total Amount :</span><span className="font-semibold">Rs. 6,100</span></div>
              </label>

              <label className="flex items-center justify-between border rounded-lg p-4 border-gray-300 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-5 h-5 text-[#a31f1f]" />
                  <span className="text-base font-medium">Pay Online</span>
                </div>
                <div className="text-sm text-gray-700"><span className="text-gray-500 mr-2">Total Amount :</span><span className="font-semibold">Rs. 6,100</span></div>
              </label>
            </div>

            <button className="mt-6 w-full bg-[#8b231e] hover:bg-[#7a1d1a] text-white py-3 rounded-lg text-lg font-medium cursor-pointer">Place Order</button>
          </div>
        </div>

        <div className='w-full max-w-6xl mt-5'>
          <div className="w-full bg-[#f4eded] px-4 sm:px-6 py-6 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold pl-2 sm:pl-6">Payment Details</h2>
          </div>

          <div className="w-full bg-[#fcf6f6] p-4 sm:p-6 lg:-mt-3 -mt-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Left: image + details (spans 2 cols on large) */}
              <div className="lg:col-span-2 flex flex-col sm:flex-row gap-6 items-start">
                <img src="/greensilksaree-front.png" alt="Saree" className="w-40 sm:w-56 md:w-64 object-cover mx-auto sm:mx-0" />

                <div className="flex-1 mt-4 sm:mt-0">
                  <h5 className='text-xs font-normal'>VISIT OUR STORE!</h5>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold">Silk Saree</h3>
                  <p className="text-sm text-gray-500 mt-1">known for best appearance in occasions like diwali.</p>
                  <p className="text-lg font-semibold mt-4">Rs.6,000</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <div>
                      <label className="block text-xs text-gray-500">Color</label>
                      <select className="mt-1 w-full border rounded px-2 py-2 bg-white text-sm">
                        <option>Green</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500">Total Quantity</label>
                      <div className="mt-1 flex items-center border rounded overflow-hidden w-full sm:w-36">
                        <button type="button" className="px-3 py-2">-</button>
                        <input readOnly value={1} className="w-full sm:w-20 text-center" />
                        <button type="button" className="px-3 py-2">+</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button className="w-full sm:flex-1 bg-gray-800 text-white py-2 rounded">Move to Wishlist</button>
                    <button className="w-full sm:flex-1 bg-[#c43d3d] text-white py-2 rounded">Remove</button>
                  </div>
                </div>
              </div>

              {/* Right: price details */}
              <div className="lg:col-span-1 mt-4 sm:mt-5">
                <div className="lg:border-l pl-0 lg:pl-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Price Details</h4>
                    <div className="text-sm text-gray-700 divide-y divide-gray-200">
                      <div className="py-3 flex justify-between">
                        <span>Price (1 item)</span>
                        <span>6,000</span>
                      </div>
                      <div className="py-3 flex justify-between">
                        <span>Discount</span>
                        <span>0</span>
                      </div>
                      <div className="py-3 flex justify-between">
                        <span>GST</span>
                        <span>60</span>
                      </div>
                      <div className="py-3 flex justify-between">
                        <span>Platform fee</span>
                        <span>40</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <p className="text-sm text-gray-500">(Including all taxes) <span className="font-medium">Total Amount</span></p>
                      <p className="text-lg font-bold">Rs. 6,100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='w-full max-w-6xl mt-5'>
          <div className="w-full bg-[#f4eded] px-4 sm:px-6 py-6 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold pl-2 sm:pl-6">Delivery Details</h2>
          </div>

          <div className="w-full bg-[#fcf6f6] p-4 sm:p-6 lg:-mt-3 -mt-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Xyz</h3>
                <div className="text-sm text-gray-700 space-y-3">
                  <p>Email Address: <span className="font-normal">xyz31@example.com</span></p>
                  <p>Phone Number: <span className="font-normal">+91 9876543210</span></p>
                  <p>Alternate Phone Number: <span className="font-normal">+91 9123456780</span></p>
                  <p>Street Address / House No. / Apartment Name: <span className="font-normal">Flat No. 203, Green Residency Apartments</span></p>
                  <p>Landmark: <span className="font-normal">Near City Mall</span></p>
                  <p>Pin code: <span className="font-normal">411001</span></p>
                  <p>City: <span className="font-normal">Pune</span></p>
                  <p>State: <span className="font-normal">Maharashtra</span></p>
                  <p>Country: <span className="font-normal">India</span></p>
                </div>

                <div className="mt-6 text-xl text-[#c43d3d] flex items-center gap-2">
                  <span className="text-blue-500"><FaTruckFast /></span>
                  <span className="font-medium">Estimated Delivery by Sunday, 14th Sep</span>
                </div>
              </div>

              <div className="lg:col-span-1 flex items-start justify-end">
                <button className="bg-[#d7ecff] text-black px-4 py-2 rounded shadow">Change Delivery Address</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentSection