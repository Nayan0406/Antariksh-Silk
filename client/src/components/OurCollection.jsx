import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar, FaHeart } from "react-icons/fa";



const items = [
  {
    img: '/irkal-saree.png',
    title: 'Irkal Saree',
    reviews: 104,
    rating: 4.5,
    desc: 'Lightweight and comfortable for daily wear.'
  },
  {
    img: '/silk-saree.png',
    title: 'Silk Saree',
    reviews: 104,
    rating: 4.5,
    desc: 'Known for best appearance in occasions like diwali.'
  },
  {
    img: '/tussar-saree.png',
    title: 'Tussar Silk',
    reviews: 104,
    rating: 4.5,
    desc: 'Simple, elegant, and ideal for formal occasions.'
  },
  {
    img: '/solapur-saree.png',
    title: 'Solapur Chaddar',
    reviews: 104,
    rating: 4.5,
    desc: 'Strong, durable cotton patterns.'
  },
  {
    img: '/Kanjeevaram-saree.png',
    title: 'Kanjeevaram',
    reviews: 98,
    rating: 4.6,
    desc: 'Rich handwoven silk with vibrant borders.'
  }
]

const OurCollection = () => {
  const ref = useRef(null)

  const scroll = (dir = 'right') => {
    const el = ref.current
    if (!el) return
    const distance = Math.floor(el.clientWidth * 0.7)
    el.scrollBy({ left: dir === 'right' ? distance : -distance, behavior: 'smooth' })
  }

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-[#ecd5d5] md:rounded-tl-[10rem] lg:rounded-tl-[10rem] xl:rounded-tl-[15rem]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 lg:-mt-10">
          <p className="text-xs sm:text-sm text-pink-400 uppercase tracking-wider mb-2">Our Collection</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-prata font-bold text-[#3b2a2f] mb-3 sm:mb-4">Recommended</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
          </p>
        </div>

        <div className="relative">
          {/* Add scrollbar hide styles */}
          <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}`}</style>
          
          <div className="overflow-x-auto hide-scrollbar py-2 sm:py-4">
            <div className="flex gap-4 sm:gap-6 md:gap-6 lg:gap-12 lg:ml-4 items-stretch snap-x snap-mandatory px-2 sm:px-0">
              {items.map((item, index) => (
                <article 
                  key={index}
                  // On mobile make each card take half the viewport so 2 are visible in a row
                  className="snap-center flex-shrink-0 w-1/2 sm:w-72 md:w-80 lg:w-72 xl:w-80 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  <div 
                    className="h-50 sm:h-56 md:h-64 lg:h-60 xl:h-90 bg-cover bg-center" 
                    style={{
                      backgroundImage: `url('${item.img}')`, 
                      backgroundPosition: 'center 1%', 
                      backgroundSize: 'cover'
                    }} 
                  />
                  <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="text-[#ba7894] text-xs sm:text-sm">
                        <div className='flex items-center gap-1 sm:gap-2'>
                          <FaRegStar className="w-3 h-3 sm:w-4 sm:h-4" /> 
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-black">{item.reviews} reviews</div>
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2b1d20] mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    
                    <div className='flex items-start gap-2 mb-3 sm:mb-4 flex-1'>
                      <span className="text-[#f44336] mt-1 flex-shrink-0">
                        <FaHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <Link to="/product">
                        <button className="w-full py-2 sm:py-3 lg:py-1 rounded border border-[#f2d6d9] text-[#b34d5b] text-xs sm:text-sm md:text-base font-medium hover:bg-[#f2d6d9] transition-colors duration-200 cursor-pointer">
                          BUY NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCollection