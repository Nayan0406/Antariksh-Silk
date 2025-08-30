import React, { useRef } from 'react'
import { FaStar, FaRegHeart } from 'react-icons/fa'

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
    <section className="relative py-12 bg-[#f9e9ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 -mt-5">
          <p className="text-xs text-pink-400 uppercase tracking-wider">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-prata font-bold text-[#3b2a2f]">Recommended</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p>
        </div>

        {/* hide scrollbar */}
        <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}`}</style>

        <div className="relative">
          {/* Desktop arrows */}
          {/* <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20">
            <button onClick={() => scroll('left')} aria-label="left" className="p-3 bg-white rounded-full shadow-md -ml-6">
              ‹
            </button>
          </div>
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <button onClick={() => scroll('right')} aria-label="right" className="p-3 bg-white rounded-full shadow-md -mr-6">
              ›
            </button>
          </div> */}

          {/* Scroll container */}
          <div ref={ref} className="flex gap-6 overflow-x-auto hide-scrollbar py-4 snap-x snap-mandatory scroll-smooth w-full">
            {items.map((it, idx) => (
              <article key={idx} className="snap-center flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-80 bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                  <img src={it.img} alt={it.title} className="w-96 h-86 object-fill" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400"><FaStar /></span>
                      <span>{it.rating}</span>
                    </div>
                    <div>{it.reviews} reviews</div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">{it.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{it.desc}</p>
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 rounded-md border border-pink-200 text-pink-600 text-sm">Buy Now</button>
                    
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCollection