import React from 'react'
import { FaRegStar, FaHeart } from "react-icons/fa";

const ProductList = () => {
  return (
    <section className="py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Similar Products</h2>

  <div className="relative bg-[#fbf0df] md:rounded-tl-[10rem] md:rounded-br-[10rem] p-4 md:p-6">
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
                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm">BUY NOW</button>
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
                  <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6'/></span><p className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</p></div>
                  <div className="mt-auto">
                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm">BUY NOW</button>
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
                  <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6'/></span><p className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</p></div>
                  <div className="mt-auto">
                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm">BUY NOW</button>
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
                  <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6'/></span><p className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</p></div>
                  <div className="mt-auto">
                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm">BUY NOW</button>
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
                  <div className='flex items-center gap-2'><span className="text-[#f44336]"><FaHeart className='-mt-6'/></span><span className="text-sm text-gray-600 mb-4">Lightweight and comfortable for daily wear.</span></div>
                  <div className="mt-auto">
                    <button className="w-full py-2 rounded border border-[#f2d6d9] text-[#b34d5b] text-sm">BUY NOW</button>
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

export default ProductList