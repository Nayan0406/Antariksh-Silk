import React, { useState } from "react";
import { FaMinus, FaPlus, FaStar, FaRegCircle } from "react-icons/fa";
import { FiChevronRight, FiTruck, FiRefreshCw, FiEye } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";

const reviews = [
  { name: "Neha", rating: 4.5, text: "The colours are vibrant, and it fits beautifully." },
  { name: "Mansi", rating: 4.5, text: "Highly recommend this product. Worth every rupee spent!" },
  { name: "Meghna", rating: 4.5, text: "The product is good, but the packaging could have been better." },
  { name: "Pranav", rating: 4.5, text: "Lovely saree — great texture and finish." },
];

const SilkSareeDetail = () => {
  const [qty, setQty] = useState(1);
  const [activeAcc, setActiveAcc] = useState(0);

  return (
    <section className="max-w-full mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: Images + Accordions */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/home-product-img.png" alt="front" className="w-full object-fill h-105" />
            <img src="/silksaree-back.png" alt="back" className="w-full object-fill h-105" />
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={() => setActiveAcc(activeAcc === 0 ? -1 : 0)}
              className="w-full flex items-center justify-between bg-[#f1d7d8] rounded-lg px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <FiChevronRight className="text-xl text-[#6b1a1a]" />
                <span className="font-semibold">Product details</span>
              </div>
              <span>{activeAcc === 0 ? "-" : "+"}</span>
            </button>
            {activeAcc === 0 && (
              <div className="bg-white border rounded-lg p-4 text-sm text-gray-700">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Black Chanderi Handwoven Handloom Pure Silk Saree.</li>
                  <li>Category: Chanderi Pattu Silk Saree</li>
                  <li>
                    Description: Golden Zari Patela Border All Over Meenakari Buta Pattu Silk Saree.
                  </li>
                  <li>Material: Pure Chanderi silk</li>
                </ul>
              </div>
            )}

            <button
              onClick={() => setActiveAcc(activeAcc === 1 ? -1 : 1)}
              className="w-full flex items-center justify-between border rounded-lg px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <FiRefreshCw className="text-xl text-[#6b1a1a]" />
                <span className="font-semibold">Return & Refund</span>
              </div>
              <span>{activeAcc === 1 ? "-" : "+"}</span>
            </button>
            {activeAcc === 1 && (
              <div className="bg-white border rounded-lg p-4 text-sm text-gray-700">
                <p>7 day return policy. Product must be unused and tags intact.</p>
              </div>
            )}

            <button
              onClick={() => setActiveAcc(activeAcc === 2 ? -1 : 2)}
              className="w-full flex items-center justify-between border rounded-lg px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <FiTruck className="text-xl text-[#6b1a1a]" />
                <span className="font-semibold">Shipping Policy</span>
              </div>
              <span>{activeAcc === 2 ? "-" : "+"}</span>
            </button>
            {activeAcc === 2 && (
              <div className="bg-white border rounded-lg p-4 text-sm text-gray-700">
                <p>Standard shipping: 4-7 business days. Expedited available at checkout.</p>
              </div>
            )}

            <button
              onClick={() => setActiveAcc(activeAcc === 3 ? -1 : 3)}
              className="w-full flex items-center justify-between border rounded-lg px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <FiEye className="text-xl text-[#6b1a1a]" />
                <span className="font-semibold">Care</span>
              </div>
              <span>{activeAcc === 3 ? "-" : "+"}</span>
            </button>
            {activeAcc === 3 && (
              <div className="bg-white border rounded-lg p-4 text-sm text-gray-700">
                <p>Dry clean only. Avoid direct sunlight for long durations.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Product info */}
        <div className="space-y-6">
          <div className="flex items-center justify-between md:pt-10">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide md:pb-3">Visit our store!</p>
              <h1 className="text-3xl font-serif font-bold">Silk Saree</h1>
              <p className="text-sm text-gray-500 mt-1">known for best appearance in occasions like diwali.</p>
              <div className="flex items-center gap-2 text-xs pt-2">
                <li className="gap-1">Color: Red</li>
                <li>Material: Silk</li>
              </div>
            </div>
            <button className=" text-gray-500 hover:text-red-600">
              <FaRegHeart className="w-5 h-20" />
            </button>
          </div>

          <div className="-pt-10">
            <div>
              <div className="text-2xl font-normal -pt-20">Rs.6,000</div>
              <div><FaRegCircle className="w-5 h-5"/>
              Blue</div>
            </div>
          </div>
          <div className="flex items-center gap-3 border p-2 rounded-sm w-max">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                <FaMinus />
              </button>
              <div className="w-20 text-center">{qty} </div>
              <button
                onClick={() => setQty(q => q + 1)}
                className="w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                <FaPlus />
              </button>
            </div>

            
            <button className="ml-auto bg-[#5a0e0e] text-white px-6 py-2 rounded">Add to Cart</button>

          <div>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2 text-pink-400"><FaStar /> 4.5</div>
              <div className="text-xs text-gray-500">104 reviews</div>
            </div>

            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {reviews.map((r, i) => (
                <div key={i} className="min-w-[220px] bg-white border rounded-lg p-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-2"><FaStar className="text-pink-400" />{r.rating}</div>
                    <div>{r.name}</div>
                  </div>
                  <div className="text-sm text-gray-600">{r.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right bottom product details box */}
          <div className="bg-[#fbecec] p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Product details</h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Black Chanderi Handwoven Handloom Pure Silk Saree.</li>
              <li>Category: Chanderi Pattu Silk Saree</li>
              <li>Material: Pure Chanderi silk</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilkSareeDetail;