import React from "react";
import Swaroop from "../assests/swaroop.jpg";
import sharvari from "../assests/sk43.jpeg";
import shreekar from "../assests/shrik.jpeg";
import anushray from "../assests/ap.jpeg";
import ruchita from "../assests/ruchita.jpeg";
import mitesh from "../assests/mk.jpeg";
import prathamesh from "../assests/pb.jpeg";
import parth from "../assests/parb.jpeg";
import prithvi from "../assests/pp2.jpeg";
import pritam from "../assests/pp.jpeg";
import jayesh from "../assests/jd.jpeg";
import rajasee from "../assests/rt2.jpeg";
import gauri from "../assests/gj.jpeg";
import shreya1 from "../assests/sps.jpeg";
import shreya2 from "../assests/spp.jpeg";
import { FaLinkedin ,FaMailBulk} from "react-icons/fa";



import { Fade ,Slide} from "react-awesome-reveal";

const Teams = () => {
    return (
        <div name="team" className="px-4 py-3 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-3">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div className="text-center text-white text-4xl">
                    <Fade>
                    <p className=" font-bold inline-block px-3 py-px mb-4 tracking-wider text-[#1E3A8A] uppercase rounded-full bg-teal-accent-400">
                        Meet The Team
                    </p>
                    </Fade>
                </div>
                <h2 className="max-w-lg mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative"></span>
                    </span>{" "}
                    
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                   
                </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className=" items-center justify-center relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true}>
                        <img
                            className=" w-60 h-60 object-cover rounded-xl object-center border-2 border-gray-500  md:h-64  xl:h-80 xl:w-full mx-auto  "
                            src={Swaroop}
                            alt="Person"
                        />
                        </Slide>
                        
                      
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Swaroop Bharaskar
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            General Secretary
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                               
                            </p> */}
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} direction="right">
                        <img
                            className=" w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500  md:h-64 xl:h-80 xl:w-full mx-auto "
                            src={sharvari}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Sharvari Karhe
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                               Jt.General Secretary
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Amet I love liquorice jujubes pudding croissant
                                I love pudding.
                            </p> */}
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                 <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} >
                        <img
                            className=" w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500  md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={shreekar}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Shreekar Kulkarni
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                               Treasurer
                            </p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} direction="right">
                        <img
                            className=" w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={anushray}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Anushray Pingale
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Head of Sponsorship
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Lorizzle ipsum bling bling sit amizzle,
                                consectetuer adipiscing elit.
                            </p> */}
                              <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true}>
                        <img
                            className=" w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={ruchita}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Ruchita Kagne
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Thrust Secretary
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Lorizzle ipsum bling bling sit amizzle,
                                consectetuer adipiscing elit.
                            </p> */}
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} direction="right"> 
                        <img
                            className=" w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={parth}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                               Parth Bhattad
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                                Tech Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                             
                            </p> */}
                              <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true}>
                        <img
                            className="w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={pritam}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Pritam Patil
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            PR Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                              
                            </p> */}
                              <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} direction="right">
                        <img
                            className=" w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500  md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={rajasee}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Rajasee Thakre
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Content Developement Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Lorizzle ipsum bling bling sit amizzle,
                                consectetuer adipiscing elit.
                            </p> */}
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true}>
                        <img
                            className=" w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={prithvi}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Prithviraj Patil
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            NEC Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Lorizzle ipsum bling bling sit amizzle,
                                consectetuer adipiscing elit.
                            </p> */}
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} direction="right">
                        <img
                            className="w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500  md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={mitesh}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Mitesh Kulkarni
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Media Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Lorizzle ipsum bling bling sit amizzle,
                                consectetuer adipiscing elit.
                            </p> */}
                             <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true}>
                        <img
                            className="w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={prathamesh}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                               Prathamesh Bhagwat
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Design Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Lorizzle ipsum bling bling sit amizzle,
                                consectetuer adipiscing elit.
                            </p> */}
                           <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} direction="right">
                        <img
                            className="w-60 h-60 -cover border-2 rounded-xl object-center border-2 border-gray-500  md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={jayesh}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Jayesh Surywanshi
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Startup Executive
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Bacon ipsum dolor sit amet salami jowl corned
                                beef, andouille flank.
                            </p> */}
                          <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true}>
                        <img
                            className="w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500  md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={gauri}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Gauri Jadhav
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Aesthetics Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Moonfish, steelhead, lamprey southern flounder
                                tadpole fish bigeye.
                            </p> */}
                              <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true} direction="right">
                        <img
                            className="w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={shreya1}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Shreya V. Patil
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Documentation Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Veggies sunt bona vobis, proinde vos postulo
                                esse magis grape pea.
                            </p> */}
                             <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Slide triggerOnce={true}>
                        <img
                            className="w-60 h-60 object-cover border-2 rounded-xl object-center border-2 border-gray-500  md:h-64 xl:h-80 xl:w-full mx-auto"
                            src={shreya2}
                            alt="Person"
                        />
                        </Slide>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Shreya S. Patil
                            </p>
                            <p className="mb-4 text-xs text-gray-100">
                            Documentation Co-Head
                            </p>
                            {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                                I love cheese, especially airedale queso. Cheese
                                and biscuits halloumi.
                            </p> */}
                              <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                   <FaLinkedin size={25}/>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                  <FaMailBulk size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Teams;
