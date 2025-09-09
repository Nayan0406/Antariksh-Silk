import React from 'react'
import { Link } from 'react-router-dom'
import ScrollSection from './ScrollSection'
import { FaRegStar, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: 'Silk Saree',
    img: '/greensilksaree-front.png',
    reviews: 104,
    desc: 'Known for best appearance in occasions like diwali.'
  },
  {
    id: 2,
    name: 'Silk Saree',
    img: '/yellowsilksaree-front.png',
    reviews: 104,
    desc: 'Lightweight comfortable weave for everyday wear.'
  },
  {
    id: 3,
    name: 'Paithani Saree',
    img: '/bluesilksaree-front.png',
    reviews: 104,
    desc: 'Features handwoven silk with zari.'
  },
  {
    id: 4,
    name: 'Nauvari Saree',
    img: '/silk-saree.png',
    reviews: 104,
    desc: 'Symbol of strength, grace, and cultural pride.'
  }
]

const CategoryTussar = () => {
  return (
    <div>
        <ScrollSection />
        <section className="px-6 md:px-12 py-8 bg-white">
          <h2 className="text-2xl font-semibold text-[#7a1212] mb-6">Tussar Silk Saree</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-96 bg-cover bg-top" style={{ backgroundImage: `url('${p.img}')` }} />
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                    <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar className='text-[#cf2f2f]'/> 4.5</div></div>
                    <div className="text-sm text-black">{p.reviews} reviews</div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">{p.name}</h3>
                  <div className='flex items-start gap-2'>
                    <FaHeart className='text-red-500 mt-1' />
                    <p className="text-sm text-gray-600 flex-1 mb-4 lowercase">{p.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <Link to={`/product/${p.id}`} className="w-full block text-center py-2 rounded-lg border border-[#870900] text-[#870900] text-sm transition-colors">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
            {products.map((p) => (
              <article key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-96 bg-cover bg-top" style={{ backgroundImage: `url('${p.img}')` }} />
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                    <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar className='text-[#cf2f2f]'/> 4.5</div></div>
                    <div className="text-sm text-black">{p.reviews} reviews</div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">{p.name}</h3>
                  <div className='flex items-start gap-2'>
                    <FaHeart className='text-red-500 mt-1' />
                    <p className="text-sm text-gray-600 flex-1 mb-4 lowercase">{p.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <Link to={`/product/${p.id}`} className="w-full block text-center py-2 rounded-lg border border-[#870900] text-[#870900] text-sm transition-colors">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
            {products.map((p) => (
              <article key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-96 bg-cover bg-top" style={{ backgroundImage: `url('${p.img}')` }} />
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                    <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar className='text-[#cf2f2f]'/> 4.5</div></div>
                    <div className="text-sm text-black">{p.reviews} reviews</div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">{p.name}</h3>
                  <div className='flex items-start gap-2'>
                    <FaHeart className='text-red-500 mt-1' />
                    <p className="text-sm text-gray-600 flex-1 mb-4 lowercase">{p.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <Link to={`/product/${p.id}`} className="w-full block text-center py-2 rounded-lg border border-[#870900] text-[#870900] text-sm transition-colors">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>
    </div>
  )
}

export default CategoryTussar