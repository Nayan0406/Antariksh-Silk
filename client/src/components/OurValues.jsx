import React from 'react'

const values = [
  {
    icon: (
      <img src="/value-icon.png" alt="Quality Icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-18 lg:h-18" />
    ),
    title: 'Fabric Quality',
    desc: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.'
  },
  {
    icon: (
      <img src="/value-icon-1.png" alt="Quality Icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-18 lg:h-18" />
    ),
    title: 'Designer Collection',
    desc: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.'
  },
  {
    icon: (
      <img src="/value-icon-2.png" alt="Quality Icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-18 lg:h-18" />
    ),
    title: '100% Genuine',
    desc: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.'
  },
]

const OurValues = () => {
  return (
    <section className="max-w-full flex flex-col md:flex-row items-center justify-center py-12 px-2 md:px-8 lg:px-24 bg-white">
      {/* Left: Values */}
      <div className="bg-[#fff8f8] rounded-md p-6 md:p-12 flex-1 max-w-xl w-full">
        <div className="text-center md:text-left">
          <div className="flex text-[#c97a9b] text-sm font-semibold tracking-widest mb-2 uppercase justify-center -pt-10">OUR VALUES</div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#232323] mb-8 leading-tight" style={{fontFamily: 'serif'}}>
            The work values we thrive for
          </h2>
        </div>
        <div className="space-y-8">
          {values.map((val, idx) => (
            <div key={val.title} className="flex items-start gap-4 md:gap-6 border-b last:border-b-0 border-[#e7d6d6] pb-6 last:pb-0">
              <div className="flex-shrink-0">{val.icon}</div>
              <div>
                <div className="font-bold text-lg md:text-xl text-[#232323] mb-1" style={{fontFamily: 'serif'}}>{val.title}</div>
                <div className="text-[#6b6b6b] text-sm md:text-base leading-relaxed">{val.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Saree Images */}
      <div className="relative flex-1 flex flex-col items-center justify-center md:mt-0 md:ml-8 lg:ml-16 w-full max-w-xl min-h-[18rem]">
        {/* Desktop/tablet: two top, one bottom; Mobile: stack vertically */}
        <div className="hidden md:flex w-full justify-between items-start">
          <img src="/ourvalue-img-1.png" alt="Saree 1" className="w-40 md:w-48 lg:w-46 lg:h-100 rounded-full object-cover shadow-lg" />
          <img src="/ourvalue-img-2.png" alt="Saree 2" className="w-40 md:w-48 lg:w-46 lg:h-100 rounded-full object-cover shadow-lg" />
        </div>
        <div className="hidden md:flex w-full justify-center items-end lg:-mt-28 md:mt-12">
          <img src="/ourvalue-img-3.png" alt="Saree 3" className="w-40 md:w-48 lg:w-56 lg:h-100 rounded-full object-cover shadow-lg" />
        </div>
        {/* Mobile: stack images vertically and center */}
        <div className="flex flex-col gap-6 w-full items-center md:hidden">
          <img src="/ourvalue-img-1.png" alt="Saree 1" className="w-36 rounded-full object-cover shadow-lg" />
          <img src="/ourvalue-img-2.png" alt="Saree 2" className="w-36 rounded-full object-cover shadow-lg" />
          <img src="/ourvalue-img-3.png" alt="Saree 3" className="w-36 rounded-full object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default OurValues