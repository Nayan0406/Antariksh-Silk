import React from 'react'

const BlogItems = () => {
    return (
        <div className="w-full py-8 px-4 space-y-8">
            {/* First Blog Item - Paithani */}
            <div className="relative w-full max-w-8xl mx-auto">
                <div className="p-8 md:p-12 ">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 h-full"
                        style={{ backgroundImage: `url('/contact-form-background.png')` }}
                    ></div>
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        {/* Purple Content Block */}
                        <div className="bg-[#422a3c] text-white p-8 md:p-12 w-full md:w-1/2 relative z-10">
                            <p className="uppercase text-xs tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paithani</h2>
                            <p className="text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-lg overflow-hidden">
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
            <div className="relative w-full max-w-8xl mx-auto">
                {/* Light Background */}
                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        {/* Purple Content Block */}
                        <div className="bg-[#422a3c] text-white p-8 md:p-12 rounded-lg w-full md:w-1/2 relative z-10">
                            <p className="uppercase text-xs tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Silk</h2>
                            <p className="text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-lg overflow-hidden">
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
            <div className="relative w-full max-w-8xl mx-auto">
                {/* Pink Background */}
                <div className="p-8 md:p-12">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundImage: `url('/contact-form-background.png')` }}
                    ></div>
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        {/* Purple Content Block */}
                        <div className="bg-[#422a3c] text-white p-8 md:p-12 w-full md:w-1/2 relative z-10">
                            <p className="uppercase text-xs tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Navari</h2>
                            <p className="text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-lg overflow-hidden">
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
            <div className="relative w-full max-w-8xl mx-auto">
                {/* Light Background */}
                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        {/* Purple Content Block */}
                        <div className="bg-[#422a3c] text-white p-8 md:p-12 rounded-lg w-full md:w-1/2 relative z-10">
                            <p className="uppercase text-xs tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Irkal Saree</h2>
                            <p className="text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-lg overflow-hidden">
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
            <div className="relative w-full max-w-8xl mx-auto">
                {/* Pink Background */}
                <div className="p-8 md:p-12">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundImage: `url('/contact-form-background.png')` }}
                    ></div>
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        {/* Purple Content Block */}
                        <div className="bg-[#422a3c] text-white p-8 md:p-12 w-full md:w-1/2 relative z-10">
                            <p className="uppercase text-xs tracking-wide mb-2 opacity-80">BLOG</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tussar Silk Saree</h2>
                            <p className="text-sm leading-relaxed opacity-90">
                                ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-lg overflow-hidden">
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

        </div>
    )
}

export default BlogItems