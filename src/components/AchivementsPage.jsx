import React from "react";
import Achievement from "../components/Achivement"; 
import achievementImage from "../assests/nec.jpeg"; 
import venturers from "../assests/bgimg.jpg"

const AchievementsPage = () => {

    return (
        <div name="achievements" className="container mx-auto  px-4 text-center ">
            <h1 className="  mb-10 text-4xl  text-[#00FFFF] uppercase  font-bold">Achievements</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Achievement
                    image={achievementImage}
                    description="A dedicated team of ED-Cell PVG showcased a remarkable performance at NEC by IIT Bombay, securing an impressive rank 17 and advancing to the semi-finals. This remarkable achievement marked a significant milestone as they became the first college from Pune to reach such a prestigious position in the NEC 2023."
                />
                    <Achievement
                    image={venturers}
                    description="Venturers 2022, led by ED-Cell PVGCOET, was a two-day event that showcased remarkable event planning, attracting a significant audience. It provided a platform for interaction among industry leaders, experts, established and emerging entrepreneurs, academics, and students. The event's flawless execution featured a variety of activities, highlighting their expertise in nurturing entrepreneurship and innovation within a vibrant community setting."
                />
             
            </div>
        </div>
    );
};

export default AchievementsPage;
