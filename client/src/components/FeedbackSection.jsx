import React from 'react'

const FeedbackSection = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <span className="text-xs sm:text-sm md:text-base tracking-widest text-[#c77a93] uppercase">FEEDBACK</span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3a2233] leading-tight">
            What our Customers says...
          </h2>
        </div>

        <div className="relative w-full bg-[#550000] text-white rounded-lg sm:rounded-xl md:rounded-2xl md:rounded-tr-[4rem] md:rounded-br-[4rem] md:rounded-bl-[4rem] lg:rounded-tr-[2rem] lg:rounded-br-[2rem] lg:rounded-bl-[2rem] xl:rounded-tr-[8rem] xl:rounded-br-[8rem] xl:rounded-bl-[8rem] overflow-hidden lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center lg:items-start p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            {/* Section A: image / avatar */}
            <section className="relative flex items-center justify-center lg:justify-start order-1 lg:order-none">
              <div className="relative w-full">
                {/* decorative pill shapes - hidden on small screens */}
                {/* <div className="hidden lg:flex absolute left-0 top-6 flex-col items-center gap-6 z-0">
                  <div className="w-6 h-20 rounded-r-full border-4 border-white bg-[#c77a93]/60" />
                  <div className="w-6 h-40 rounded-r-full border-4 border-white bg-[#c77a93]/50 -mt-4" />
                </div> */}

                {/* circular image placed to the right of the shapes and overlapping them on large screens */}
                <div className="flex justify-center lg:justify-end relative z-20">
                  <img 
                    src="/feedbacksection-img.jpg" 
                    alt="Leslie Alexander" 
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover ring-2 sm:ring-4 ring-white shadow-lg sm:shadow-2xl relative lg:-ml-14" 
                  />
                </div>
              </div>
            </section>

            {/* Section B: author + testimonial */}
            <section className="text-center lg:text-left order-2 lg:order-none">
              <h4 className="text-base sm:text-lg md:text-xl font-medium">Leslie Alexander</h4>
              <p className="text-xs sm:text-sm md:text-base text-white/80 mt-1 sm:mt-2">Moncton, Canada</p>

              <h2 className='pt-4 sm:pt-5 md:pt-6 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-serif font-medium leading-tight'>
                Neque porro quisquam est qui dolum
              </h2>

              <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-none lg:max-w-lg xl:max-w-xl">
                "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English."
              </p>
            </section>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default FeedbackSection