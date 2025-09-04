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
    <section className="relative py-12 bg-[#dfb8b8] md:rounded-tl-[10rem]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 -mt-5">
          <p className="text-xs text-pink-400 uppercase tracking-wider">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-prata font-bold text-[#3b2a2f]">Recommended</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p>
        </div>

        <div className="relative  p-4 md:p-6">
                  <div className="overflow-x-auto hide-scrollbar py-4">
                    <div className="flex gap-6 items-stretch snap-x snap-mandatory">
                      {/* Card 1 */}
                      <article className="snap-center flex-shrink-0 w-68 sm:w-74 md:w-70 bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div className="h-44 md:h-60 lg:h-75 bg-cover bg-center" style={{backgroundImage: "url('/irkal-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover'}} />
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                            <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar /> 4.5</div></div>
                            <div className="text-sm text-black">104 reviews</div>
                            
                          </div>
                          <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Irkal Saree</h3>
                          <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6'/></span><p className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</p></div>
                          <div className="mt-auto">
                            <Link to="/product"><button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer">BUY NOW</button></Link>
                          </div>
                        </div>
                      </article>
        
                      {/* Card 2 */}
                      <article className="snap-center flex-shrink-0 w-68 sm:w-64 md:w-70 bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div className="h-44 md:h-60 lg:h-75 bg-cover bg-center" style={{backgroundImage: "url('/tussar-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover'}} />
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                            <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar /> 4.5</div></div>
                            <div className="text-sm text-black">104 reviews</div>
                            
                          </div>
                          <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Tussar Silk</h3>
                          <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6' /></span><p className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</p></div>
                          <div className="mt-auto">
                            <Link to="/product"><button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer">BUY NOW</button></Link>
                          </div>
                        </div>
                      </article>
        
                      {/* Card 3 */}
                      <article className="snap-center flex-shrink-0 w-68 sm:w-64 md:w-70 bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div className="h-44 md:h-60 lg:h-75 bg-cover bg-center" style={{backgroundImage: "url('/solapur-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover'}} />
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                            <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar /> 4.5</div></div>
                            <div className="text-sm text-black">104 reviews</div>
                            
                          </div>
                          <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Solapur Chaddar Saree</h3>
                          <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6' /></span><p className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</p></div>
                          <div className="mt-auto">
                            <Link to="/product"><button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer">BUY NOW</button></Link>
                          </div>
                        </div>
                      </article>
        
                      {/* Card 4 */}
                      <article className="snap-center flex-shrink-0 w-68 sm:w-64 md:w-70 bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div className="h-44 md:h-60 lg:h-75 bg-cover bg-center" style={{backgroundImage: "url('/Kanjeevaram-saree.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover'}} />
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                            <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar /> 4.5</div></div>
                            <div className="text-sm text-black">104 reviews</div>
                            
                          </div>
                          <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Kanjeevaram Saree</h3>
                          <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6' /></span><p className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</p></div>
                          <div className="mt-auto">
                            <Link to="/product"><button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer">BUY NOW</button></Link>
                          </div>
                        </div>
                      </article>
        
                      {/* Card 5 */}
                      <article className="snap-center flex-shrink-0 w-68 sm:w-64 md:w-70 bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div className="h-44 md:h-60 lg:h-75 bg-cover bg-center" style={{backgroundImage: "url('/home-product-img.png')", backgroundPosition: 'center 1%', backgroundSize: 'cover'}} />
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center justify-between text-xs text-[#a31f1f] mb-2">
                            <div className="text-[#ba7894] text-sm"><div className='flex items-center gap-2'><FaRegStar /> 4.5</div></div>
                            <div className="text-sm text-black">104 reviews</div>
                            
                          </div>
                          <h3 className="text-lg font-semibold text-[#2b1d20] mb-2">Paithani Saree</h3>
                          <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6' /></span><span className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</span></div>
                          <div className="mt-auto">
                            <Link to="/product"><button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm cursor-pointer">BUY NOW</button></Link>
                          </div>
                        </div>
                      </article>
        
                    </div>
                  </div>
                </div>
      </div>
    </section>
  )
}

export default OurCollection