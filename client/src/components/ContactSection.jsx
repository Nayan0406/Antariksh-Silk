import React from 'react'

const ContactSection = () => {
  return (
    <section className="w-full min-h-[15rem] md:min-h-[28rem] lg:min-h-[15rem] bg-[#3b0f0c] flex flex-col items-center justify-center px-4 py-8">
      <div className="flex justify-center pt-2 md:pt-4 text-[#f08181]">
        <h4 className="text-xs md:text-base tracking-widest font-semibold uppercase">CONTACT US</h4>
      </div>
      <div className="flex justify-center pt-2 md:pt-4 w-full">
        <h1 className="text-center font-bold text-[1.5rem] md:text-4xl lg:text-5xl text-[#f7e5c1] leading-tight md:leading-snug" style={{fontFamily: 'serif'}}>
          We Are Ready To Assist<br className="hidden md:block" />You In 24x7
        </h1>
      </div>
    </section>
  )
}

export default ContactSection