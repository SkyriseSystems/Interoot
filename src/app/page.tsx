"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaClock, FaTools, FaUsers } from 'react-icons/fa';
import Footer from './components/Footer';

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null); // State to manage which FAQ is open
  const slides = [
    {
      title: "Join us & Receive the Best repair solutions",
      subtitle: "Sound System Repairs, Broadcasting & CCTV Solutions",
      buttonText: "GET QUOTE",
      description: "We are technical Company aimed to serve commercial, businesses and individuals. We provide quick and quality services that exceed expectations of our esteemed customers. The company undertakes mechanical, electrical and electronics services. Interoot earned a reputation for excellent, quality and quick response to emergency faults.",
      imageSrc: "/images/hero3.jpg",
      width: 600,
      height: 400,
    },
    {
      title: "Expert TV Repair Services",
      subtitle: "Flat- screen, sumsung, lg, and many more",
      buttonText: "GET QUOTE",
      description: "Restore your TV to perfect condition with our professional repair solutions. We handle all brands and issues, from screen repairs to audio faults, ensuring fast and reliable service. Trust Interoot for quality craftsmanship and quick turnaround times.",
      imageSrc: "/images/hero2.jpg",
      width: 600,
      height: 400,
      badge: "65% Less Energy",
    },
    {
      title: "Radio Sound Systems Repair",
      subtitle: "Premium Radio Sound Systems Repair",
      buttonText: "GET QUOTE",
      description: "Revive your audio experience with our expert repair services for radio and sound systems. We address all technical issues with precision, offering quick fixes and top-notch quality to keep your sound crystal clear. Rely on Interoot for dependable solutions.",
      imageSrc: "/images/hero1.jpg",
      width: 700,
      height: 400,
      badge: "10% OFF",
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

  // Toggle FAQ accordion
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What products do you offer?",
      answer: "We offer a wide range of products including speakers, headphones, laptops, laptop bags, and TVs, all with the latest technology and best deals.",
    },
    {
      question: "How long does repair service take?",
      answer: "Repair services typically take 2-5 business days depending on the complexity, with emergency repairs available within 24 hours.",
    },
    {
      question: "Do you offer warranties on products?",
      answer: "Yes, all products come with a standard 1-year warranty, with extended options available for purchase.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unopened products. Please contact us for return instructions within this period.",
    },
  ];

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
              <Image src="/images/lnoc.jpg" width={90} height={50} alt="Partner 1" className="mx-8" />
              <Image src="/images/undp.jpg" width={90} height={50} alt="Partner 2" className="mx-8" />
              <Image src="/images/lnoc.jpg" width={90} height={50} alt="Partner 3" className="mx-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Take your home entertainment to new heights
          </h2>
          <nav className="flex justify-center space-x-8 mb-12 text-gray-600 dark:text-gray-300 text-sm">
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-300">Trending TVs</a>
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-300">Audio</a>
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-300">Lifestyle Screens</a>
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-300">webOS Smart Platform</a>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Binge-worthy deals */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/tv.jpg" // Replace with actual image for TV deals
                  width={400}
                  height={300}
                  alt="Binge-worthy deals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Binge-worthy deals for all
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Take advantage of limited-time offers on your favorite movies, live sports, and more on your new LG TV. Available exclusively.
                </p>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-300 w-full">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Card 2: Future of Sound */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/sound.jpg" // Replace with actual image for audio
                  width={400}
                  height={300}
                  alt="Future of Sound"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  The Future of Sound is Now
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Elevate your listening experience with audio crafted by multi-platinum artist will.i.am.
                </p>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-300 w-full">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Card 3: Elevate Gaming */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/xbox.jpg" // Replace with actual image for gaming
                  width={400}
                  height={300}
                  alt="Elevate Gaming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Elevate your gaming with
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Xbox Game Pass Ultimate. Just launch the Xbox app on your LG TV for access to hundreds of premium titles.
                </p>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-300 w-full">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Card 4: Brilliant Vibrant Color */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/laptop.jpg" // Replace with actual image for webOS
                  width={400}
                  height={300}
                  alt="Brilliant Vibrant Color"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Brilliantly Vibrant Color,
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Stunningly Smart laptop, with high resolution and equiped with windows and microsoft office. With the best deals available.
                </p>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-300 w-full">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 dark:border-gray-600 rounded-lg">
                <button
                  className="w-full text-left p-4 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-700 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors duration-300">
              View All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;