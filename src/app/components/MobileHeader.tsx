import React from 'react';
import { NavLinks } from '../../../constant/constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileHeader = ({ closeNav, showNav }: props) => {
  const navOpen = showNav ? "nav-open" : "nav-closed";
  return (
    <div>
      <div className={`overlay ${navOpen}`}></div>
      <div className={`mobile-nav ${navOpen}`}>
        {NavLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.url}>
            <p className="mobile-nav-link">
              {navLink.Label}
            </p>
          </Link>
        ))}
        <CgClose onClick={closeNav} className="close-icon" />
      </div>
    </div>
  );
};

export default MobileHeader;