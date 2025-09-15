import React from 'react';
import { LuNetwork } from 'react-icons/lu';
import Link from 'next/link'; // Import Link from next/link
import { NavLinks } from '../../../constant/constant';

const Header = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[10000] fixed w-full">
      <div className="flex items-center h-full justify-between w-[92%] mx-auto">
        <div className="flex items-center sm:space-x-20">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-col">
              <LuNetwork className="w-5 h-5 text-white" />  
            </div>
            <h1 className="text-cl hidden sm:block md:text-2xl text-blue-700 font-bold">
              Interoot
            </h1>
          </div>

          {/* NAVLINKS */}
          <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((navLink) => (
              <Link
                key={navLink.id}
                href={navLink.url}
                className="text-base hover:text-red-500 font-medium transition-all duration-200"
              >
                {navLink.Label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;