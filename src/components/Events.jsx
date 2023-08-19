// import React from "react";
// import "../styles/EventStyle.css"



// const Events = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: BGIMAGE,
//       link:"www.google.com"
//     },
//     {
//       id: 2,
//       src: BGIMAGE,
//     },
//     {
//       id: 3,
//       src: BGIMAGE,
//     },
//     {
//       id: 4,
//       src: BGIMAGE,
//     },
//     {
//       id: 5,
//       src: BGIMAGE,
//     },
//     {
//       id: 6,
//       src: BGIMAGE,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Events
//           </p>
//           <p className="py-6">Check out some evemts here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 wrapper">
//           {portfolios.map(({ id, src,link }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg image">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center content">
//                 <p>hello events content can be seen here</p>
                
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;


<h2 className="text-4xl sm:text-7xl font-bold text-[#66F6F1]  mt-20 ">
Welcome to E-cell PVG
</h2>

<p className="text-[#C5C6C7] text-justify py-4 max-w-screen-lg w-full lg:text-2xl  ">
Enter the dynamic realm of E-Cell PVG, where
innovation meets entrepreneurship. We fuel the
spirit of inventive minds through workshops, events,
and a tight-knit community. From refining business
acumen to incubating startups, we're the launchpad
for visionary leaders. Step into a world where ideas
evolve into impactful ventures, shaping the
entrepreneurial landscape. Let's collaborate to
redefine the future of success.
</p>



<Slide triggerOnce={true}>
<a
    href="https://ecell-events.netlify.app/"
    smooth
    duration={500}
    className="group text-[#C5C6C7] w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-[#66F6F1] cursor-pointer"
>
    Events
    <span className="group-hover:rotate-90 duration-300">
        <MdOutlineKeyboardArrowRight
            size={25}
            className="ml-1"
        />
    </span>
</a>
</Slide>