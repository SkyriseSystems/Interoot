"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing arrow icons from react-icons
import { FaClock, FaTools, FaUsers } from 'react-icons/fa'; // Importing icons for experience blocks

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Join us & Receive the Best repair solutions",
      subtitle: "Sound System Repairs, Broadcasting & CCTV Solutions",
      buttonText: "GET QUOTE",
      description: "We are technical Company aimed to serve commercial, businesses and individuals. We provide quick and quality services that exceed expectations of our esteemed customers. The company undertakes mechanical, electrical and electronics services. Interoot earned a reputation for excellent, quality and quick response to emergency faults.",
      imageSrc: "/images/hero2.jpg",
      width: 600,
      height: 400,
    },
    {
      title: "Indulge in a Premium Laundry Experience",
      subtitle: "Ventless, Efficient, and Easy on Clothes",
      buttonText: "Shop Now",
      description: "Save on energy-smart laundry pair with LG's DLHC5502 heat pump dryer, with a flexible ventless design so you can install virtually anywhere. Bundle with an eligible washer for $200 off, plus up to $300 off with Trade-In.",
      imageSrc: "/images/hero3.png",
      width: 600,
      height: 400,
      badge: "65% Less Energy",
    },
    {
      title: "Indulge in a Premium Laundry Experience",
      subtitle: "Ventless, Efficient, and Easy on Clothes",
      buttonText: "Shop Now",
      description: "Save on energy-smart laundry pair with LG's DLHC5502 heat pump dryer, with a flexible ventless design so you can install virtually anywhere. Bundle with an eligible washer for $200 off, plus up to $300 off with Trade-In.",
      imageSrc: "/images/hero4.jpg",
      width: 700,
      height: 400,
      badge: "65% Less Energy",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Auto-slide every 10 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  // Handle previous slide
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {currentSlideData.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-white">
            {currentSlideData.subtitle}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-300">
            {currentSlideData.buttonText}
          </button>
          <p className="text-sm text-gray-500 dark:text-white italic">
            {currentSlideData.description}
          </p>
        </div>

        {/* Right: Image Slideshow */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={currentSlideData.imageSrc}
              width={currentSlideData.width}
              height={currentSlideData.height}
              alt={currentSlideData.title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {currentSlideData.badge && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
                {currentSlideData.badge}
              </div>
            )}
            {/* Left Arrow */}
            <button
              onClick={goToPreviousSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300 z-20"
            >
              <FiChevronLeft size={24} />
            </button>
            {/* Right Arrow */}
            <button
              onClick={goToNextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300 z-20"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-red-500' : 'bg-blue-700 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
            About Us
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text and Button */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Leading Experts</h1>
              <p className="text-lg text-gray-600 dark:text-white">
                Interoot is a leading technical company dedicated to providing top-notch repair and maintenance services. With years of experience, we specialize in sound system repairs, broadcasting solutions, and CCTV installations, serving commercial businesses, individuals, and more. Our commitment to excellence ensures we exceed customer expectations with every project.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-300">
                Learn More
              </button>
            </div>
            {/* Right: Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about.jpg" // Placeholder image path, replace with your actual image
                  width={700}
                  height={500}
                  alt="About Interoot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Experience Blocks */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <FaClock className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">8 Years</h3>
              <p className="text-gray-600 dark:text-gray-300">Of Experience</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <FaTools className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">20+ Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">Completed</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <FaUsers className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">75+ Clients</h3>
              <p className="text-gray-600 dark:text-gray-300">Satisfied</p>
            </div>
          </div>
        </div>
      </section>

      {/* People We Work With Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
            People We Work With
          </h2>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="scrolling-partners">
              <Image src="/images/sha.png" width={90} height={50} alt="Partner 1" className="mx-8" />
              <Image src="/images/undp.jpg" width={90} height={50} alt="Partner 2" className="mx-8" />
              <Image src="/images/lnoc.jpg" width={90} height={50} alt="Partner 3" className="mx-8" />
              <Image src="/images/sha.png" width={90} height={50} alt="Partner 4" className="mx-8" />
              <Image src="/images/undp.jpg" width={90} height={50} alt="Partner 5" className="mx-8" />
              <Image src="/images/lnoc.jpg" width={90} height={50} alt="Partner 1" className="mx-8" />
              <Image src="/images/sha.png" width={90} height={50} alt="Partner 2" className="mx-8" />
              <Image src="/images/lnoc.jpg" width={90} height={50} alt="Partner 1" className="mx-8" />
              <Image src="/images/undp.jpg" width={90} height={50} alt="Partner 2" className="mx-8" />
              <Image src="/images/lnoc.jpg" width={90} height={50} alt="Partner 3" className="mx-8" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;