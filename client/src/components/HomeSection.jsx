import React from 'react'

const HomeSection = () => {
  return (
    <section className="relative min-h-screen bg-[#9b2851] overflow-hidden">
      {/* Decorative left gradient to blend with image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9b2851] via-[#b76e79]/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-20">
  <div className="relative lg:pr-24">
          {/* Left content: constrained width so right image can show */}
          <div className="max-w-2xl text-white space-y-6 lg:space-y-8 py-8">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-img.png" alt="Saree Logo" className="h-16 w-16 object-contain ml-50" />
            </div>

            {/* Compact inline search (matches image) */}
            <div className="mb-6">
              <form className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                <div className="flex flex-col">
                  <label className="text-xs text-white/70 mb-1">Service Name</label>
                  <input
                    type="text"
                    placeholder="Book your services..."
                    className="w-64 md:w-56 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none text-sm"
                  />
                  
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-white/70 mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Where"
                    className="w-48 md:w-44 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none text-sm"
                  />
                </div>
                <button type="submit" className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-white text-[#5d2b34] rounded-md text-sm font-medium border border-[#d6b9a9] shadow-sm">
                  <span>Search</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </form>
            </div>

            <div className="inline-flex items-center gap-3 px-3 py-2  w-max mb-4">
              <img src="/home-logo.png" alt="badge" className="h-5 w-5" />
              <span className="text-lg font-medium uppercase tracking-wider text-white/90">SAREES FOR EVERY OCCASION</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#f3e0c9]">
                Find a service<br />
                <span className="text-[#f3e0c9]">close to you</span>
              </h1>
              <p className="text-md md:text-lg text-white/80 max-w-lg leading-relaxed">
                There are many variation of passages are lorem available,
                majority have suffered alteration in some form.
              </p>
            </div>
          </div>

          {/* Mobile image (stacked under content) */}
          <div className="mt-8 lg:hidden">
            <img src="/homesection-img.png" alt="Saree" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Right image covers full right half on large screens */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <img src="/homesection-img.png" alt="Beautiful Pink Saree" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}

export default HomeSection
