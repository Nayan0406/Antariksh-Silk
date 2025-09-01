import React from 'react'

const AboutUs = () => {
  return (
    <section className="w-full bg-[#f8f1e3] flex justify-center items-center py-12 px-2 md:px-8 lg:px-24">
      <div className="flex flex-col md:flex-row items-center w-full max-w-full">
        {/* Image and background layers */}
        {/* <div className="relative w-full md:w-[420px] lg:w-[480px] flex-shrink-0 flex justify-center mb-8 md:mb-0"> */}
          {/* Purple background block */}
          {/* <div className="hidden md:block absolute left-0 top-8 w-[320px] h-[420px] bg-[#44263a] z-0 rounded-sm" style={{}}></div> */}
          {/* Saree image with background */}
          {/* <div className="relative">
            <img src="/aboutus-bg.png" alt="Background" className="w-[320px] h-[420px] object-cover rounded-sm" />
            <img src="/aboutus-img.png" alt="Saree" className="absolute left-0 top-0 w-[320px] h-[420px] object-contain rounded-sm" />
          </div> */}
        {/* </div> */}
        {/* Text block with left image */}
        <div className="bg-[#44263a] text-white  p-6 md:p-12 flex-1 md:ml-[-60px] z-20 w-full max-w-full flex flex-col md:flex-row items-center md:items-start gap-20">
          {/* Left image */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center items-center">
            <img src="/aboutus-img.png" alt="Saree" className="w-40 h-60 md:w-48 md:h-72 lg:w-90 lg:h-100 object-contain rounded-sm" />
          </div>
          {/* Text content */}
          <div>
            <div className="text-xs md:text-sm tracking-widest font-semibold mb-2 text-[#e6d2e0] uppercase">ABOUT US</div>
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