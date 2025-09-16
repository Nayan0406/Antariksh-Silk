import React from 'react'

const ContactSection = () => {
  return (
    <section
      className="w-full min-h-[18rem] sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[18rem] flex items-center px-4 py-8"
      style={{
        background: 'linear-gradient(90deg, #1D0200 0%, #5A1D19 50%, #1D0200 100%)',
      }}
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        <div className="flex justify-center text-[#f08181]">
          <h4 className="text-xs sm:text-sm md:text-base tracking-widest font-semibold uppercase">CONTACT US</h4>
        </div>

        <div className="mt-2 sm:mt-4">
          <h1
            className="mx-auto font-bold text-[1.25rem] sm:text-[1.5rem] md:text-4xl lg:text-5xl text-[#f7e5c1] leading-snug md:leading-tight"
            style={{ fontFamily: 'serif', maxWidth: '56rem' }}
          >
            We Are Ready To Assist
            <br className="md:hidden" />
            <br className="hidden md:block" />
            You In 24x7
          </h1>
        </div>
      </div>
    </section>
  )
}

export default ContactSection