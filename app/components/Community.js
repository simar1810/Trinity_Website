/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';

export default function Community() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // ============= CUSTOMIZABLE VARIABLES =============
    // Adjust these values to change the carousel dimensions

    // Number of images to show at once
    const IMAGES_PER_VIEW_MOBILE = 1;
    const IMAGES_PER_VIEW_DESKTOP = 3;

    // Carousel Width - Responsive: smaller on mobile, larger on desktop
    // Mobile: max-w-xl (single image), Desktop: max-w-7xl (3 images side-by-side)
    const CAROUSEL_MAX_WIDTH = 'max-w-xl md:max-w-7xl';

    // Carousel Image Aspect Ratio - Controls height relative to width
    // Format: 'aspect-[width/height]'
    // Options: 'aspect-square' (1:1), 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[16/9]', 'aspect-[4/5]'
    // Mobile and Desktop can have different ratios
    const CAROUSEL_ASPECT_MOBILE = 'aspect-[4/3]';   // Portrait on mobile
    const CAROUSEL_ASPECT_DESKTOP = 'md:aspect-[4/3]'; // Landscape on desktop
    // ==================================================

    // Community transformation images
    const communityImages = [
        {
            id: 1,
            image: '/assets/transformation-1-after.jpg',
            name: 'Sarah Johnson',
            achievement: 'Lost 30 lbs in 3 months',
            testimonial: 'The wellness program changed my life completely!'
        },
        {
            id: 2,
            image: '/assets/transformation-2-after.jpg',
            name: 'Michael Chen',
            achievement: 'Gained muscle & flexibility',
            testimonial: 'I feel stronger and more energized than ever!'
        },
        {
            id: 3,
            image: '/assets/transformation-3-after.jpg',
            name: 'Emily Rodriguez',
            achievement: 'Improved overall health',
            testimonial: 'My energy levels have skyrocketed!'
        },
        {
            id: 4,
            image: '/assets/transformation-4-after.jpg',
            name: 'David Kumar',
            achievement: 'Transformed in 6 months',
            testimonial: 'Best decision I ever made for my health!'
        }
    ];

    // Calculate total number of slides based on screen size
    // On desktop, we show 3 at a time, so we have fewer "slides"
    const totalSlides = communityImages.length;

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

    };

    const goToSlide = (index) => {
        setCurrentSlide(index);

    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                    Wellness from Our Thriving Community
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                    Experience the transformation stories from our community members.
                    Real people, real results.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="container-custom relative">
                {/* Main Carousel */}
                <div className={`relative overflow-hidden rounded-2xl mx-auto ${CAROUSEL_MAX_WIDTH}`}>
                    {/* Inline style for responsive carousel movement */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                            .carousel-track {
                                transition: transform 700ms ease-in-out;
                                transform: translateX(${currentSlide * -100}%);
                            }
                            @media (min-width: 768px) {
                                .carousel-track {
                                    transform: translateX(${currentSlide * -33.333}%);
                                }
                            }
                        `
                    }} />

                    <div className="flex carousel-track">
                        {communityImages.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-full md:min-w-[33.333%] px-2 md:px-3"
                            >
                                {/* Single Image Card */}
                                <div className="relative bg-gradient-to-br from-lime-50 to-white p-4 md:p-5 rounded-xl shadow-lg h-full">
                                    {/* Main Image */}
                                    <div className="relative group">
                                        <div className={`relative overflow-hidden rounded-lg shadow-md ${CAROUSEL_ASPECT_MOBILE} ${CAROUSEL_ASPECT_DESKTOP}`}>
                                            <img
                                                src={item.image}
                                                alt={`${item.name} - Transformation`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                            {/* Name overlay on image */}
                                            <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                                                <h3 className="text-base md:text-lg font-bold drop-shadow-lg">
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="mt-3 text-center">
                                        <p className="text-lime-600 font-semibold text-xs md:text-sm mb-1">
                                            {item.achievement}
                                        </p>
                                        <p className="text-gray-600 italic text-xs md:text-sm line-clamp-2">
                                            "{item.testimonial}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-lime-500 hover:text-white text-black p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-lime-500 hover:text-white text-black p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 md:gap-3 mt-6">
                    {communityImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${currentSlide === index
                                ? 'bg-lime-500 w-8 md:w-10 h-2 md:h-2.5'
                                : 'bg-gray-300 hover:bg-gray-400 w-2 md:w-2.5 h-2 md:h-2.5'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}
