'use client';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Training {
  title: string;
  author: string;
  content: string;
  category: string;
  image: string;
}

export default function TrainingPage() {
  const trainings: Training[] = [
    { title: 'How to Make the Most of Training: Cover the Story of Rashi and Amar', author: 'Rashi Khan', content: 'Learn how Rashi and Amar maximized their training experience.', category: 'TV Repair Training', image: '/images/blog1.jpg' },
    { title: 'How Training Charts Like NOVA Benefits Are Bridging Gaps in the Health Sector', author: 'Sanya Tyer', content: 'Explore the impact of training in healthcare.', category: 'Laptop Repair Training', image: '/images/blog2.jpg' },
    { title: 'What is a Contingent Beneficiary?', author: 'Sakshi Maheshwari', content: 'Understand the role of a contingent beneficiary.', category: 'TV Repair Training', image: '/images/blog2.jpg' },
    { title: 'How to Measure the Impact of a Corporate Wellness Program?', author: 'Bhavna Chaturvedi', content: 'Measure the success of wellness initiatives.', category: 'Sound Repair Training', image: '/images/blog1.jpg' },
    { title: 'Why Jeena, Capillary Technologies and Klint Made the Switch to NOVA Benefits', author: 'Bindu Jain', content: 'Discover the switch to NOVA Benefits.', category: 'Laptop Repair Training', image: '/images/blog2.jpg' },
    { title: 'How NOVA Benefits Curated the Best Group Health Insurance and Employee Benefit Plan Handbook', author: 'Rachita Tamboli', content: 'A guide to the best benefit plans.', category: 'AV Repair Training', image: '/images/blog3.jpg' },
    { title: 'How Many HR Tools Do You Need, Before You Have AI?', author: 'Bindu Jain', content: 'Evaluate HR tools and AI integration.', category: 'Security Training', image: '/images/blog1.jpg' },
    { title: 'FAQs to Covid-19 Vaccination', author: 'Bindu Jain', content: 'Get answers to common vaccination questions.', category: 'TV Repair Training', image: '/images/blog3.jpg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const trainingsPerPage = 6;

  const filteredTrainings = selectedCategory
    ? trainings.filter((training) => training.category === selectedCategory)
    : trainings;

  const indexOfLastTraining = currentPage * trainingsPerPage;
  const indexOfFirstTraining = indexOfLastTraining - trainingsPerPage;
  const currentTrainings = filteredTrainings.slice(indexOfFirstTraining, indexOfLastTraining);
  const totalPages = Math.ceil(filteredTrainings.length / trainingsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-red-500 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Explore Our Trainings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Dive into a variety of training resources designed to enhance your skills.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/TrainingPage" className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-red-500 text-white rounded-lg font-medium transition-colors">
              Start Training <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">Categories</h2>
          <ul className="space-y-3">
            {['TV Repair Training', 'Laptop Repair Training', 'Sound Repair Training', 'AV Repair Training', 'Security Training'].map((cat) => (
              <li
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`cursor-pointer text-gray-700 ${selectedCategory === cat ? 'font-bold text-blue-600' : ''} hover:text-red-500 transition-colors`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Training Grid */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-6">All Trainings</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <AnimatePresence>
              {currentTrainings.map((training, index) => (
                <motion.div
                  key={training.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img src={training.image} alt={training.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{training.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">By {training.author}</p>
                  <p className="text-gray-600 text-sm">{training.content}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="navigation flex justify-center items-center mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 hover:bg-red-500 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed mr-2"
            >
              <FiArrowLeft />
            </button>
            <span className="mx-4">Page {currentPage} of {totalPages}</span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 hover:bg-red-500 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}