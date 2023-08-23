import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assests/edclogo.png'; 



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-3 absolute bg-transparent w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="home" smooth={true} offset={-70} duration={500}>
          <img src={logo} alt="Logo" className="w-16 h-auto" />
        </Link>
        <div className={`flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
          >
            About
          </Link>
          <Link
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
          >
            Team
          </Link>
          <Link
            to="achievements"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
          >
            Achievements
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
          >
            Contact
          </Link>
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 bg-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

