import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const categories = [
  'Paithani Saree',
  'Irkal Saree',
  'Solapur Saree',
  'Tussar Silk Saree',
  'Narayan Peth Saree',
  'Silk Saree',
  'Kanjeevaram',
]

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
        <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <button aria-label="scroll left" onClick={() => scroll('left')} className="p-3">
            <FaChevronLeft />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <button aria-label="scroll right" onClick={() => scroll('right')} className="p-3">
            <FaChevronRight />
          </button>
        </div>

        {/* Scrollable Row */}
        <div
          ref={ref}
          className="flex gap-10 md:gap-14 overflow-x-auto scroll-smooth py-6 px-6 md:px-12 snap-x snap-mandatory hide-scrollbar items-start w-full"
          role="list"
        >
          {categories.map((name) => (
            <article
              key={name}
              className="snap-center flex-shrink-0 w-44 sm:w-52 md:w-56 lg:w-64 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-[#faf1df] rounded-full flex items-center justify-center">
                  <img
                    src="/paithani-img.png"
                    alt={name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
              </div>
              <p className="text-sm md:text-base text-[#3b2a2f] font-medium">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
