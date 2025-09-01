import React from 'react'

const BlogItem = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center py-5 px-2 sm:px-4 md:px-8">

  {/* Content Overlay */}
  <div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-between px-2 sm:px-6 md:px-16">
    {/* Horizontal purple block extending from left content under the video (desktop only) */}
    <div className="hidden lg:block absolute left-20 h-[320px] w-[90%] bg-[#422a3c] z-10" />

    {/* Right Side Video */}
    <div className="relative z-20 md:mt-0 lg:ml-[-10px] mb-4 md:mb-0">
      <div className="relative w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[580px] md:h-[350px] lg:w-[680px] lg:h-[450px] overflow-hidden -top-3">
        <video
          src="/saree-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>

    {/* Left Side Content (transparent so the horizontal block shows through) */}
    <div className="relative z-20 w-full lg:w-1/2">
      <div className="text-white max-w-3xl p-4 sm:p-6 md:p-12 pt-5">
        <p className="uppercase text-xs sm:text-sm tracking-wide text-black lg:text-white">Blog</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black lg:text-white">Silk</h2>
        <p className="text-xs sm:text-sm leading-relaxed text-black lg:text-white pb-5">
          ServiceMarket.dk is a Copenhagen-based technology company known for our
          overview platform. Our aim is to simplify and improve everyday life for
          citizens in Denmark. One platform that brings together all services in
          an easy and controlled environment.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default BlogItem