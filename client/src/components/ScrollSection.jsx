import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Paithani Saree', img: '/paithani-img.png', path: '/paithanisaree' },
  { name: 'Irkal Saree', img: '/scroll-irkal-saree.png', path: '/irkalsaree' },
  { name: 'Solapur Saree', img: '/scroll-solapur-saree.png', path: '/solapursaree' },
  { name: 'Tussar Silk Saree', img: '/scroll-tussar-saree.png', path: '/tussarsaree' },
  { name: 'Narayan Peth Saree', img: '/scroll-narayanpeth-saree.png', path: '/narayanpethsaree' },
  { name: 'Silk Saree', img: '/scroll-silk-saree.png', path: '/silksaree' },
  { name: 'Kanjeevaram', img: '/scroll-irkal-saree.png', path: '/kanjeevaramsaree' },
]

// helper to create url-friendly slugs from category names
const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')


const ScrollSection = () => {
  const ref = useRef(null)

  const scroll = (dir = 'right') => {
    const el = ref.current
    if (!el) return
    const distance = Math.floor(el.clientWidth * 0.7)
    const left = dir === 'right' ? distance : -distance
    el.scrollBy({ left, behavior: 'smooth' })
  }

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-white w-full">
      <div className="relative w-full max-w-full mx-auto">
        {/* hide scrollbar styles (WebKit, Firefox, IE/Edge) */}
        <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}`}</style>
        
        {/* Left Arrow */}
        <div className="hidden lg:flex absolute left-2 xl:left-4 top-1/2 -translate-y-1/2 z-20">
          <button 
            aria-label="scroll left" 
            onClick={() => scroll('left')} 
            className="p-2 lg:p-3"
          >
            <FaChevronLeft className="text-gray-600 text-sm lg:text-base" />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="hidden lg:flex absolute right-2 xl:right-4 top-1/2 -translate-y-1/2 z-20">
          <button 
            aria-label="scroll right" 
            onClick={() => scroll('right')} 
            className="p-2 lg:p-3"
          >
            <FaChevronRight className="text-gray-600 text-sm lg:text-base" />
          </button>
        </div>

        {/* Scrollable Row */}
        <div
          ref={ref}
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-x-auto scroll-smooth py-4 sm:py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 snap-x snap-mandatory hide-scrollbar items-start w-full"
          role="list"
        >
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path || `/${slugify(cat.name)}`} 
              className="snap-center flex-shrink-0 w-32 xs:w-36 sm:w-44 md:w-52 lg:w-56 xl:w-64 text-center no-underline"
            >
              <article className="group">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 bg-[#faf1df] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-[#3b2a2f] font-medium leading-tight px-1">
                  {cat.name}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
