import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaRegStar, FaHeart, FaTimes } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiArrowsDownUp } from "react-icons/pi";

const FilterSection = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [sortOption, setSortOption] = useState('Featured');

    return (
        <div className="w-full min-h-screen bg-white mb-10">
            {/* Header Section with Filters and Sort */}
            <div className="w-full bg-white p-3 sm:p-4 lg:p-6">
                {/* Mobile/Desktop unified header */}
                <div className="px-2 lg:px-10">
                    {/* Mobile header: compact row with Filter, Sort (Latest), and Search */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 bg-[#560b0b] text-white px-4 py-2 rounded-md"
                        >
                            <IoFilterOutline size={18} />
                            <span className="text-sm font-medium">Filter</span>
                        </button>

                        <button onClick={() => setShowSort(true)} className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 bg-white text-gray-900">
                            <PiArrowsDownUp size={18} className="text-[#8b0000]" />
                            <span className="text-sm font-medium">Sort by</span>
                        </button>

                        <div className="relative flex-1">
                            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full bg-white rounded-full px-10 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#8b0000]"
                            />
                            <HiOutlineMicrophone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        </div>
                    </div>

                    {/* Desktop / large screens header (unchanged) */}
                    <div className="hidden lg:flex items-center justify-between">
                        {/* Left - Filters */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2"
                            >
                                <IoFilterOutline size={30} className="text-gray-900 h-10" />
                                <span className="text-lg lg:text-3xl font-bold text-gray-900">Filters</span>
                            </button>
                        </div>

                        {/* Center - Sort by + Features dropdown */}
                        <div className="flex items-center gap-3 lg:gap-6">
                            <h3 className="text-lg lg:text-2xl font-bold text-gray-900 lg:ml-10">Sort by</h3>

                            {/* Features dropdown - pill style */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowSort(true)}
                                    className="flex items-center gap-3 border border-[#8B0000] text-[#8B0000] bg-white px-4 md:px-6 lg:px-10 py-2 md:py-2 lg:py-1.5 rounded-md text-sm md:text-sm lg:text-base font-medium uppercase md:w-[240px] lg:w-[200px]"
                                >
                                    <span className="text-sm md:text-sm lg:text-base justify-items-center">{sortOption}</span>
                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 8l4 4 4-4" stroke="#8B0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Dropdown panel for md+ (hidden on mobile) */}
                                {showSort && (
                                    <div
                                        onMouseLeave={() => setShowSort(false)}
                                        className="hidden md:block absolute left-0 mt-2 w-72 bg-[#340808] text-white rounded-md shadow-lg z-50 p-3 hide-scrollbar"
                                        style={{ maxHeight: '60vh', overflow: 'auto' }}
                                        role="menu"
                                        aria-label="Sort options"
                                    >
                                        <ul className="space-y-2">
                                            {['Featured', 'Price: Low to High', 'Price: High to Low', 'New Arrivals', 'Best Sellers', 'Customer Reviews', 'Discount'].map((opt) => (
                                                <li key={opt} className="flex items-center justify-between px-2 py-3 hover:bg-[#2b0707] rounded">
                                                    <button
                                                        onClick={() => { setSortOption(opt); setShowSort(false); }}
                                                        className="text-left w-full"
                                                        role="menuitem"
                                                    >
                                                        <span className="text-xl font-playfair">{opt}</span>
                                                    </button>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <input
                                                            type="radio"
                                                            name="sort-desktop"
                                                            value={opt}
                                                            checked={sortOption === opt}
                                                            onChange={() => { setSortOption(opt); setShowSort(false); }}
                                                            className="no-fill-radio"
                                                            aria-label={`Select ${opt}`}
                                                        />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right - Search */}
                        <div className="flex items-center relative min-w-[500px]">
                            <div className="relative w-full max-w-[900px]">
                                <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" size={22} />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-white border border-gray-300 rounded-full px-12 py-3 text-base lg:text-lg focus:outline-none focus:ring-1 focus:ring-[#8b0000]"
                                />

                                <HiOutlineMicrophone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile bottom-sheet for Sort options */}
            {showSort && (
                <div className="fixed inset-0 z-20 flex items-end lg:hidden">
                    {/* backdrop */}
                    <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setShowSort(false)} />

                    {/* sheet */}
                        <div className="relative w-full max-w-xl mx-auto mb-6 rounded-t-lg bg-[#340808] text-white p-4 shadow-lg transform transition-transform duration-300" style={{ height: '40vh', maxHeight: '40vh', marginBottom: '12px' }}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Sort by</h3>
                            <button onClick={() => setShowSort(false)} className="text-white text-xl">×</button>
                        </div>
                        <div className="border-t border-gray-700 mt-3 pt-3 space-y-3 overflow-auto">
                            {['Featured', 'Price: Low to High', 'Price: High to Low', 'New Arrivals', 'Best Sellers', 'Customer Reviews', 'Discount'].map((opt) => (
                                <label key={opt} className="flex items-center justify-between cursor-pointer">
                                    <span className="text-base">{opt}</span>
                                    <input type="radio" name="sort" value={opt} checked={sortOption === opt} onChange={() => setSortOption(opt)} className="no-fill-radio" />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col lg:flex-row px-4 lg:px-10">
                {/* Mobile bottom-sheet filter (half-height) */}
                {showFilters && (
                    <div className="lg:hidden fixed inset-0 z-50 flex items-end">
                        {/* backdrop */}
                        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowFilters(false)} />

                        {/* sheet - stop at header height so it aligns with filter button (calc) */}
                        <div className="relative w-full bg-[#340808] text-white rounded-t-xl p-6 shadow-xl overflow-y-auto transform transition-transform duration-300 translate-y-0" style={{ height: 'calc(100vh - 52px)', maxHeight: 'calc(100vh - 52px)' }}>
                            {/* Mobile Close Button */}
                            <div className="flex justify-between items-center pb-3 border-b border-gray-600 mb-4">
                                <h2 className="text-lg font-bold">Filters</h2>
                                <button
                                    onClick={() => setShowFilters(false)}
                                    className="text-white hover:text-gray-300"
                                >
                                    <FaTimes size={18} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                        {/* Price Range */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white font-playfair">Price Range</h3>
                                            <input type="range" min="1000" max="6100" className="w-full accent-red-600" />
                                            <p className="text-red-400 mt-2 text-base font-medium">Rs. 6,100</p>
                                        </div>

                                        {/* Category (3 columns) */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white">Category</h3>
                                            <ul className="grid grid-cols-3 gap-3">
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Paithani Sarees</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Nauvari Sarees</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Shalu Sarees</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Narayan Peth Sarees</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Silk Sarees</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> All types</label></li>
                                            </ul>
                                        </div>

                                        {/* Occasion (3 columns) */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white">Occasion</h3>
                                            <ul className="grid grid-cols-3 gap-3">
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Wedding</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Festival</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Party</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Office Wear</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Daily Wear</label></li>
                                            </ul>
                                        </div>

                                        {/* Color (3 columns) */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white">Color</h3>
                                            <ul className="grid grid-cols-3 gap-3">
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Red</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Green</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Blue</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> White</label></li>
                                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Multi-color</label></li>
                                            </ul>
                                        </div>

                                {/* Best Seller & New Arrivals */}
                                <div className="space-y-3">
                                    <label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Best Seller</label>
                                    <label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> New Arrivals</label>
                                </div>

                                {/* Offers */}
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Offers</h3>
                                    <ul className="space-y-3">
                                        <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Flat % Off</label></li>
                                        <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Clearance Sale</label></li>
                                        <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Under 1000 / 1999</label></li>
                                    </ul>
                                </div>

                                {/* Clear Filter Button */}
                                <button className="w-full bg-red-700 py-3 rounded hover:bg-red-800 transition-colors font-medium text-base">
                                    Clear Filter
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop left sidebar (lg and up) */}
                <div className="hidden lg:block lg:relative lg:w-1/4 bg-[#340808] text-white overflow-y-auto">
                    {/* Desktop Filters content (same markup as mobile sheet content) */}
                    <div className="p-6 space-y-6">
                        {/* Price Range */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white font-playfair">Price Range</h3>
                            <input type="range" min="1000" max="6100" className="w-full accent-red-600" />
                            <p className="text-red-400 mt-2 text-base font-medium">Rs. 6,100</p>
                        </div>

                        {/* Category */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Category</h3>
                            <ul className="space-y-3">
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Paithani Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Nauvari Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Shalu Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Narayan Peth Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Silk Sarees</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> All types</label></li>
                            </ul>
                        </div>

                        {/* Occasion */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Occasion</h3>
                            <ul className="space-y-3">
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Wedding</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Festival</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Party</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Office Wear</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Daily Wear</label></li>
                            </ul>
                        </div>

                        {/* Color */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Color</h3>
                            <ul className="space-y-3">
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Red</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Green</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Blue</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> White</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Multi-color</label></li>
                            </ul>
                        </div>

                        {/* Best Seller & New Arrivals */}
                        <div className="space-y-3">
                            <label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Best Seller</label>
                            <label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> New Arrivals</label>
                        </div>

                        {/* Offers */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Offers</h3>
                            <ul className="space-y-3">
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Flat % Off</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Clearance Sale</label></li>
                                <li><label className="flex items-center cursor-pointer text-base"><input type="checkbox" className="mr-3 bg-transparent border-white border-2 accent-white w-4 h-4" /> Under 1000 / 1999</label></li>
                            </ul>
                        </div>

                        {/* Clear Filter Button */}
                        <button className="w-full bg-red-700 py-3 rounded hover:bg-red-800 transition-colors font-medium text-base">
                            Clear Filter
                        </button>
                    </div>
                </div>

                {/* Right Product Section */}
                <div className="flex-1 lg:w-3/4 p-3 sm:p-4 lg:p-6 lg:-mt-6">
                    {/* Product Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">

                        {/* Card 1 */}
                        <article className="bg-white rounded-lg lg:rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-42 sm:h-64 lg:h-72 xl:h-90 bg-cover bg-center" style={{ backgroundImage: "url('/irkal-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
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
                            <div className="h-42 sm:h-64 lg:h-72 xl:h-90 bg-cover bg-center" style={{ backgroundImage: "url('/tussar-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
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
                            <div className="h-42 sm:h-64 lg:h-72 xl:h-90 bg-cover bg-center" style={{ backgroundImage: "url('/solapur-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
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
                            <div className="h-42 sm:h-64 lg:h-82 xl:h-90 bg-cover bg-center" style={{ backgroundImage: "url('/Kanjeevaram-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
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

                        {/* Card 5 */}
                        <article className="bg-white rounded-lg lg:rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-42 sm:h-64 lg:h-82 xl:h-90 bg-cover bg-center" style={{ backgroundImage: "url('/Kanjeevaram-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
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

                        {/* Card 6 */}
                        <article className="bg-white rounded-lg lg:rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-42 sm:h-64 lg:h-82 xl:h-90 bg-cover bg-center" style={{ backgroundImage: "url('/Kanjeevaram-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover' }} />
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