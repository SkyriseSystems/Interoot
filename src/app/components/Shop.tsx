'use client';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Shop() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(150);

  const products = [
    { name: 'Laptops', origPrice: 130.00, discPrice: 110.00, img: '/images/laptop.jpg', desc: 'High-performance laptops for all needs.' },
    { name: 'TVs', origPrice: 85.00, discPrice: 70.00, img: '/images/tv.jpg', desc: 'Crystal-clear displays for your entertainment.' },
    { name: 'AVs', origPrice: 60.00, discPrice: 39.00, img: '/images/av.jpg', desc: 'Top-quality audio-visual systems.' },
    { name: 'Laptop Bags', origPrice: 75.00, discPrice: 55.00, img: '/images/page-1.jpeg', desc: 'Stylish and durable protection for your device.' },
    { name: 'Sound Systems', origPrice: 60.00, discPrice: 39.00, img: '/images/sound-system.jpg', desc: 'Immersive audio experience for any space.' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.name);
    const matchesPrice = product.discPrice <= priceRange;
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="shop-hero-section py-20 bg-gradient-to-br from-blue-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Discover Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Explore a wide range of high-quality electronics and accessories at unbeatable prices.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/shop" className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-red-500 text-white rounded-lg font-medium transition-colors">
              Shop Now <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">Filters</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {['Laptops', 'TVs', 'AVs', 'Laptop Bags', 'Sound Systems'].map((cat) => (
                <li key={cat} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, cat]);
                      } else {
                        setSelectedCategories(selectedCategories.filter((c) => c !== cat));
                      }
                    }}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">{cat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>
            <input
              type="range"
              min="0"
              max="150"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <p className="text-sm text-gray-600 mt-2">Up to ${priceRange}</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-red-500 font-bold text-lg">${product.discPrice.toFixed(2)}</span>
                      <span className="text-gray-400 line-through ml-2">${product.origPrice.toFixed(2)}</span>
                    </div>
                    <button className="px-2 py-1 bg-blue-500 hover:bg-red-500 text-white rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}