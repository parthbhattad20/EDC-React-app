import React from "react";

import { Fade } from "react-awesome-reveal";
import bgimg from "../assests/bgimg3.jpg"

const Home = () => {
    return (
        <div
            name="home"
            className="  h-screen w-full bg-cover bg-center relative "
            style={{
                backgroundImage:`url(${bgimg})`,
            }}
        >
            <div className="max-w-screen-lg mx-auto flex flex-col h-full px-4 md:flex-row">
                <div className="flex flex-col mt-20 justify-start h-[200px]  justify-end w-full align-baseline">
                    <Fade triggerOnce={true}>
                        <h2 className="text-4xl sm:text-7xl font-bold text-[#66F6F1] ">
                            Welcome to E-cell PVG
                        </h2>

                        {/* <p className="text-[#C5C6C7] text-justify py-4 max-w-screen-lg w-full lg:text-2xl  ">
                            Enter the dynamic realm of E-Cell PVG, where
                            innovation meets entrepreneurship. We fuel the
                            spirit of inventive minds through workshops, events,
                            and a tight-knit community. From refining business
                            acumen to incubating startups, we're the launchpad
                            for visionary leaders. Step into a world where ideas
                            evolve into impactful ventures, shaping the
                            entrepreneurial landscape. Let's collaborate to
                            redefine the future of success.
                        </p> */}
                    </Fade>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
