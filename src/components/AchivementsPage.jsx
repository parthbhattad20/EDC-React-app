import React from "react";
import Achievement from "../components/Achivement"; 
import achievementImage from "../assests/nec.jpeg"; 
import venturers from "../assests/bgimg.jpg"

const AchievementsPage = () => {

    return (
        <div name="achievements" className="container mx-auto  px-4 text-center ">
            <h1 className="  mb-10 text-4xl  text-[#1E3A8A] uppercase  font-bold">Achievements</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Achievement
                    image={achievementImage}
                    description="A dynamic team from EDC-PVG showcased remarkable innovation at NEC by IIT Bombay, securing a spot in the top 30. Their ingenuity shone in a competitive environment of entrepreneurship."
                />
                    <Achievement
                    image={venturers}
                    description="E Cell PVG demonstrated exceptional event organization with Venturers 2022 drawing a substantial crowd. Their seamless execution encompassed diverse events, showcasing their prowess in fostering entrepreneurship and innovation within a vibrant community atmosphere."
                />
             
            </div>
        </div>
    );
};

export default AchievementsPage;
