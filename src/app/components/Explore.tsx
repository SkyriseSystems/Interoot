
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTools, FaCogs, FaChalkboardTeacher, FaDraftingCompass } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi'; // Corrected import
import { motion } from 'framer-motion';

const ExplorePage = () => {
  const [inViewServices, setInViewServices] = useState(false);
  const [inViewRepairs, setInViewRepairs] = useState(false);

  const services = [
    { title: 'Installation', description: 'Professional setup of audio, video, and security systems tailored to your needs.', icon: FaTools },
    { title: 'Maintenance', description: 'Regular upkeep to ensure optimal performance and longevity of your equipment.', icon: FaCogs },
    { title: 'Training', description: 'Hands-on sessions to empower your team with the knowledge to operate systems effectively.', icon: FaChalkboardTeacher },
    { title: 'Design', description: 'Custom solutions from concept to implementation for seamless integration.', icon: FaDraftingCompass },
  ];

  const repairs = [
    { title: 'Radio Station Relocations', description: 'Seamless migration of broadcasting equipment with minimal downtime.', imageSrc: '/images/speaker-repair.jpg' },
    { title: 'Health Monitors', description: 'Repair and calibration of medical monitoring devices for reliability.', imageSrc: '/images/health.jpg' },
    { title: 'Amplifiers', description: 'Restoration of audio amplifiers to peak performance.', imageSrc: '/images/amplifier1.jpg' },
    { title: 'UPS', description: 'Uninterruptible power supply repairs to prevent outages.', imageSrc: '/images/ups-repair.jpg' },
    { title: 'Security Grid (Electrical Fence & Camera)', description: 'Comprehensive fixes for fencing and CCTV systems.', imageSrc: '/images/security.jpg' },
    { title: 'AV', description: 'Audiovisual equipment repairs for clear sound and visuals.', imageSrc: '/images/av.jpg' },
    { title: 'Digital Electronics', description: 'Troubleshooting and repair of modern digital devices.', imageSrc: '/images/digital-electronics.jpg' },
    { title: 'Pro PA', description: 'Professional public address system maintenance and repairs.', imageSrc: '/images/pro-pa.jpg' },
    { title: 'Egg incubator', description: 'Professional egg incubator system maintenance and repairs.', imageSrc: '/images/egg-incubator.jpg' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'services-section') setInViewServices(true);
          if (entry.target.id === 'repairs-section') setInViewRepairs(true);
        }
      },
      { threshold: 0.1 }
    );

    const servicesElement = document.querySelector('#services-section');
    const repairsElement = document.querySelector('#repairs-section');

    if (servicesElement) observer.observe(servicesElement);
    if (repairsElement) observer.observe(repairsElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="explore-hero-section py-20 bg-gradient-to-br from-blue-600 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="explore-hero-title mb-4"
            >
              Explore Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="explore-hero-subtitle mb-8 max-w-2xl mx-auto"
            >
              Discover comprehensive solutions in repairs, installations, and more for your technical needs.
            </motion.p>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact" className="explore-hero-button">
                Get Started <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services-section" className="explore-services-section py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={inViewServices ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="explore-section-title mb-12 text-center"
            >
              Our Core Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inViewServices ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="explore-service-card"
                >
                  <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <service.icon className="explore-service-icon mx-auto mb-4" size={40} />
                    <h3 className="explore-service-title mb-2">{service.title}</h3>
                    <p className="explore-service-description text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Repairs Section */}
        <section id="repairs-section" className="explore-repairs-section py-16 bg-gray-100 dark:bg-gray-700">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={inViewRepairs ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="explore-section-title mb-12 text-center"
            >
              Specialized Repairs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repairs.map((repair, index) => (
                <motion.div
                  key={repair.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inViewRepairs ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="explore-repair-card"
                >
                  <div className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
                    <div className="explore-repair-image-container">
                      <Image
                        src={repair.imageSrc}
                        width={400}
                        height={200}
                        alt={repair.title}
                        className="explore-repair-image"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="explore-repair-title mb-2">{repair.title}</h3>
                      <p className="explore-repair-description text-gray-600 dark:text-gray-300 text-sm">{repair.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/Shop" className="explore-cta-button">
                Visit Shop 
              </Link>
              <Link href="/Solutions" className="explore-cta-button ml-4">
                View Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ExplorePage;
