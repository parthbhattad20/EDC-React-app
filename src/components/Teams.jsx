import React from "react";
import Swaroop from "../assests/swaroop.jpg";
// import Shreekar from "../assests/EDC SHREEKAR.jpg";
import ruchita from "../assests/ruchita.jpeg";
// import anushray from "../assests/anushray.png";
// import prithvi from "../assests/prithvi .png";
// import prathamesh from "../assests/prathamesh.jpg";
// import mitesh from "../assests/mitesh.jpg";
// import Gauri from "../assests/gauri.jpeg";
import pritam from "../assests/pritam.jpg";

const Teams = () => {
    return (
        <div name="team">
            <div className="py-20  to-black">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-cyan-400 font-bold md:text-4xl">
           Meet the team
          </h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
       
          </p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={Swaroop}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div>
              <h4 className="text-2xl text-white">Swaroop Bharaskar</h4>
              <span className="block text-sm text-gray-500">General Secretary</span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64"
              src={ruchita}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Jonathan Doe</h4>
              <span className="block text-sm text-gray-500">Chief Technical Officer</span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={pritam}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Anabelle Doe</h4>
              <span className="block text-sm text-gray-500">Chief Operations Officer</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Teams;
