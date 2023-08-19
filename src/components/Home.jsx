import React from "react";
import { Fade } from "react-awesome-reveal";
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
                    backdropFilter: "blur(2px)", // Apply the blur effect to the background
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                }}
            >
                <div className="items-center flex flex-col mt-20 justify-center h-[600px] w-full">
                    <Fade triggerOnce={true}>
                        <h2 className="text-4xl sm:text-7xl font-bold text-[#66F6F1] mb-6 ">
                            Innovative Catalysts
                        </h2>
                    </Fade>
                    <a
                        href="https://master--ecell-events.netlify.app/" // Replace with the actual link to your events section
                        className="text-white border-2 border-[#66F6F1] py-2 px-4 rounded-md font-semibold transition hover:bg-[#4ECEE6] duration-300"
                    >
                        Explore Events
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
