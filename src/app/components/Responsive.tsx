'use client';
import React, { useState } from 'react'
import MobileHeader from './MobileHeader'
import Header from './Header'

const Responsive = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Header openNav={openNavHandler} />
      <MobileHeader showNav={showNav} closeNav={closeNavHandler} />
     
    </div>
  )
}

export default Responsive
