import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Fade, Slide } from "react-awesome-reveal";
import bgimg from "../assests/bgimg.jpg"

const Home = () => {
    return (
        <div
            name="home"
            className=" sm:h-[500px] h-screen w-full bg-cover bg-center relative "
            style={{
                backgroundImage:`url(${bgimg})`,
            }}
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full mt-10 w-full">
                    {/* <Fade triggerOnce={true}>
                        <h2 className="text-4xl sm:text-7xl font-bold text-[#66F6F1]  mt-20 ">
                            Welcome to E-cell PVG
                        </h2>

                        <p className="text-[#C5C6C7] text-justify py-4 max-w-screen-lg w-full lg:text-2xl  ">
                            Enter the dynamic realm of E-Cell PVG, where
                            innovation meets entrepreneurship. We fuel the
                            spirit of inventive minds through workshops, events,
                            and a tight-knit community. From refining business
                            acumen to incubating startups, we're the launchpad
                            for visionary leaders. Step into a world where ideas
                            evolve into impactful ventures, shaping the
                            entrepreneurial landscape. Let's collaborate to
                            redefine the future of success.
                        </p>
                    </Fade> */}

                    <div>
                        {/* <Slide triggerOnce={true}>
                            <a
                                href="https://ecell-events.netlify.app/"
                                smooth
                                duration={500}
                                className="group text-[#C5C6C7] w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-[#66F6F1] cursor-pointer"
                            >
                                Events
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight
                                        size={25}
                                        className="ml-1"
                                    />
                                </span>
                            </a>
                        </Slide> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
