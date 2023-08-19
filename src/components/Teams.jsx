import React from "react";
import Swaroop from "../assests/swaroop.jpg";
import sharvari from "../assests/sk.jpeg"
import shreekar from "../assests/shrik.jpeg"
import anushray from "../assests/ap.jpeg"
import ruchita from "../assests/ruchita.jpeg"
import mitesh from "../assests/mk.jpeg"
import prathamesh from "../assests/pb.jpeg"
import parth from "../assests/parb.jpeg"
import prithvi from "../assests/prithp.jpeg"
import pritam from "../assests/pp.jpeg"
import jayesh from "../assests/jd.jpeg"
import rajasee from "../assests/rt2.jpeg"
import gauri from "../assests/gj.jpeg"
import shreya1 from "../assests/sps.jpeg"
import shreya2 from "../assests/spp.jpeg"

import { Fade,Slide } from "react-awesome-reveal";

const Teams = () => {
    return (
        <div name="team ">
            <div className="py-10">
      <div className="container mx-auto px-6   ">
        <div className="mb-16 text-center">
          <Slide triggerOnce={true}>
          <h2 className=" text-4xl mb-4 text-2xl text-[#66F6F1] font-bold md:text-4xl ">
           Meet the team
          </h2>
          </Slide>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
       
          </p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center mb-4">
          <Slide triggerOnce={true} direction="right">
            <img
              className="w-64 h-64 mx-auto object-cover hover:scale-110 transition duration-300 ease-in-out rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={Swaroop}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Swaroop Bharaskar</h4>
              <span className="block text-sm text-gray-500">General Secretary</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64"
              src={sharvari}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Sharvari Karhe </h4>
              <span className="block text-sm text-gray-500">Jt.General Secretary</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} direction="right">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={shreekar}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
              <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Shreekar Kulkarni</h4>
              <span className="block text-sm text-gray-500">Treasurer</span>
              </Fade>
            </div>

            

            
            
          </div>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={anushray}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white ">Anushray Pingale</h4>
              <span className="block text-sm text-gray-500">Head of Sponsorship</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} direction="right" >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64"
              src={ruchita}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Ruchita Kagne</h4>
              <span className="block text-sm text-gray-500">Thrust Secretary</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={mitesh}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
              <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Mitesh Kulkarni</h4>
              <span className="block text-sm text-gray-500">Media Head</span>
              </Fade>
            </div>

            

            
            
          </div>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} direction="right">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={prathamesh}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Prathamesh Bhagwat</h4>
              <span className="block text-sm text-gray-500">Design Head</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} direction="right">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64"
              src={parth}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Parth Bhattad</h4>
              <span className="block text-sm text-gray-500">Tech Head</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={prithvi}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
              <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Prithviraj Patil</h4>
              <span className="block text-sm text-gray-500">NEC Head</span>
              </Fade>
            </div>

            

            
            
          </div>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} direction="right">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={pritam}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Pritam Patil</h4>
              <span className="block text-sm text-gray-500">PR Head</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64"
              src={jayesh}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Jayesh Suryawanshi</h4>
              <span className="block text-sm text-gray-500">Startup Executive</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} direction="right">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={rajasee}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
              <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Rajasee Thakre</h4>
              <span className="block text-sm text-gray-500">Content Developement Head</span>
              </Fade>
            </div>

            

            
            
          </div>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true}>
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={gauri}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Gauri Jadhav</h4>
              <span className="block text-sm text-gray-500">Aesthetics Head</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center mb-3">
          <Slide triggerOnce={true} direction="right" >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64"
              src={shreya1}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
            <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Shreya V. Patil</h4>
              <span className="block text-sm text-gray-500">Documentation Head</span>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 text-center">
          <Slide triggerOnce={true} >
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={shreya2}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            </Slide>
            <div>
              <Fade triggerOnce={true}>
              <h4 className="text-2xl text-white">Shreya S. Patil</h4>
              <span className="block text-sm text-gray-500">Documentation Co-Head</span>
              </Fade>
            </div>

            

            
            
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Teams;
