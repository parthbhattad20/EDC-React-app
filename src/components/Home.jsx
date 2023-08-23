import React from "react";
import {Slide } from "react-awesome-reveal";
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
                    <Slide triggerOnce={true} direction="right">
                        <h2 className=" text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b ">
                        Innovate.
                        </h2>
                    </Slide>
                    </div>
                    <Slide triggerOnce={true} >
                        <h2 className=" mx-auto text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b">
                        Aspire.
                        </h2>
                    </Slide>
                    <a
                        href="https://master--ecell-events.netlify.app/" 
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
