import React from "react";

import { Fade } from "react-awesome-reveal";
import bgimg from "../assests/bgimg4.jpg"

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
                <div className=" items-center flex flex-col mt-20 justify-start h-[200px]  justify-end w-full align-baseline">
                    <Fade triggerOnce={true}>
                        <h2 className="text-4xl sm:text-7xl font-bold text-[#66F6F1] ">
                          We Aspire To Inspire

                                         </h2>

                        </Fade>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
