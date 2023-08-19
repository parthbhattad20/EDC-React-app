import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div name="about" className="w-full h-full  text-[#D1D7E0] sm:my-6">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <Slide triggerOnce={true}>
                        <p className="text-4xl font-bold inline  border-yellow-300 mt-10 text-[#66F6F1]">
                            About
                        </p>
                    </Slide>
                </div>
                <Fade triggerOnce={true}>
                    <p className="text-xl mt-5 text-justify">
                    Welcome to the Entrepreneurship Cell (E-Cell) PVG, a dynamic platform igniting and nurturing the entrepreneurial spirit. We empower innovators, thinkers, and doers to transform their ideas into tangible ventures. Through workshops, mentorship, and networking events, we cultivate essential skills and provide real-world exposure. E-Cell PVG is a thriving ecosystem where creativity and business converge, propelling startups towards success. Join us to connect with like-minded enthusiasts, access invaluable resources, and embark on a journey of innovation and growth. Let's together drive the future of entrepreneurship and make ideas happen.
                    </p>
                </Fade>
                <div className="mt-5">
                        <Slide triggerOnce={true}>
                            <a
                                href="https://ecell-events.netlify.app/"
                                smooth
                                duration={500}
                                className="group text-[#C5C6C7] w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-[#66F6F1] cursor-pointer"
                            >
                                Events
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight
                                        size={25}
                                        className="ml-1"
                                    />
                                </span>
                            </a>
                        </Slide>
                        </div>

                <br />
            </div>
        </div>
    );
};

export default About;
