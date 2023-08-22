import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assests/changedlogo.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white py-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <img src={logo} alt="" className="h-[60px]" />
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link
                        to="home"
                        smooth={true}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        About
                    </Link>
                    <Link
                        to="achievement"
                        smooth={true}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Achievements
                    </Link>
                    <Link
                        to="team"
                        smooth={true}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Team
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Contact
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-white focus:outline-none transition ease-in-out duration-300"
                    >
                        <svg
                            className="h-10 w-10 mr-4 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.256 4.256a1 1 0 011.497-1.32l13.998 14a1 1 0 01-1.32 1.497l-13.998-14a1 1 0 01.823-1.813z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h16a1 1 0 100-2H4z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black transition-opacity duration-300">
                    <Link
                        to="home"
                        smooth={true}
                        className="block py-2 px-4 hover:bg-gray-700 text-center"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        className="block py-2 px-4 hover:bg-gray-700 text-center"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="achievement"
                        smooth={true}
                        className="block py-2 px-4 hover:bg-gray-700 text-center"
                        onClick={toggleMenu}
                    >
                        Achievements
                    </Link>
                    <Link
                        to="team"
                        smooth={true}
                        className="block py-2 px-4 hover:bg-gray-700 text-center"
                        onClick={toggleMenu}
                    >
                        Team
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        className="block py-2 px-4 hover:bg-gray-700 text-center"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
