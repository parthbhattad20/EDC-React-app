import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Whatwedo = () => {
    return (
        <div>
            <div name="about" className="w-full h-full text-[#D1D7E0] sm:my-6">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <Slide triggerOnce={true}>
                            <p className="text-4xl font-bold inline  mt-10  text-white">
                                Who we are
                            </p>
                        </Slide>
                    </div>
                    <Fade triggerOnce={true}>
                        <p className="text-xl mt-5 text-justify">
                        At E-Cell PVG, we are a vibrant community dedicated to fostering entrepreneurship. We empower individuals to realize their innovative potential, offering workshops, mentorship, and networking opportunities. As a launchpad for startups, we facilitate the journey from ideas to impactful ventures. Our dynamic platform merges creativity with business acumen, equipping aspiring entrepreneurs with vital skills. Join us to connect with like-minded visionaries, access resources, and cultivate real-world insights. Together, we shape the future of entrepreneurship, where innovation thrives, ideas flourish, and success knows no bounds.
                        </p>
                    </Fade>

                    <br />
                </div>
            </div>
        </div>
    );
};

export default Whatwedo;
