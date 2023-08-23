import React from "react";

import { Fade, Slide } from "react-awesome-reveal";


const About = () => {
    return (
        <div name="about" className="w-full h-full  text-[#D1D7E0] sm:my-3">
         
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-3 text-center">
                    <Slide triggerOnce={true}>
                        <p className="text-4xl font-bold inline  border-yellow-300 mt-20 text-[#66F6F1]">
                            About
                        </p>
                    </Slide>
                </div>
                <Fade triggerOnce={true}>
                    <p className="text-xl mt-5 text-justify">
                    Welcome to the Entrepreneurship Cell (E-Cell) PVG, a dynamic platform igniting and nurturing the entrepreneurial spirit. We empower innovators, thinkers, and doers to transform their ideas into tangible ventures. Through workshops, mentorship, and networking events, we cultivate essential skills and provide real-world exposure. E-Cell PVG is a thriving ecosystem where creativity and business converge, propelling startups towards success. Join us to connect with like-minded enthusiasts, access invaluable resources, and embark on a journey of innovation and growth. Let's together drive the future of entrepreneurship and make ideas happen.
                    </p>
                </Fade>
            
                <br />
            </div>
        </div>
    );
};

export default About;
