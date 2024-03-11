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
        <h1
          style={{ fontFamily: ` "Libre Baskerville", serif` }}
          className="text-4xl py-[2rem] tracking-widest text-[#473c16]"
        >
          How we work
        </h1>
      </div>
      <div className=" sm:w-[90%]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  flex-col  md:flex-row md:items-center md:justify-between rounded-lg border-none border-gray-300 "
        >
          <div className="p-6 relative md:w-2/3 overflow-hidden">
            <h3
              className="mb-2 overflow-hidden text-3xl font-medium text-[#473c16] tracking-widest"
              style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}
            >
              {" "}
              <i>Events Planning + Design</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
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
            <h3
              className="mb-2 overflow-hidden text-3xl font-medium text-[#473c16]  tracking-widest"
              style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}
            >
              {" "}
              <i>Preparation</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
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
            <h3
              className="mb-2 text-3xl overflow-hidden text-[#473c16] tracking-widest"
              style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}
            >
              {" "}
              <i>Execution</i>
            </h3>
            <p className="text-[#7a4d189f] tracking-[0.2rem] md:text-xl">
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
            <img src={img3} alt="card" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
