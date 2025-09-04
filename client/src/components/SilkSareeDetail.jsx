import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SilkSareeDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const colors = ["blue", "yellow", "green", "red"];
  const [selectedColor, setSelectedColor] = useState("green");
  const [liked, setLiked] = useState(false);

  const reviews = [
    {
      name: "Neha",
      rating: 4.5,
      text: "The colors are vibrant, and it fits beautifully. Got so many compliments!",
    },
    {
      name: "Mansi",
      rating: 4.5,
      text: "Highly recommend this product. Worth every rupee spent!",
    },
    {
      name: "Meghna",
      rating: 4.5,
      text: "The product is good, but the packaging could have been better.",
    },
    {
      name: "Prachi",
      rating: 4,
      text: "Overall satisfied with the saree. Great quality.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white p-8">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Images */}
        <div className="flex gap-6 w-full lg:w-1/2 justify-center">
          <img
            src="/silk-saree.png" // apna image path replace karo
            alt="Saree Front"
            className="w-[280px] h-[400px] object-cover rounded-md"
          />
          <img
            src="/silksaree-back.png" // apna image path replace karo
            alt="Saree Back"
            className="w-[280px] h-[400px] object-cover rounded-md"
          />
        </div>

        {/* Product Details + Reviews */}
        <div className="w-full lg:w-1/2">
          <h3 className="uppercase text-sm tracking-widest text-gray-500">
            Visit our store!
          </h3>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold mt-2">Silk Saree</h2>
            <button
              aria-pressed={liked}
              onClick={() => setLiked((v) => !v)}
              className="p-1 cursor-pointer"
              title={liked ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              {liked ? (
                <FaHeart className="text-red-600" size={20} />
              ) : (
                <FaRegHeart className="text-gray-500" size={20} />
              )}
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            known for best appearance in occasions like diwali.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            • Color: Green &nbsp;&nbsp;• Material: Silk
          </p>

          <p className="text-2xl font-semibold mt-4">Rs.6,000</p>

          {/* Colors */}
          <div className="flex gap-4 mt-4">
            {colors.map((c) => (
              <div
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`w-10 h-10 rounded-full border-2 cursor-pointer ${
                  selectedColor === c ? "border-black" : "border-transparent"
                }`}
                style={{ backgroundColor: c }}
              ></div>
            ))}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-md">
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
            <Link to="/addtocart">
              <button className="bg-red-700 text-white px-8 py-3 rounded-md cursor-pointer">
                Add to Cart
              </button>
            </Link>
          </div>

          {/* Reviews */}
          {/* <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Product Reviews</h3>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-[220px] border rounded-lg p-4 shadow-sm"
                >
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-yellow-500">⭐ {review.rating}</p>
                  <p className="text-sm text-gray-600 mt-2">{review.text}</p>
                  <p className="text-xs text-gray-500 mt-2">104 reviews</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SilkSareeDetail;
