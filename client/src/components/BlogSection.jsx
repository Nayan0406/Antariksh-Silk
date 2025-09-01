import React from 'react'

const BlogSection = () => {
  return (
    <section className="w-full min-h-[15rem] md:min-h-[28rem] lg:min-h-[15rem] bg-[#93274d] flex flex-col items-center justify-center px-4 py-8">
      <div className="flex justify-center pt-1 md:pt-6">
        <img src="logo-img.png" alt="" className="w-10 h-10 md:w-14 md:h-14" />
      </div>
      <div className="flex justify-center pt-2 md:pt-4 text-[#ecbfd3]">
        <h4 className="text-xs md:text-base tracking-widest font-semibold uppercase">SHORT BLOG OF OUR COLLECTIONS</h4>
      </div>
      <div className="flex justify-center pt-2 md:pt-4 w-full">
        <h1 className="text-center font-bold text-[1.5rem] md:text-4xl lg:text-5xl text-[#f7e5c1] leading-tight md:leading-snug" style={{fontFamily: 'serif'}}>
          The Saree Story
        </h1>
      </div>
      <div className="flex justify-center w-full mt-4">
        <button className="bg-[#6f002f] text-white py-3 px-8 md:py-4 md:px-12 transition text-sm md:text-base font-semibold cursor-pointer">CONTACT US</button>
      </div>
    </section>
  )
}

export default BlogSection