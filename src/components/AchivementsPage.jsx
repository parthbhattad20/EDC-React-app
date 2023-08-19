import React from "react";
import Achievement from "../components/Achivement"; 
import achievementImage from "../assests/bgimg4.jpg"; 

const AchievementsPage = () => {
    return (
        <div className="container mx-auto  px-4 ">
            <h1 className=" font-semibold mb-10 text-4xl  text-[#66F6F1] ">Achievements</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Achievement
                    image={achievementImage}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan orci eget ex consectetur, eu venenatis ligula egestas."
                />
                    <Achievement
                    image={achievementImage}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan orci eget ex consectetur, eu venenatis ligula egestas."
                />
             
            </div>
        </div>
    );
};

export default AchievementsPage;
