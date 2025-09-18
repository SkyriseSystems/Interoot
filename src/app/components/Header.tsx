"use client";
import React, { useEffect, useState } from 'react';
import { LuNetwork } from 'react-icons/lu';
import Link from 'next/link';
import { NavLinks } from '../../../constant/constant';
import { HiBars3BottomRight } from 'react-icons/hi2';

type props = {
  openNav: () => void;
};

const Header = ({ openNav }: props) => {
  const [NavBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`header-container ${NavBg ? 'nav-bg-active' : ''}`}>
      <div className="header-content">
        <div className="logo-container">
          <div className="logo">
            <LuNetwork className="logo-icon" />
          </div>
          <h1 className="logo-text hidden sm:block">Interoot</h1>
        </div>
        <div className="nav-links hidden lg:flex">
          {NavLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.url}
              className="nav-link"
            >
              <p>{navLink.Label}</p>
            </Link>
          ))}
        </div>
        <div className="button-group">
          <button className="login-button">Login</button>
          <button className="register-button hidden sm:block">Register</button>
          <HiBars3BottomRight onClick={openNav} className="menu-icon lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;