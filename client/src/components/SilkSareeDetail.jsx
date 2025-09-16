import React, { useState, useEffect, useRef } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegStar, FaChevronRight, FaInfoCircle, FaUndo, FaTruck, FaEye, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuUndo2 } from "react-icons/lu";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const SilkSareeDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const colors = [
    { name: "Blue", color: "#4285f4" },
    { name: "Yellow", color: "#ffc107" },
    { name: "Green", color: "#0f7b0f" },
    { name: "Red", color: "#dc3545" }
  ];
  const [selectedColor, setSelectedColor] = useState("Red");
  const [liked, setLiked] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState("Product details");
  // Image mapping for different colors (declare before using)
  const colorImages = {
    "Blue": {
      front: "/bluesilksaree-front.png",
      back: "/bluesilksaree-back.png"
    },
    "Yellow": {
      front: "/yellowsilksaree-front.png",
      back: "/yellowsilksaree-back.png"
    },
    "Green": {
      front: "/greensilksaree-front.png",
      back: "/greensilksaree-back.png"
    },
    "Red": {
      front: "/silk-saree.png",
      back: "/silksaree-back.png"
    }
  };

  // main image shown on mobile (syncs to selected color)
  const [selectedImage, setSelectedImage] = useState(colorImages[selectedColor]?.front || "/silk-saree.png");

  // mobile thumbnails gallery (swappable)
  const [mobileGallery, setMobileGallery] = useState([
  colorImages[selectedColor]?.front || "/silk-saree.png",
  colorImages[selectedColor]?.back || "/silksaree-back.png",
    "/product-1-img.jpg",
    "/product-2-img.png",
    "/product-3-img.png",
    "/product-4-img.png",
  ]);

  const thumbRef = useRef(null);
  const scrollAmount = 88; // pixels per arrow press
  const scrollUp = () => {
    if (thumbRef.current) thumbRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
  };
  const scrollDown = () => {
    if (thumbRef.current) thumbRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  };

  // desktop scroller ref for the main horizontal gallery
  const desktopScrollerRef = useRef(null);

  // mobile scroller ref for mobile horizontal gallery
  const mobileScrollerRef = useRef(null);

  const scrollDesktopNext = () => {
    const el = desktopScrollerRef.current;
    if (!el) return;
    // scroll by the scroller's clientWidth (one 'page')
    el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
  };

  const scrollDesktopPrev = () => {
    const el = desktopScrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    // reset main image and mobile gallery when color changes
    setSelectedImage(colorImages[selectedColor]?.front || "/silk-saree.png");
    setMobileGallery([
  colorImages[selectedColor]?.front || "/silk-saree.png",
  colorImages[selectedColor]?.back || "/silksaree-back.png",
      "/product-1-img.jpg",
      "/product-2-img.png",
      "/product-3-img.png",
      "/product-4-img.png",
    ]);
  }, [selectedColor]);

  const productDetails = {
    "Product details": {
      title: "Product details",
      content: [
        "Black Chanderi Handwoven Handloom Pure Silk Saree.",
        "Category :- *Chanderi Pattu Silk Saree*",
        "*Description* :- Golden Zari Patela Border All Over Meenakari Buta Pattu Silk Saree.",
        "Material :- In Length (Warp) _ *Silk*",
        "In Width (Weft) _ *Punaresham* (Raw)",
        "Material     Pure Chanderi silk"
      ]
    },
    "Return & Refund": {
      title: "Return & Refund",
      content: [
        "We want you to love your saree! If you're not fully satisfied, you can request a return within 7 days of delivery.",
        "Return within 3 days of delivery",
        "Sarees must be unused, unwashed, unaltered, and with original tags/packaging.",
        "Customized/stitched sarees and sale items are not eligible for return.",
        "For wrong or damaged products, we'll arrange a replacement or full refund.",
        "Refunds will be processed to your original payment method within 7-10 business days after inspection.",
        "Shipping charges are non-refundable (unless the product is defective or wrong)."
      ]
    },
    "Shipping Policy": {
      title: "Shipping Policy", 
      content: [
        "Free shipping on orders above Rs. 2,000",
        "Standard delivery: 5-7 business days",
        "Express delivery: 2-3 business days (additional charges apply)",
        "Cash on delivery available",
        "International shipping available to select countries"
      ]
    },
    "Care": {
      title: "Care",
      content: [
        "Dry clean only for best results",
        "Store in a cool, dry place",
        "Avoid direct sunlight when storing",
        "Iron on low heat with a cloth barrier",
        "Handle with care to maintain fabric quality"
      ]
    }
  };

  const reviews = [
    {
      name: "Neha",
      rating: 4.5,
      text: "The colors are vibrant, and it fits beautifully. Got so many compliments!",
      totalReviews: "104 REVIEWS"
    },
    {
      name: "Mansi", 
      rating: 4.5,
      text: "Highly recommend this product. Worth every rupee spent!",
      totalReviews: "104 REVIEWS"
    },
    {
      name: "Meghna",
      rating: 4.5,
      text: "The product is good, but the packaging could have been better.",
      totalReviews: "104 REVIEWS"
    },
    {
      name: "Prachi",
      rating: 4,
      text: "Overall satisfied with the saree. Great quality.",
      totalReviews: "104 REVIEWS"
    },
  ];

  return (
    <div className="max-w-full min-h-screen bg-white mt-4 sm:mt-6 lg:mt-10">
  <div className="flex flex-col lg:flex-row ml-2 sm:ml-4 lg:ml-6">
        {/* Product Images - desktop: horizontal scroller showing 2 images per view; mobile: first image + vertical thumbnails on right */}

        {/* Desktop / Tablet: horizontal scroller (kept as before) */}
        <div className="hidden lg:block w-full lg:w-1/2 relative">
          <div className="overflow-x-auto hide-scrollbar" ref={desktopScrollerRef}>
            <div className="flex gap-2 sm:gap-3 lg:gap-4 snap-x snap-mandatory">
              {
                [
                  colorImages[selectedColor]?.front || "/silk-saree.png",
                  colorImages[selectedColor]?.back || "/silksaree-back.png",
                  "/product-1-img.jpg",
                  "/product-2-img.png",
                  "/product-3-img.png",
                  "/product-4-img.png",
                ].map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-1/2">
                    <img
                      src={src}
                      alt={`saree-${idx}`}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover transition-all duration-300"
                    />
                  </div>
                ))
              }
            </div>
          </div>
          {/* Right arrow overlay - desktop only */}
          <button
            onClick={scrollDesktopNext}
            aria-label="Next images"
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md border border-gray-200 absolute right-4 top-1/2 -translate-y-1/2 z-20 lg:-mt-15"
          >
            <IoIosArrowForward className="text-black"/>
          </button>
          {/* Left arrow overlay - desktop only */}
          <button
            onClick={scrollDesktopPrev}
            aria-label="Previous images"
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md border border-gray-200 absolute left-4 top-1/2 -translate-y-1/2 z-20 lg:-mt-15"
          >
            <IoIosArrowBack className="text-black"/>
          </button>
        </div>

        {/* Mobile: horizontal scroller matching desktop behavior */}
        <div className="block lg:hidden w-full lg:w-1/2 relative">
          {/* mobile scroller */}
          <div className="overflow-x-auto hide-scrollbar px-3" ref={mobileScrollerRef}>
            <div className="flex gap-2 snap-x snap-mandatory">
              {
                [
                  colorImages[selectedColor]?.front || "/silk-saree.png",
                  colorImages[selectedColor]?.back || "/silksaree-back.png",
                  "/product-1-img.jpg",
                  "/product-2-img.png",
                  "/product-3-img.png",
                  "/product-4-img.png",
                ].map((src, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(src)}
                    className="flex-shrink-0 w-1/2 overflow-hidden snap-start"
                  >
                    <img
                      src={src}
                      alt={`saree-mobile-${idx}`}
                      className="w-full h-[320px] sm:h-[360px] object-cover"
                    />
                  </button>
                ))
              }
            </div>
          </div>
          {/* mobile left/right arrows */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-50">
            <button onClick={() => { const el = mobileScrollerRef.current; if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' }); }} className="flex lg:hidden items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-md border border-gray-200">
              <IoIosArrowBack className="text-gray-700" />
            </button>
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-50">
            <button onClick={() => { const el = mobileScrollerRef.current; if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' }); }} className="flex lg:hidden items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-md border border-gray-200">
              <IoIosArrowForward className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-3 sm:p-4 lg:p-6 xl:p-12">
          <h3 className="uppercase text-xs tracking-[0.2em] text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-start lg:text-left mt-4 lg:-mt-4">
            VISIT OUR STORE!
          </h3>
          
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center lg:text-left">Silk Saree</h1>
            <button
              aria-pressed={liked}
              onClick={() => setLiked((v) => !v)}
              className="p-1 sm:p-2 cursor-pointer"
              title={liked ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              {liked ? (
                <FaHeart className="text-red-600" size={20} />
              ) : (
                <FaRegHeart className="text-gray-400" size={20} />
              )}
            </button>
          </div>

          <p className="text-gray-600 mb-2 text-xs sm:text-sm">
            known for best appearance in occasions like diwali.
          </p>
          
          <div className="flex items-center gap-2 sm:gap-4 text-xs text-gray-500 mb-4 sm:mb-6">
            <span>• Color: {selectedColor}</span>
            <span>• Material: Silk</span>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:-mt-5">Rs.6,000</p>

          {/* Colors */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            {colors.map((c) => (
              <div key={c.name} className="flex flex-col items-center">
                <div
                  onClick={() => setSelectedColor(c.name)}
      className={`w-10 h-10 sm:w-10 sm:h-10 rounded-full border-2 cursor-pointer ${
                    selectedColor === c.name ? "border-gray-400" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.color }}
                ></div>
                <span className="text-xs text-gray-600 mt-1">{c.name}</span>
              </div>
            ))}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex flex-row flex-wrap items-center gap-4 sm:gap-4 mb-8 sm:mb-12">
            <div className="flex items-center border border-gray-300 rounded-md py-1.5 lg:w-[35%] w-[45%]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-6 h-6 flex items-start justify-start text-lg font-extrabold text-red-600 ml-3 -mt-2"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center py-0 text-lg font-medium ">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-6 h-6 flex items-end justify-end text-lg font-extrabold text-red-600 mr-3"
                  >
                    +
                  </button>
                </div>
            
            <Link to="/addtocart">
              <button className="bg-red-900 text-white px-13 sm:px-8 lg:px-20 py-3 sm:py-2.5 text-xs sm:text-sm font-medium w-auto cursor-pointer rounded-md">
                Add to Cart
              </button>
            </Link>
          </div>

          {/* Product Reviews */}
          <div className="lg:-mt-10">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Product Reviews</h3>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto -mt-2 hide-scrollbar pb-2">
              {reviews.map((review, index) => (
                <article key={index} className="snap-center flex-shrink-0 w-60 sm:w-68 md:w-70 bg-white rounded-xl border-[#c2c2c2] border-1 overflow-hidden flex flex-col">
                  <div className="p-3 sm:p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                      <div className="text-[#ba7894] text-xs sm:text-sm">
                        <div className='flex items-center gap-1 sm:gap-2'>
                          <FaRegStar size={12} /> {review.rating}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-black">104 reviews</div>
                    </div>
                    <h3 className="text-sm sm:text-lg font-semibold text-[#2b1d20] mb-2">{review.name}</h3>
                    <div className='flex items-start gap-2'>
                      <span className="text-[#f44336] mt-1">
                        <FaHeart size={12}/>
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">{review.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Product Details and Description */}
      <div className="flex flex-col lg:flex-row -mt-3 sm:-mt-4 lg:-mt-5 px-3 sm:px-4 lg:px-6">
        {/* Desktop: two-column details (unchanged) */}
        <div className="hidden lg:block w-1/2 pr-0">
          <div className="space-y-3 sm:space-y-4 max-h-72 sm:max-h-96 lg:max-h-[420px] overflow-y-auto pr-2">
            {Object.keys(productDetails).map((key) => {
              const detail = productDetails[key];
              const getIcon = (title, isSelected) => {
                const iconColor = isSelected ? "text-white" : "text-black";
                const iconSize = window.innerWidth < 640 ? 16 : 20;
                switch(title) {
                  case "Product details": return <AiOutlineInfoCircle className={iconColor} size={iconSize} />;
                  case "Return & Refund": return <LuUndo2 className={`${iconColor} scale-y-[-1]`} size={iconSize} />;
                  case "Shipping Policy": return <FaTruck className={iconColor} size={iconSize} />;
                  case "Care": return <FaEye className={iconColor} size={iconSize} />;
                  default: return <AiOutlineInfoCircle className={iconColor} size={iconSize} />;
                }
              };

              return (
                <div 
                  key={key}
                  onClick={() => setSelectedDetail(key)}
                  className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedDetail === key 
                      ? 'bg-[#550000] text-white border-[#550000]' 
                      : 'bg-[#fffbfb] text-gray-700 border-[#550000]'
                  }`} 
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    {getIcon(detail.title, selectedDetail === key)}
                    <span className="font-medium text-sm sm:text-base">{detail.title}</span>
                  </div>
                  <FaChevronRight 
                    className={`transition-transform ${
                      selectedDetail === key ? 'text-white' : 'text-gray-400'
                    }`} 
                    size={14} 
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block w-1/2 mt-6 sm:mt-8 lg:mt-0 lg:pl-6">
          <div className="bg-[#fff0f0] p-4 sm:p-6 rounded-lg border-0 max-h-72 sm:max-h-96 lg:max-h-[420px] overflow-y-auto pr-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              {productDetails[selectedDetail].title}
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {productDetails[selectedDetail].content.map((item, index) => {
                const isReturnFirst = selectedDetail === "Return & Refund" && index === 0;
                return (
                  <div key={index} className={isReturnFirst ? "mb-2" : "flex items-start gap-2"}>
                    {!isReturnFirst && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#000000] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    )}
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: accordion view for product details */}
        <div className="block lg:hidden w-full mt-4">
          <div className="space-y-3">
            {Object.keys(productDetails).map((key, idx) => {
              const detail = productDetails[key];
              const isOpen = selectedDetail === key;
              // local getIcon reused
              const getIcon = (title, active) => {
                const iconColorClass = active ? 'text-white' : 'text-[#550000]';
                const iconSize = 18;
                switch(title) {
                  case "Product details": return <AiOutlineInfoCircle className={iconColorClass} size={iconSize} />;
                  case "Return & Refund": return <LuUndo2 className={`${iconColorClass} scale-y-[-1]`} size={iconSize} />;
                  case "Shipping Policy": return <FaTruck className={iconColorClass} size={iconSize} />;
                  case "Care": return <FaEye className={iconColorClass} size={iconSize} />;
                  default: return <AiOutlineInfoCircle className={iconColorClass} size={iconSize} />;
                }
              };

              const panelId = `detail-panel-${idx}`;
              const headerId = `detail-header-${idx}`;

              return (
                <div key={key} className="overflow-hidden">
                  <button
                    id={headerId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setSelectedDetail(isOpen ? "" : key)}
                    className={`w-full flex items-center justify-between p-4 ${isOpen ? 'bg-[#550000] text-white' : 'bg-white border border-[#550000]'} rounded-md`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${isOpen ? 'bg-white/0' : ''} p-0`}>{getIcon(detail.title, isOpen)}</div>
                      <span className={`font-medium text-sm ${isOpen ? 'text-white' : 'text-[#2b1d20]'}`}>{detail.title}</span>
                    </div>
                    <div className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}>
                      <FaChevronRight className={`${isOpen ? 'text-white' : 'text-[#550000]'}`} />
                    </div>
                  </button>
                  <div id={panelId} role="region" aria-labelledby={headerId} className={`${isOpen ? 'block' : 'hidden'} p-4 bg-[#fff0f0]`}> 
                    <div className="space-y-2">
                      {detail.content.map((item, i) => (
                        <p key={i} className="text-sm text-gray-700">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SilkSareeDetail;
