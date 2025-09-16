"use client";
import React, { useEffect, useState } from 'react';
import { LuNetwork } from 'react-icons/lu';
import Link from 'next/link'; // Import Link from next/link
import { NavLinks } from '../../../constant/constant';
import { HiBars3BottomRight } from 'react-icons/hi2';
import ThemeToggler from './Helper/ThemeToggler';

type props ={
openNav: () => void;
};
const Header = ({openNav}:props) => {
  const [NavBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return() => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div className={`transition-all 
   ${NavBg ? "bg-white dark:bg-black shadow-md" : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full`}>
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
                className="text-base hover:text-red-500 dark:text-blue-700 font-medium transition-all duration-200">
                <p>{navLink.Label}</p>
              </Link>
            ))}
          </div>
        </div>
        {/*Button*/}
        <div className='flex items-center space-x-4'>
          {/*Login button */}
          <button className='px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-blue-700 hover:bg-red-500 transition-all duration-300 text-white'>
            Login
          </button>
          {/*Register Button */}
          <button className='px-8 py-2.5 text-sm hidden sm:block cursor-pointer rounded-lg bg-blue-700 hover:bg-red-500 trasnsition-all duration-300 text-white'>
            Register
          </button>
          {/*Theme Toggler */}
            <ThemeToggler/>
          {/*Burger menu */}
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden'/>
        </div>
      </div>
    </div>
  );
};

export default Header;