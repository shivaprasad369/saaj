import React from "react";
import img1 from "../assets/service1(decore).jpg";
import img2 from "../assets/service3(vender).jpg";
import img3 from "../assets/service2(desti).jpg";
import { motion } from "framer-motion";

export default function How() {
  return (
    <div className=" w-full h-full relative overflow-hidden flex flex-col flex-wrap items-center justify-center mt-[1rem] bg-gray-50">
      <div className="text-3xl font-bold mb-8">
        {/* <div style={{backgroundImage: `repeating-linear-gradient(red, pink 10%, green 20%)`,position:'absolute',zIndex}}/> */}
        <h1 style={{ fontFamily:` "Libre Baskerville", serif`}} className="text-4xl py-[2rem] tracking-widest text-[#473c16]" >How we work</h1>
      </div>
      <div className=" sm:w-[90%]">

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  flex-col  md:flex-row md:items-center md:justify-between rounded-lg border-none border-gray-300 "
        >
          <div className="p-6 relative md:w-2/3 overflow-hidden">
            <h3 className="mb-2 overflow-hidden text-3xl font-medium text-[#473c16] tracking-widest" style={{fontFamily: '"Open Sans", sans-serif',fontWeight:600}}>
              {" "}
              <i>Events Planning + Design</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
              {" "}
              <span className="absolute md:left-[4rem] max-md:top-[-2.5rem]"><i className=" h-[10rem]  width-29"><h1 className="text-[10rem] text-[#75663e91] font-extrabold">1.</h1></i></span> 
              We sit down to plan and create, pouring our hearts into tailoring
              an event that reflects your dreams and desires
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-full">
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  flex-col  md:flex-row md:items-center md:justify-between rounded-lg border-none p-2 border-gray-300 "
        >
          <div className="p-6 md:w-1/2 w-full max-md:hidden">
            <img src={img2} alt="card" className="h-full w-full object-cover" />
          </div>
          <div className="p-6 relative md:w-2/3">
            <h3 className="mb-2 overflow-hidden text-3xl font-medium text-[#473c16]  tracking-widest" style={{fontFamily: '"Open Sans", sans-serif',fontWeight:600}}>
              {" "}
              <i>Preparation</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
              {" "}
              <span className="absolute md:left-[4rem] max-md:top-0 w-9 "><i className=" h-[10rem]  width-29"><h1 className="text-[10rem] text-[#75663e91] font-extrabold">2.</h1></i></span> 
              

              Behind the scenes, we prepare with care and dedication, putting in
              the effort to make every detail perfect for your special day
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-full md:hidden">
            <img src={img2} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  flex-col mb-[2rem] md:flex-row md:items-center md:justify-between rounded-lg border-none p-2 border-gray-300 "
        >
          <div className="relative p-6 md:w-2/3">
            <h3 className="mb-2 text-3xl overflow-hidden text-[#473c16] tracking-widest" style={{fontFamily: '"Open Sans", sans-serif',fontWeight:600}}>
              {" "}
             <i>Execution</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
              {" "}
              <span className="absolute  w-9 md:left-[4rem] max-md:top-0"><i className=" h-[10rem]  width-29"><h1 className="text-[10rem] text-[#75663e91] font-extrabold">3.</h1></i></span> 

              On the big day, with excitement and emotion, we bring your dreams
              to life, ensuring every moment is as magical as you imagined
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-[100%]">
            <img src={img3} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
