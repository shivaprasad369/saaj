import React from "react";
import img1 from "../Ui/w1.jpg";
import img2 from "../Ui/w3.jpg";
import img3 from "../Ui/w2.jpg";
import { motion } from "framer-motion";

export default function How() {
  return (
    <div className=" w-full h-full relative overflow-hidden flex flex-col flex-wrap items-center justify-center mt-[1rem] bg-gray-50">
      <div className="text-3xl font-bold mb-8">
        {/* <div style={{backgroundImage: `repeating-linear-gradient(red, pink 10%, green 20%)`,position:'absolute',zIndex}}/> */}
        <h1
          style={{ fontFamily: ` "Libre Baskerville", serif` }}
          className="text-3xl py-[2rem] tracking-widest text-[#473c16] uppercase"
        >
          How we work
        </h1>
      </div>
      <div className=" sm:w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{opacity:1,y:0,transition:{type:'tween', ease:"easeInOut" ,duration:1}}}
          className="flex  flex-col  md:flex-row md:items-center md:justify-between rounded-lg border-none border-gray-300 "
        >
          <div className="p-6 relative md:w-2/3 overflow-hidden">
            <h3
              className="mb-2 overflow-hidden text-4xl  font-bold text-[#473c16] tracking-widest"
              style={{fontFamily: '"Great Vibes", cursive', fontWeight: 600}}
              // style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}
            >
              {" "}
              Event Planning + Design
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.15rem] md:text-xl font-semibold">
              {" "}
              <span className="absolute md:left-[2rem] md:bottom-[42%] max-md:top-[rem]">
                <i className=" h-[10rem]  width-29">
                  <h1 className="text-[10rem] text-[#c4b48791] font-extrabold">
                    1.
                  </h1>
                </i>
              </span>
              "Elevate your special day with exquisite decor and timeless design
              by our expert wedding planners. From elegant centerpieces to
              personalized details, we create a dream ambiance. Trust us to turn
              your wedding into a visually stunning celebration, leaving lasting
              impressions. Explore our decor and design services today!"
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-full">
          <motion.img whileHover={{scale:1.02,transition:{type:'spring',duration:0.3,type:'easeInOut'}}}
              className="h-full shadow-md shadow-black w-full object-cover" 
             src={img1} alt="card" 
              />
          </div>
        </motion.div>

        <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{opacity:1,y:0,transition:{type:'tween', ease:"easeInOut" ,duration:1}}}
          className="flex  flex-col  md:flex-row md:items-center md:justify-between rounded-lg border-none p-2 border-gray-300 "
        >
          <div className="p-6 md:w-1/2 w-full max-md:hidden ">
            <motion.img whileHover={{scale:1.02,transition:{type:'spring',duration:0.3,type:'easeInOut'}}}
              className="h-full shadow-md shadow-black w-full object-cover" 
             src={img2} alt="card"
              />
          </div>
          <div className="p-6 relative md:w-2/3">
          <h3
              className="mb-2 overflow-hidden text-4xl  font-bold text-[#473c16] tracking-widest"
              style={{fontFamily: '"Great Vibes", cursive', fontWeight: 600}}
            >
              {" "}
              Event Organizer
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.15rem] font-semibold md:text-xl">
              {" "}
              <span className="absolute md:left-[3rem] md:bottom-[40%] max-md:top-0 w-9  ">
                <i className=" h-[10rem]  width-29">
                  <h1 className="text-[10rem]  text-[#cabe9b91] font-extrabold">
                    2.
                  </h1>
                </i>
              </span>
              Elevate your special day with our expert wedding planning
              services. Our dedicated team ensures seamless coordination,
              personalized themes, and flawless execution. From venue selection
              to the finest details, trust us to craft your dream wedding.
              Unleash the magic of your love story with our premier wedding
              planning expertise.
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-full md:hidden">
          <motion.img whileHover={{scale:1.02,transition:{type:'spring',duration:0.3,type:'easeInOut'}}}
              className="h-full shadow-md shadow-black w-full object-cover" 
            src={img2} alt="card" 
             />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{opacity:1,y:0,transition:{type:'tween', ease:"easeInOut" ,duration:1}}}
          className="flex  flex-col mb-[2rem] md:flex-row md:items-center md:justify-between rounded-lg border-none p-2 border-gray-300 "
        >
          <div className="relative p-6 md:w-2/3">
          <h3
              className="mb-2 overflow-hidden text-4xl  font-bold text-[#473c16] tracking-widest"
              style={{fontFamily: '"Great Vibes", cursive', fontWeight: 600}}
            >
              {" "}
              <i>Event Execution</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.15rem] font-semibold md:text-xl">
              {" "}
              <span className="absolute  w-9 md:left-[3rem]  max-md:top-0 top-[40%]">
                <i className=" h-[10rem]  width-29">
                  <h1 className="text-[10rem] text-[#dac89891] font-extrabold">
                    3.
                  </h1>
                </i>
              </span>
              "Discover unparalleled wedding planning services with our
              experienced team. From exquisite venues to seamless coordination,
              we ensure your special day is a dream come true. Trust us to
              create timeless memories. Contact our wedding planner experts for
              a stress-free and enchanting celebration of love."
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-[100%]">
          <motion.img whileHover={{scale:1.02,transition:{type:'spring',duration:0.3,type:'easeInOut'}}}
              className="h-full shadow-md shadow-black w-full object-cover" 
            src={img3}
             />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
