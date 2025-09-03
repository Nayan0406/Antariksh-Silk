import React from "react";

const HomeProduct = () => {
  return (
    <section className="relative ">
      {/* <div className="">
        <img src="/image.png" alt="decor" className="absolute inset-0 w-full h-full object-cover rounded-4xl pointer-events-none opacity-70 pt-47 pl-27" />
      </div> */}
      {/* Top Background Shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a2e35]">
            We are Experienced in making you <br /> very Beautiful
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et
            proin neque.
          </p>
        </div>

        {/* Image Grid */}
        <div className="relative">
          {/* background image that sits behind the grid */}
          {/* <img src="/image.png" alt="decor" className="absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none opacity-30" /> */}
          {/* optional subtle color wash over background */}
          <div className="absolute inset-0 bg-[#873939] rounded-2xl " />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left side big image */}
          <div className="md:row-span-2">
            <img
              src="/home-product-img.png"
              alt="Saree Model"
              className="w-full h-117 object-fill shadow-md rounded-l-2xl"
            />
          </div>

          {/* Right side grid images */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            <img
              src="/product-1-img.jpg"
              alt="Sarees"
              className="w-full h-40 md:h-48 lg:h-55 object-cover  shadow-md"
            />
            <img
              src="/product-2-img.png"
              alt="Blue Saree"
              className="w-full h-40 md:h-48 lg:h-55 object-cover  shadow-md"
            />
            <img
              src="/product-3-img.png"
              alt="Pink Blue Saree"
              className="w-full h-40 md:h-48 lg:h-55 object-cover  shadow-md"
            />
            <img
              src="/product-4-img.png"
              alt="Yellow Saree"
              className="w-full h-40 md:h-48 lg:h-55 object-cover  shadow-md"
            />
          </div>
        </div>
        </div>
      </div>

      {/* <style jsx>{`
        .clip-custom {
          clip-path: ellipse(150% 100% at 50% 0%);
        }
      `}</style> */}
    </section>
  );
};

export default HomeProduct;
