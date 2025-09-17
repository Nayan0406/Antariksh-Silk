import React from 'react'

const BlogItems = () => {
    return (
        <div className="w-full py-4 sm:py-6 md:py-8 px-2 sm:px-4 space-y-6 sm:space-y-8 mr-9 h-full">
            {/* First Blog Item - Paithani */}
            <div className="relative max-w-7xl mx-auto">
                <div className="bg-[#dec9c7] md:rounded-br-[10vw] md:rounded-tl-[10vw] p-4 sm:p-6 md:h-[500px] lg:h-[560px]">
                    <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-0 relative z-10">
                        {/* Purple Content Block */}
                        <div className="bg-[#550000] text-white p-4 sm:p-6 md:p-8 lg:p-16 w-full md:w-1/2 relative z-10 md:rounded-none order-2 md:order-2">
                            <p className="uppercase text-xs sm:text-sm tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Paithani</h2>
                            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative order-1 md:order-2">
                            <div className="relative h-60 sm:h-64 md:h-100 lg:h-120 lg:w-150">
                                <video
                                    src="/saree-video.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                >
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Blog Item - Silk */}
            <div className="relative w-full mx-auto">
                {/* Light Background */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-0">
                        {/* Purple Content Block */}
                        <div className="bg-[#550000] text-white p-4  sm:p-6 md:p-8 lg:p-16 w-full md:w-1/2 relative z-10 md:rounded-none order-2 md:order-1">
                            <p className="uppercase text-xs sm:text-sm tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Silk</h2>
                            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative order-1 md:order-2">
                            <div className="relative overflow-hidden h-48 sm:h-64 md:h-120 lg:h-120 ">
                                <video
                                    src="/saree-video-1.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                >
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Blog Item */}
            <div className="relative max-w-7xl mx-auto">
                <div className="bg-[#dec9c7] md:rounded-br-[10vw] md:rounded-tl-[10vw] p-4 sm:p-6 md:h-[500px] lg:h-[560px]">
                    <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-0 relative z-10">
                        {/* Purple Content Block */}
                        <div className="bg-[#550000] text-white p-4 sm:p-6 md:p-8 lg:p-16 w-full md:w-1/2 relative z-10 md:rounded-none order-2 md:order-1">
                            <p className="uppercase text-xs sm:text-sm tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Navari</h2>
                            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative order-1 md:order-2">
                            <div className="relative h-60 sm:h-64 md:h-100 lg:h-120 lg:w-150">
                                <video
                                    src="/saree-video-2.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                >
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fourth blog */}
            <div className="relative max-w-7xl mx-auto">
                {/* Light Background */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-0">
                        {/* Purple Content Block */}
                        <div className="bg-[#550000] text-white p-4  sm:p-6 md:p-8 lg:p-16 w-full md:w-1/2 relative z-10 md:rounded-none order-2 md:order-1">
                            <p className="uppercase text-xs sm:text-sm tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Irkal Saree</h2>
                            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative order-1 md:order-2">
                            <div className="relative overflow-hidden h-48 sm:h-64 md:h-120 lg:h-120">
                                <video
                                    src="/saree-video-3.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                >
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth blog */}
            <div className="relative max-w-7xl mx-auto">
                <div className="bg-[#dec9c7] md:rounded-br-[10vw] md:rounded-tl-[10vw] p-4 sm:p-6 md:h-[500px] lg:h-[560px]">
                    <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-0 relative z-10">
                        {/* Purple Content Block */}
                        <div className="bg-[#550000] text-white p-4 sm:p-6 md:p-8 lg:p-16 w-full md:w-1/2 relative z-10 md:rounded-none order-2 md:order-1">
                            <p className="uppercase text-xs sm:text-sm tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Tussar Silk Saree</h2>
                            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative order-1 md:order-1">
                            <div className="relative h-60 sm:h-64 md:h-100 lg:h-120 lg:w-150">
                                <video
                                    src="/saree-video-4.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                >
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogItems