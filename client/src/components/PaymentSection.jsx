import React from 'react'

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

        <div className='w-full max-w-xs sm:max-w-2xl lg:max-w-5xl bg-[#f4eded] p-4 sm:p-6 -mb-5'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <h2 className="text-lg sm:text-xl font-semibold pl-8">Select Payment Mode</h2>
        </div>
        </div>
    </div>
  )
}

export default PaymentSection