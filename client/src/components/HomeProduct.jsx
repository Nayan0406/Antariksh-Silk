import React from "react";

const HomeProduct = () => {
  return (
    <section className="relative ">
      {/* Top Background Shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full "></div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a2e35] leading-tight">
            We are Experienced in making you <br className="hidden sm:block" /> 
            <span className="sm:hidden"> </span>very Beautiful
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et
            proin neque.
          </p>
        </div>

        {/* Image Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#873939] lg:rounded-tl-[30rem] sm:rounded-xl md:rounded-2xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
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
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover shadow-md rounded-lg sm:rounded-xl"
              />
              <img
                src="/product-2-img.png"
                alt="Blue Saree"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover shadow-md rounded-lg sm:rounded-xl"
              />
              <img
                src="/product-3-img.png"
                alt="Pink Blue Saree"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover shadow-md rounded-lg sm:rounded-xl"
              />
              <img
                src="/product-4-img.png"
                alt="Yellow Saree"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-44 xl:h-52 object-cover shadow-md rounded-lg sm:rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
