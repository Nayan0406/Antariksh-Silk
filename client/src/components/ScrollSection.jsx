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
    <section className="py-8 bg-white w-full">
      <div className="relative w-full">
        {/* hide scrollbar styles (WebKit, Firefox, IE/Edge) */}
        <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}`}</style>
        {/* Left Arrow */}
        <div className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20">
          <button aria-label="scroll left" onClick={() => scroll('left')} className="p-3">
            <FaChevronLeft />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20">
          <button aria-label="scroll right" onClick={() => scroll('right')} className="p-3">
            <FaChevronRight />
          </button>
        </div>

        {/* Scrollable Row */}
        <div
          ref={ref}
          className="flex gap-12 overflow-x-auto scroll-smooth py-6 px-6 md:px-12 snap-x snap-mandatory hide-scrollbar items-start w-full"
          role="list"
        >
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path || `/${slugify(cat.name)}`} className="snap-center flex-shrink-0 w-56 sm:w-64 md:w-72 text-center no-underline">
              <article className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 bg-[#faf1df] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#3b2a2f] font-medium">{cat.name}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
