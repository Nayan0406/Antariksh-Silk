import React, { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 6000;
  const gst = 60;
  const platformFee = 40;
  const subtotal = price * quantity + gst + platformFee;

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
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold">
              2
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Address</p>
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

      {/* Left Section - Image */}
      {/* <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src="/silk-saree.png" // apni image ka path yaha daalna
          alt="Silk Saree"
          className="rounded-md object-cover h-[400px] w-[300px]"
        />
      </div> */}

      {/* Middle Section - Product Details */}
      {/* <div className="w-full lg:w-1/3">
        <h3 className="uppercase text-sm tracking-widest text-gray-500">
          Visit our store!
        </h3>
        <h2 className="text-3xl font-bold mt-2">Silk Saree</h2>
        <p className="text-gray-600 mt-1">
          known for best appearance in occasions like diwali.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          • Color: Yellow &nbsp;&nbsp;• Material: Silk
        </p>

        <p className="text-2xl font-semibold mt-4">Rs.{price.toLocaleString()}</p> */}

        {/* Color + Quantity */}
        {/* <div className="flex items-center gap-4 mt-4">
          <div>
            <label className="block text-gray-600 text-sm">Color</label>
            <select className="border border-gray-300 rounded-md px-3 py-2 mt-1">
              <option>Green</option>
              <option>Red</option>
              <option>Yellow</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 text-sm">Total Quantity</label>
            <div className="flex items-center border border-gray-300 rounded-md mt-1">
              <button
                className="px-3 py-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div> */}

        {/* Buttons */}
        {/* <div className="flex gap-4 mt-6">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md">
            Move to Wishlist
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md">
            Remove
          </button>
        </div> */}
      {/* </div> */}

      {/* Right Section - Price Details */}
      {/* <div className="w-full lg:w-1/3 border rounded-md p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Price Details</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Price ( {quantity} item )</span>
            <span>{(price * quantity).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="flex justify-between">
            <span>GST</span>
            <span>{gst}</span>
          </div>
          <div className="flex justify-between">
            <span>Platform fee</span>
            <span>{platformFee}</span>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between font-bold text-lg">
          <span>(Including all taxes) Subtotal</span>
          <span>Rs. {subtotal.toLocaleString()}</span>
        </div>
        <button className="w-full mt-6 bg-red-700 text-white py-3 rounded-md">
          Proceed to pay
        </button>
      </div> */}
    </div>
  );
};

export default AddToCart;
