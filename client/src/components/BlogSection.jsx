import React from 'react'
import { Link } from 'react-router-dom'

const BlogSection = () => {
  return (
    <section className="w-full min-h-[15rem] md:min-h-[28rem] lg:min-h-[15rem] bg-[#3b0f0c] flex flex-col items-center justify-center px-4 py-8">
      <div className="flex justify-center pt-2 md:pt-4 text-[#f08181]">
        <h4 className="text-xs md:text-base tracking-widest font-semibold uppercase">OUR BLOG</h4>
      </div>
      <div className="flex justify-center pt-2 w-full">
        <h1 className="text-center font-bold text-[1.5rem] md:text-4xl lg:text-5xl text-[#f7e5c1] leading-tight md:leading-snug" style={{fontFamily: 'serif'}}>
          The Saree Story
        </h1>
      </div>
      <div className="flex justify-center w-full mt-4">
        <Link to="/contact"><button className="bg-[#8e4641] text-white py-3 px-8 md:py-4 md:px-12 transition text-sm md:text-base font-semibold cursor-pointer">CONTACT US</button></Link>
      </div>
    </section>
  )
}

export default BlogSection