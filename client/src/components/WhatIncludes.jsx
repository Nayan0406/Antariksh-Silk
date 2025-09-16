import React, { useRef, useEffect } from 'react'
import { LuCircleCheckBig } from "react-icons/lu";

const WhatIncludes = () => {
    const videoRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        const container = containerRef.current
        if (!video || !container) return

        // Ensure poster is visible as a fallback background
        if (!video.getAttribute('poster')) {
            video.setAttribute('poster', '/video-poster.jpg')
        }

        const handleEnter = async () => {
            try {
                // mute before autoplay to satisfy browser policies
                video.muted = true
                await video.play()
            } catch (e) {
                // autoplay may be blocked — ignore
            }
        }

        const handleLeave = () => {
            try {
                video.pause()
                video.currentTime = 0
                video.muted = false
            } catch (e) { }
        }

        container.addEventListener('mouseenter', handleEnter)
        container.addEventListener('mouseleave', handleLeave)

        return () => {
            container.removeEventListener('mouseenter', handleEnter)
            container.removeEventListener('mouseleave', handleLeave)
        }
    }, [])

    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-center py-12 px-4 md:px-8 lg:px-24 bg-white">
            {/* Left: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl mb-8 lg:mb-0 lg:pr-8">
                <div className="text-xs md:text-sm tracking-widest font-semibold mb-2 text-[#c97a9b] uppercase self-center md:self-start text-center md:text-left">WHAT INCLUDES?</div>

                {/* Mobile-only video directly under the small title */}
                <div className="block lg:hidden w-full mb-4">
                    <div className="relative">
                        <div className="p-2">
                            <video
                                className="w-full h-56 md:h-72 object-cover bg-center bg-no-repeat"
                                preload="metadata"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="/video-poster.jpg"
                                onClick={(e) => { try { e.currentTarget.play() } catch (err) {} }}
                            >
                                <source src="/saree-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#232323]" style={{ fontFamily: 'serif' }}>
                    The start of the journey
                </h2>
                <p className="text-[#6b6b6b] text-sm md:text-base leading-relaxed mb-8">
                    ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service industry in Denmark. There were thousands of small businesses offering services, but it was difficult for consumers to find them and know which ones to choose. They developed the idea of creating a platform that would bring all these service providers together in one place, making it easier for consumers to find what they need and get their issues resolved quickly and easily. Without having to go to many different websites, each with their own booking system.
                </p>

                <div className="space-y-6 w-full">
                    <div className="text-lg font-semibold text-[#232323] mb-4" style={{ fontFamily: 'serif' }}>Our Methodology :</div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center mt-1">
                            <LuCircleCheckBig className='w-10 h-10 text-[#ba7894]' />
                        </div>
                        <div>
                            <div className="font-semibold text-[#232323] mb-1">The Assessment Stage</div>
                            <div className="text-[#6b6b6b] text-sm">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center mt-1">
                            <LuCircleCheckBig className='w-10 h-10 text-[#ba7894]' />
                        </div>
                        <div>
                            <div className="font-semibold text-[#232323] mb-1">The Initialisation Stage</div>
                            <div className="text-[#6b6b6b] text-sm">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center mt-1">
                            <LuCircleCheckBig className='w-10 h-10 text-[#ba7894]' />
                        </div>
                        <div>
                            <div className="font-semibold text-[#232323] mb-1">The Treatment Stage</div>
                            <div className="text-[#6b6b6b] text-sm">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Video with border */}
            <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
                <div className="relative">
                    <div className="p-2">
                        <video
                            ref={videoRef}
                            className="w-full max-w-2xl h-56 md:h-72 lg:h-130 object-cover rounded-md bg-center bg-no-repeat"
                            preload="metadata"
                            autoPlay
                            muted   
                            loop
                            playsInline
                            poster="/video-poster.jpg"
                        >
                            <source src="/saree-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIncludes