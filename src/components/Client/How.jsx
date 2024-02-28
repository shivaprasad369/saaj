import React from "react";
import img1 from "../assets/slide1.jpeg";

import { motion } from "framer-motion";

export default function How() {
  return (
    <div className=" w-full h-full overflow-hidden flex flex-col flex-wrap items-center justify-center mt-[1rem] bg-gray-100">
      <div className="text-3xl font-bold mb-8">
        <h1 style={{ fontFamily:` "Libre Baskerville", serif`}} className="text-4xl py-[2rem] tracking-widest text-[#473c16]" >How we work</h1>
      </div>
      <div className=" gap-10 w-[80%]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  flex-col  md:flex-row md:items-center md:justify-between rounded-lg border-none border-gray-300 "
        >
          <div className="p-6 md:w-2/3 overflow-hidden">
            <h3 className="mb-2 overflow-hidden text-3xl font-medium text-[#473c16] tracking-widest" style={{fontFamily: '"Open Sans", sans-serif',fontWeight:600}}>
              {" "}
              <span>1.</span> <i>Events Planning + Design</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
              {" "}
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
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="mb-2 overflow-hidden text-3xl font-medium text-[#473c16]  tracking-widest" style={{fontFamily: '"Open Sans", sans-serif',fontWeight:600}}>
              {" "}
              <span>2.</span><i>Preparation</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
              {" "}
              Behind the scenes, we prepare with care and dedication, putting in
              the effort to make every detail perfect for your special day
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-full md:hidden">
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  flex-col mb-[2rem] md:flex-row md:items-center md:justify-between rounded-lg border-none p-2 border-gray-300 "
        >
          <div className="p-6 md:w-2/3">
            <h3 className="mb-2 text-3xl overflow-hidden text-[#473c16] tracking-widest" style={{fontFamily: '"Open Sans", sans-serif',fontWeight:600}}>
              {" "}
              <span>3.</span><i>Execution</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
              {" "}
              On the big day, with excitement and emotion, we bring your dreams
              to life, ensuring every moment is as magical as you imagined
            </p>
          </div>
          <div className="p-6 md:w-1/2 w-[100%]">
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
