import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaHeart } from 'react-icons/fa'


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
    <section className="relative py-12 bg-[#dfb8b8] md:rounded-tl-[10rem]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
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
          <div ref={ref} className="flex gap-6 overflow-x-auto hide-scrollbar py-4 snap-x snap-mandatory scroll-smooth w-full h-[450px]">
            {items.map((it, idx) => (
              <article key={idx} className="snap-center flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-70 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <img src={it.img} alt={it.title} className="w-full h-70 object-fill" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[#a31f1f]"><FaStar /></span>
                      <span>{it.rating}</span>
                    </div>
                    <div className='text-[#141414]'>{it.reviews} reviews</div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">{it.title}</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <FaHeart className='text-[#f44336] mt-1' />
                    <p className="text-sm text-gray-600">{it.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <Link to="/product" className="w-full inline-flex items-center justify-center h-10 px-4 rounded-md border border-[#550000] text-[#550000] text-sm">Buy Now</Link>
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