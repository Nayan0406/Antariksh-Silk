import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaRegStar, FaHeart, FaFilter, FaTimes } from "react-icons/fa";

const FilterSection = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Header Section with Filters and Sort */}
            <div className="w-full bg-white border-b p-3 sm:p-4 lg:p-6">
                {/* Desktop Header */}
                <div className="hidden lg:flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Filters</h2>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Sort by</h3>
                        <select className="border-none bg-[#8B0000] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-medium cursor-pointer">
                            <option>LATEST</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Most Popular</option>
                        </select>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="lg:hidden">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Products</h2>
                        <button 
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 bg-[#340808] text-white px-3 py-2 rounded text-sm"
                        >
                            <FaFilter size={12} />
                            Filters
                        </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Sort by</h3>
                        <select className="border-none bg-[#8B0000] text-white px-3 py-2 rounded-md text-xs sm:text-sm font-medium cursor-pointer">
                            <option>LATEST</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Most Popular</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row">
                {/* Left Filter Section */}
                <div className={`${showFilters ? 'block' : 'hidden'} lg:block fixed lg:relative inset-0 lg:inset-auto z-50 lg:z-auto lg:w-1/4 bg-[#340808] text-white overflow-y-auto`}>
                    {/* Mobile Close Button */}
                    <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-600">
                        <h2 className="text-lg font-bold">Filters</h2>
                        <button 
                            onClick={() => setShowFilters(false)}
                            className="text-white hover:text-gray-300"
                        >
                            <FaTimes size={18} />
                        </button>
                    </div>

                    <div className="p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6">
                        {/* Price Range */}
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Price Range</h3>
                            <input type="range" min="1000" max="6100" className="w-full accent-red-600" />
                            <p className="text-red-400 mt-1 lg:mt-2 text-sm lg:text-base">Rs. 6,100</p>
                        </div>

                        {/* Category */}
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Category</h3>
                            <ul className="space-y-1 lg:space-y-2">
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Paithani Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Nauvari Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Shalu Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Narayan Peth Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Silk Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> All types</label></li>
                            </ul>
                        </div>

                        {/* Occasion */}
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Occasion</h3>
                            <ul className="space-y-1 lg:space-y-2">
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Wedding</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Festival</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Party</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Office Wear</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Daily Wear</label></li>
                            </ul>
                        </div>

                        {/* Color */}
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Color</h3>
                            <ul className="space-y-1 lg:space-y-2">
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Red</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Green</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Blue</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> White</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Multi-color</label></li>
                            </ul>
                        </div>

                        {/* Best Seller & New Arrivals */}
                        <div className="space-y-1 lg:space-y-2">
                            <label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Best Seller</label>
                            <label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> New Arrivals</label>
                        </div>

                        {/* Offers */}
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Offers</h3>
                            <ul className="space-y-1 lg:space-y-2">
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Flat % Off</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Clearance Sale</label></li>
                                <li><label className="flex items-center cursor-pointer text-sm lg:text-base"><input type="checkbox" className="mr-2 lg:mr-3 accent-red-600" /> Under 1000 / 1999</label></li>
                            </ul>
                        </div>

                        {/* Clear Filter Button */}
                        <button className="w-full bg-red-700 py-2 lg:py-3 rounded hover:bg-red-800 transition-colors font-medium text-sm lg:text-base">
                            Clear Filter
                        </button>
                    </div>
                </div>

                {/* Overlay for mobile when filters are open */}
                {showFilters && (
                    <div 
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setShowFilters(false)}
                    ></div>
                )}

                {/* Right Product Section */}
                <div className="flex-1 lg:w-3/4 p-3 sm:p-4 lg:p-6">
                    {/* Product Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">

                        {/* Card 1 */}
                        <article className="bg-white rounded-lg lg:rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-40 sm:h-48 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/irkal-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                            <div className="p-3 sm:p-4 flex flex-col flex-1">
                                <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                    <div className="text-[#ba7894] text-xs sm:text-sm">
                                        <div className='flex items-center gap-1 sm:gap-2'>
                                            <FaRegStar size={12} className="sm:w-4 sm:h-4" /> 4.5
                                        </div>
                                    </div>
                                    <div className="text-xs sm:text-sm text-black">104 reviews</div>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#2b1d20] mb-2">Irkal Saree</h3>
                                <div className='flex items-start gap-2 mb-3 sm:mb-4'>
                                    <span className="text-[#f44336] mt-1">
                                        <FaHeart size={12} className="sm:w-4 sm:h-4" />
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                                </div>
                                <div className="mt-auto">
                                    <Link to="/product">
                                        <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-xs sm:text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                            BUY NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article className="bg-white rounded-lg lg:rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-40 sm:h-48 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/tussar-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                            <div className="p-3 sm:p-4 flex flex-col flex-1">
                                <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                    <div className="text-[#ba7894] text-xs sm:text-sm">
                                        <div className='flex items-center gap-1 sm:gap-2'>
                                            <FaRegStar size={12} className="sm:w-4 sm:h-4" /> 4.5
                                        </div>
                                    </div>
                                    <div className="text-xs sm:text-sm text-black">104 reviews</div>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#2b1d20] mb-2">Tussar Silk</h3>
                                <div className='flex items-start gap-2 mb-3 sm:mb-4'>
                                    <span className="text-[#f44336] mt-1">
                                        <FaHeart size={12} className="sm:w-4 sm:h-4" />
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                                </div>
                                <div className="mt-auto">
                                    <Link to="/product">
                                        <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-xs sm:text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                            BUY NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Card 3 */}
                        <article className="bg-white rounded-lg lg:rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-40 sm:h-48 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/solapur-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                            <div className="p-3 sm:p-4 flex flex-col flex-1">
                                <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                    <div className="text-[#ba7894] text-xs sm:text-sm">
                                        <div className='flex items-center gap-1 sm:gap-2'>
                                            <FaRegStar size={12} className="sm:w-4 sm:h-4" /> 4.5
                                        </div>
                                    </div>
                                    <div className="text-xs sm:text-sm text-black">104 reviews</div>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#2b1d20] mb-2">Solapur Chaddar Saree</h3>
                                <div className='flex items-start gap-2 mb-3 sm:mb-4'>
                                    <span className="text-[#f44336] mt-1">
                                        <FaHeart size={12} className="sm:w-4 sm:h-4" />
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                                </div>
                                <div className="mt-auto">
                                    <Link to="/product">
                                        <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-xs sm:text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                            BUY NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Card 4 */}
                        <article className="bg-white rounded-lg lg:rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-40 sm:h-48 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/Kanjeevaram-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                            <div className="p-3 sm:p-4 flex flex-col flex-1">
                                <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                    <div className="text-[#ba7894] text-xs sm:text-sm">
                                        <div className='flex items-center gap-1 sm:gap-2'>
                                            <FaRegStar size={12} className="sm:w-4 sm:h-4" /> 4.5
                                        </div>
                                    </div>
                                    <div className="text-xs sm:text-sm text-black">104 reviews</div>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#2b1d20] mb-2">Kanjeevaram Saree</h3>
                                <div className='flex items-start gap-2 mb-3 sm:mb-4'>
                                    <span className="text-[#f44336] mt-1">
                                        <FaHeart size={12} className="sm:w-4 sm:h-4" />
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                                </div>
                                <div className="mt-auto">
                                    <Link to="/product">
                                        <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-xs sm:text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                            BUY NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection