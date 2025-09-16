import React from 'react'
import { Link } from 'react-router-dom'

const BlogSection = () => {
  return (
    <section
      className="w-full min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[15rem] flex items-center px-4 py-8"
      style={{
        background: 'linear-gradient(90deg, #1D0200 0%, #5A1D19 50%, #1D0200 100%)',
      }}
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        <div className="flex justify-center text-[#f08181]">
          <h4 className="text-[11px] sm:text-xs md:text-base tracking-widest font-semibold uppercase">OUR BLOG</h4>
        </div>

        <div className="mt-2 sm:mt-4">
          <h1 className="mx-auto font-bold text-[1.125rem] sm:text-[1.35rem] md:text-4xl lg:text-5xl text-[#f7e5c1] leading-tight md:leading-snug" style={{ fontFamily: 'serif', maxWidth: '56rem' }}>
            The Saree Story
          </h1>
        </div>

        <div className="flex justify-center w-full mt-4">
          <Link to="/contact">
            <button className="bg-[#870900] text-white py-2.5 px-6 sm:py-3 sm:px-8 md:py-4 md:px-12 transition text-sm md:text-base font-semibold cursor-pointer rounded-md">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection