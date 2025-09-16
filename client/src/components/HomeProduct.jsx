import React from "react";

const HomeProduct = () => {
  return (
    <section className="relative">
      {/* Top Background Shape */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full "></div> */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-30 max-w-full mx-auto">
        {/* Heading */}
        <div className="relative">
          {/* Decorative pink background with curved left and bottom */}
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden rounded-bl-[6rem] lg:rounded-bl-[20rem]"
            style={{
              background: '#e0c3c3',
            }}
          >
          </div>

          <div className="relative z-10 text-center px-6 py-12 lg:py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a2e35] leading-tight">
              We are Experienced in making you <br className="hidden sm:block" />{' '}
              <span className="sm:hidden"> </span>very Beautiful
            </h2>
            <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et
              proin neque.
            </p>
          </div>
        </div>

        {/* Image area: mobile stacked view (keeps desktop grid unchanged) */}
        {/* Mobile: stacked large image + horizontal scroll of secondary images */}
        <div className="block lg:hidden relative -mt-6 z-20">
          {/* helper CSS to hide the scrollbar on mobile */}
          <style>{`.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>
          <div className="absolute inset-0 bg-[#f6e3e2] rounded-tl-[15rem] sm:rounded-xl md:rounded-2xl" />

          <div className="relative z-30 p-4 sm:p-6 md:p-8">
            {/* Large image full-width */}
            <div className="mb-4">
              <img
                src="/home-product-img.png"
                alt="Saree Model"
                loading="lazy"
                className="w-full h-80 sm:h-96 object-fit rounded-lg"
              />
            </div>

            {/* Horizontal scrollable strip of images */}
            <div className="overflow-x-auto -mx-4 px-4 hide-scrollbar">
              <div className="flex gap-4 w-max">
                <div className="relative flex-shrink-0 w-80 sm:w-96 h-40 sm:h-48 rounded-md overflow-hidden">
                  <img src="/product-1-img.jpg" alt="p1" loading="lazy" className="w-full h-full object-cover" />
                </div>

                <div className="flex-shrink-0 w-64 sm:w-72 h-40 sm:h-48 rounded-md overflow-hidden">
                  <img src="/product-2-img.png" alt="p2" loading="lazy" className="w-full h-full object-cover" />
                </div>

                <div className="flex-shrink-0 w-64 sm:w-72 h-40 sm:h-48 rounded-md overflow-hidden">
                  <img src="/product-3-img.png" alt="p3" loading="lazy" className="w-full h-full object-cover" />
                </div>

                <div className="flex-shrink-0 w-64 sm:w-72 h-40 sm:h-48 rounded-md overflow-hidden">
                  <img src="/product-4-img.png" alt="p4" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: original grid (kept unchanged) */}
        <div className="hidden lg:block relative -mt-12 lg:-mt-10 z-20">
          <div className="absolute inset-0 bg-[#fff3db] lg:rounded-tl-[30rem] sm:rounded-xl md:rounded-2xl" />

          <div className="relative z-30 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
            {/* Left side big image */}
            <div className="lg:row-span-2 order-1 lg:order-none">
              <img
                src="/home-product-img.png"
                alt="Saree Model"
                className="w-full h-80 sm:h-80 md:h-96 lg:h-130 object-fit rounded-lg sm:rounded-xl lg:rounded-l-2xl lg:rounded-r-none"
              />
            </div>

            {/* Right side grid images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:col-span-2 order-2 lg:order-none lg:mt-7">
              <img
                src="/product-1-img.jpg"
                alt="Sarees"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover"
              />
              <img
                src="/product-2-img.png"
                alt="Blue Saree"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover"
              />
              <img
                src="/product-3-img.png"
                alt="Pink Blue Saree"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover"
              />
              <img
                src="/product-4-img.png"
                alt="Yellow Saree"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
