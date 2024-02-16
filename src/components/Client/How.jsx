import React from "react";
import img1 from "../assets/slide1.jpeg";

import { motion } from "framer-motion";

export default function How() {
  return (
    <div className=" w-full h-full overflow-hidden flex flex-col flex-wrap items-center justify-center mt-[1rem]">
      <div className="text-3xl font-bold mb-8">
        <h1>How we work</h1>
      </div>
      <div className=" gap-10 w-[80%]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex bg-slate-100 flex-col mb-[2rem] md:flex-row md:items-center md:justify-between rounded-lg border-none border-gray-300 shadow-md"
        >
          <div className="p-6 md:w-2/3">
            <h3 className="mb-2 text-3xl font-medium text-gray-900" style={{fontFamily:'"Parisienne", cursive',fontWeight:800}}>
              {" "}
              <span>1.</span> Events Planning and Design
            </h3>
            <p className="text-gray-700 md:text-xl">
              {" "}
              We sit down to plan and create, pouring our hearts into tailoring
              an event that reflects your dreams and desires
            </p>
          </div>
          <div className="p-6 md:w-1/2">
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  bg-slate-100 flex-col mb-[2rem] md:flex-row md:items-center md:justify-between rounded-lg border-none p-2 border-gray-300 shadow-md"
        >
          <div className="p-6 md:w-1/2 max-md:hidden">
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="mb-2 text-3xl font-medium text-gray-900" style={{fontFamily:'"Parisienne", cursive',fontWeight:800}}>
              {" "}
              <span>2.</span>Preparation
            </h3>
            <p className="text-gray-700 md:text-xl">
              {" "}
              Behind the scenes, we prepare with care and dedication, putting in
              the effort to make every detail perfect for your special day
            </p>
          </div>
          <div className="p-6 md:w-1/2 md:hidden">
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex bg-slate-100 flex-col mb-[2rem] md:flex-row md:items-center md:justify-between rounded-lg border-none p-2 border-gray-300 shadow-md"
        >
          <div className="p-6 md:w-2/3">
            <h3 className="mb-2 text-3xl text-gray-900" style={{fontFamily:'"Parisienne", cursive',fontWeight:800}}>
              {" "}
              <span>3.</span>Execution
            </h3>
            <p className="text-gray-700 md:text-xl">
              {" "}
              On the big day, with excitement and emotion, we bring your dreams
              to life, ensuring every moment is as magical as you imagined
            </p>
          </div>
          <div className="p-6 md:w-1/2">
            <img src={img1} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
