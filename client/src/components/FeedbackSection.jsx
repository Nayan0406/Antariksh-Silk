import React from 'react'

const FeedbackSection = () => {
  return (
    <section className="py-8 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-sm tracking-widest text-[#c77a93] -mt-10">FEEDBACK</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-[#3a2233]">What our Customers says...</h2>
        </div>

        <div className="relative bg-[#8b2a53] text-white rounded-2xl overflow-hidden px-8 py-20 lg:px-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Section A: image / avatar */}
            <section className="relative flex items-center justify-center lg:justify-start">
              <div className="relative w-full">
                {/* decorative pill shapes - hidden on small screens */}
                {/* <div className="hidden lg:flex absolute left-0 top-6 flex-col items-center gap-6 z-0">
                  <div className="w-6 h-20 rounded-r-full border-4 border-white bg-[#c77a93]/60" />
                  <div className="w-6 h-40 rounded-r-full border-4 border-white bg-[#c77a93]/50 -mt-4" />
                </div> */}

                {/* circular image placed to the right of the shapes and overlapping them on large screens */}
                <div className="flex justify-center lg:justify-end relative z-20">
                  <img src="/feedbacksection-img.jpg" alt="Leslie Alexander" className="w-36 h-36 lg:w-56 lg:h-56 rounded-full object-cover ring-4 ring-white shadow-2xl relative lg:-ml-14" />
                </div>
              </div>
            </section>

            {/* Section B: author + testimonial */}
            <section>
              <h4 className="text-s">Leslie Alexander</h4>
              <p className="text-sm text-white/80 mt-1">Moncton, Canada</p>

              <h2 className='pt-5 text-2xl lg:text-2xl font-serif font-medium leading-tight'>Neque porro quisquam est qui dolum</h2>

              <p className="mt-4 text-white/90 leading-relaxed">"It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English."</p>
            </section>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default FeedbackSection