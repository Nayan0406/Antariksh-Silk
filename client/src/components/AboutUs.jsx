import React from 'react'

const AboutUs = () => {
  return (
    <section className="max-w-full mx-auto px-4 sm:px-6 lg:mx-10 lg:px-0 lg:rounded-tl-[6rem] xl:rounded-tl-[8rem] 2xl:rounded-tl-[10rem] lg:rounded-br-[6rem] xl:rounded-br-[8rem] 2xl:rounded-br-[10rem] bg-[#f8f1e3] flex justify-center items-center py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="flex flex-col items-center w-full max-w-7xl">
        {/* Text block with left image */}
  <div className="relative bg-[#550000] text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20">
          {/* Mobile-only ABOUT label (shows above image on mobile) */}
          <div className="block lg:hidden text-xs md:text-sm tracking-widest font-semibold mb-2 text-[#e6d2e0] uppercase text-center">ABOUT US</div>

          {/* Left image */}
          {/* Left image: overlap to the left using negative translate/margin and higher z-index */}
          <div className="flex-shrink-0 flex relative z-20 -ml-6 sm:-ml-8 md:-ml-12 lg:ml-25 xl:ml-80 2xl:-ml-24">
            <img
              src="/aboutus-img.png"
              alt="Saree"
              className="w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80 h-auto object-contain rounded-sm shadow-lg lg:ml-25 ml-5"
            />
          </div>
          {/* Text content */}
          <div>
            <div className="hidden lg:block text-xs md:text-sm tracking-widest font-semibold mb-2 text-[#e6d2e0] uppercase">ABOUT US</div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{fontFamily: 'serif'}}>
              It’s the bridge between<br className="hidden md:block" /> service companies<br className="hidden md:block" /> and consumers.
            </h2>
            <p className="text-[#e6d2e0] text-sm md:text-base leading-relaxed">
              ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs