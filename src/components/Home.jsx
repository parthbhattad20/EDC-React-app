import React from "react";
import { Slide } from "react-awesome-reveal";
import bgimg from "../assests/bgimg4.jpg";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bgimg})`,
            }}
        >
            <div
                className="max-w-screen mx-auto flex flex-col h-full px-4 md:flex-row"
                style={{
                    backdropFilter: "blur(3px)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <div className=" text-[#66F6F1] items-center flex flex-col mt-20 justify-center h-[600px] w-full">
                    <div>
                        <Slide triggerOnce={true}>
                            <h2 className=" text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b ">
                                Inspire.
                            </h2>
                        </Slide>
                    </div>
                    <div>
                        <Slide triggerOnce={true}>
                            <h2 className=" mx-auto text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b">
                                Aspire.Innovate.
                            </h2>
                        </Slide>
                    </div>
                    <Slide triggerOnce={true}>
                        <h1 className=" text-[#1E3A8A] mx-auto text-4xl sm:text-7xl font-bold  mb-6 uppercase font-serifborder-b">
                            E-CELL PVG
                        </h1>
                    </Slide>
                    <a
                        href="https://master--ecell-events.netlify.app/"
                        className="text-white border-2 border-[#3E8DE3] py-2 px-4 rounded-md font-semibold transition hover:bg-[#4ECEE6] duration-300"
                    >
                        Explore Events
                    </a>
                    <div className=" bg-black fixed bottom-1 right-1 hover:opacity-100 transition duration-300">
                        <h1 className="text-white ">Scroll down</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
