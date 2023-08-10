import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Fade,Slide } from "react-awesome-reveal";










const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-10 w-full">
          <Fade triggerOnce={true}>
           
          <h2 className="text-4xl sm:text-7xl font-bold text-cyan-400  mt-20 ">
          Welcome to  E-cell PVG
          </h2>
     
          
          <p className="text-white text-justify py-4 max-w-screen-lg w-full lg:text-2xl  ">
           
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing  


          </p>
          </Fade>

          <div>
            <Slide triggerOnce={true}>
            <a
              href="https://ecell-events.netlify.app/"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Events
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
            </Slide>
          </div>
        </div>
        

        {/* <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" mx-20 mt-20rounded-2xl w-2/3 md:w-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;