"use client";
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/images/logo.png" // Replace with your logo path in public/images/
              width={80}
              height={40}
              alt="Interoot Logo"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interoot is a leading technical company committed to excellence since 2017, offering top-notch repair and maintenance services for sound systems, TVs, and more.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2">➤</span> Home</a></li>
              <li><a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2">➤</span> Shop</a></li>
              <li><a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2">➤</span> Services</a></li>
              <li><a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2">➤</span> Contact</a></li>
            </ul>
            <h4 className="text-lg font-semibold mt-2 mb-1">Services</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2">➤</span> Repairs</a></li>
              <li><a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2">➤</span> Installations</a></li>
              <li><a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2">➤</span> Consultations</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-300 flex items-center mb-1"><FaMapMarkerAlt className="mr-2 text-blue-700 dark:text-blue-300" /> Main South 1 Road, Ha Abia, Maseru, Lesotho</p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center mb-1"><FaPhone className="mr-2 text-blue-700 dark:text-blue-300" /> +266 5695 0557</p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center"><FaEnvelope className="mr-2 text-blue-700 dark:text-blue-300" /> sales@interoot.co.ls</p>
          </div>

          {/* Social & Legal Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/InterootEng" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300"><FaFacebookF size={20} /></a>
              <a href="https://api.whatsapp.com/send/?phone=%2B26656950557&text=Chat+started+via+www.interoot.co.ls&type=phone_number&app_absent=0" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300"><FaWhatsapp size={20} /></a>
              <a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-600 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Interoot. All rights reserved.
            | <a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300">Privacy Policy</a>
            | <a href="#" className="text-blue-700 dark:text-blue-300 hover:text-red-500 transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;