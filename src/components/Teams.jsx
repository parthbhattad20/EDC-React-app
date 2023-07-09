import React from "react";
import Swaroop from "../assests/swaroop.jpg";
import Shreekar from "../assests/EDC SHREEKAR.jpg";
import ruchita from "../assests/ruchita.jpg";
import anushray from "../assests/anushray.png";
import prithvi from "../assests/prithvi .png";
import prathamesh from "../assests/prathamesh.jpg";
import mitesh from "../assests/mitesh.jpg";
import Gauri from "../assests/gauri.jpeg";
import pritam from "../assests/pritam.jpg";

const Teams = () => {
    return (
        <div name="team">
            <section className="bg-gradient-to-b from-gray-800 to-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cyan-400 border-b-4 border-yellow-500 ">
                            Our team
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
                    </div>
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={Swaroop}
                                alt="Swaroop avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Swaroop Bharaskar</a>
                            </h3>
                            <p>General Secretary</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src=""
                                alt="sharvari Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Sharvari Karhe </a>
                            </h3>
                            <p>Jt. General Secretary</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={Shreekar}
                                alt="shreekar Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Shreekar Kulkarni</a>
                            </h3>
                            <p>Treasurer</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={anushray}
                                alt="anushray Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Anushray Pingale</a>
                            </h3>
                            <p>Head of sponsorship</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={ruchita}
                                alt="ruchita Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Ruchita Kagne</a>
                            </h3>
                            <p>Thrust secretary </p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={mitesh}
                                alt="mitesh Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Mitesh Kulkarni</a>
                            </h3>
                            <p>Media Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={prathamesh}
                                alt="prathamesh Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Prathamesh Bhagwat</a>
                            </h3>
                            <p>Design Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src=""
                                alt="Parth Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Parth Bhattad</a>
                            </h3>
                            <p>Technical Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={prithvi}
                                alt="prithvi Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Prithviraj Patil</a>
                            </h3>
                            <p>NEC Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={pritam}
                                alt="Pritam Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Pritam Patil</a>
                            </h3>
                            <p>Public Relation Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src=""
                                alt="jayesh Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Jayesh Suryawanshi</a>
                            </h3>
                            <p>Startup Executive</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src=""
                                alt="Rajasee Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Rajasee Thakre</a>
                            </h3>
                            <p>Content Developement Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={Gauri}
                                alt="Gauri Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Gauri Jadhav</a>
                            </h3>
                            <p>Asthetics Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src=""
                                alt="shreya1 Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Shreya V. Patil</a>
                            </h3>
                            <p>Documentation Head</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src=""
                                alt="Shreya 2 avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="www.google.com">Shreya S. Patil</a>
                            </h3>
                            <p>Documentation Co-Head</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teams;
