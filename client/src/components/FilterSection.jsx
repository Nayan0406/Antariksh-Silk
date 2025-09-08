import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FaRegStar, FaHeart, FaFilter, FaTimes } from "react-icons/fa";

const FilterSection = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
            {/* Mobile Filter Toggle Button */}
            <div className="lg:hidden bg-white border-b p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Products</h2>
                <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 bg-[#340808] text-white px-4 py-2 rounded"
                >
                    <FaFilter size={14} />
                    Filters
                </button>
            </div>

            {/* Left Filter Section */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block fixed lg:relative inset-0 lg:inset-auto z-50 lg:z-auto lg:w-1/4 bg-[#340808] text-white overflow-y-auto`}>
                {/* Mobile Close Button */}
                <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-600">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button 
                        onClick={() => setShowFilters(false)}
                        className="text-white hover:text-gray-300"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                <div className="p-4 lg:p-6 space-y-6">
                    {/* Desktop Filter Title */}
                    <h2 className="hidden lg:block text-2xl font-bold mb-6">Filters</h2>

                    {/* Price Range */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                        <input type="range" min="1000" max="6100" className="w-full accent-[#ad2121]" />
                        <p className="text-red-400 mt-2">Rs. 6,100</p>
                    </div>

                    {/* Category */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Category</h3>
                        <ul className="space-y-2">
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Paithani Sarees</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Nauvari Sarees</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Shalu Sarees</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Narayan Peth Sarees</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Silk Sarees</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> All types</label></li>
                        </ul>
                    </div>

                    {/* Occasion */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Occasion</h3>
                        <ul className="space-y-2">
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Wedding</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Festival</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Party</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Office Wear</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Daily Wear</label></li>
                        </ul>
                    </div>

                    {/* Color */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Color</h3>
                        <ul className="space-y-2">
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Red</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Green</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Blue</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> White</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Multi-color</label></li>
                        </ul>
                    </div>

                    {/* Best Seller & New Arrivals */}
                    <div className="space-y-2">
                        <label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600 text-lg font-semibold" /> Best Seller</label>
                        <label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> New Arrivals</label>
                    </div>

                    {/* Offers */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Offers</h3>
                        <ul className="space-y-2">
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Flat % Off</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Clearance Sale</label></li>
                            <li><label className="flex items-center cursor-pointer"><input type="checkbox" className="mr-3 accent-red-600" /> Under 1000 / 1999</label></li>
                        </ul>
                    </div>

                    {/* Clear Filter Button */}
                    <button className="w-full bg-[#4d0606] py-3 rounded font-medium cursor-pointer
                    ">
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
            <div className="flex-1 lg:w-3/4 p-4 lg:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h2 className="text-xl lg:text-2xl font-bold">Sort by</h2>
                    <select className="w-full sm:w-auto border p-2 px-4 rounded-xl bg-[#870900] text-white min-w-[200px]">
                        <option>Latest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">

                    {/* Card 1 */}
                    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                        <div className="h-48 sm:h-52 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/irkal-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                <div className="text-[#ba7894] text-sm">
                                    <div className='flex items-center gap-2'>
                                        <FaRegStar /> 4.5
                                    </div>
                                </div>
                                <div className="text-sm text-black">104 reviews</div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Irkal Saree</h3>
                            <div className='flex items-start gap-2 mb-4'>
                                <span className="text-[#f44336] mt-1">
                                    <FaHeart size={14} />
                                </span>
                                <p className="text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                            </div>
                            <div className="mt-auto">
                                <Link to="/product">
                                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                        BUY NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                        <div className="h-48 sm:h-52 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/tussar-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                <div className="text-[#ba7894] text-sm">
                                    <div className='flex items-center gap-2'>
                                        <FaRegStar /> 4.5
                                    </div>
                                </div>
                                <div className="text-sm text-black">104 reviews</div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Tussar Silk</h3>
                            <div className='flex items-start gap-2 mb-4'>
                                <span className="text-[#f44336] mt-1">
                                    <FaHeart size={14} />
                                </span>
                                <p className="text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                            </div>
                            <div className="mt-auto">
                                <Link to="/product">
                                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                        BUY NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                        <div className="h-48 sm:h-52 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/solapur-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                <div className="text-[#ba7894] text-sm">
                                    <div className='flex items-center gap-2'>
                                        <FaRegStar /> 4.5
                                    </div>
                                </div>
                                <div className="text-sm text-black">104 reviews</div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Solapur Chaddar Saree</h3>
                            <div className='flex items-start gap-2 mb-4'>
                                <span className="text-[#f44336] mt-1">
                                    <FaHeart size={14} />
                                </span>
                                <p className="text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                            </div>
                            <div className="mt-auto">
                                <Link to="/product">
                                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                        BUY NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 4 */}
                    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                        <div className="h-48 sm:h-52 lg:h-60 xl:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/Kanjeevaram-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                                <div className="text-[#ba7894] text-sm">
                                    <div className='flex items-center gap-2'>
                                        <FaRegStar /> 4.5
                                    </div>
                                </div>
                                <div className="text-sm text-black">104 reviews</div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Kanjeevaram Saree</h3>
                            <div className='flex items-start gap-2 mb-4'>
                                <span className="text-[#f44336] mt-1">
                                    <FaHeart size={14} />
                                </span>
                                <p className="text-sm text-gray-600 flex-1">Lightweight and comfortable for daily wear.</p>
                            </div>
                            <div className="mt-auto">
                                <Link to="/product">
                                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer hover:bg-[#f2d6d9] transition-colors">
                                        BUY NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;

