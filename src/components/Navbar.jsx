import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="bg-[#474B4F] p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer transition-colors hover:text-[#86C232]"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer transition-colors hover:text-[#86C232]"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer transition-colors hover:text-[#86C232]"
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer transition-colors hover:text-[#86C232]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
