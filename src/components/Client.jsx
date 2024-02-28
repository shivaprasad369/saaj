import React from "react";
import img from "./assets/slide1.jpeg";
import { easeIn, motion } from "framer-motion";
import { Avatar } from "@mui/material";

export default function Client() {
  return (
    <div id="client max-w:[100%]">
      <div className="flex md:flex-row max-md:flex-col gap-4 bg-[#7c757535] md:h-[20rem] h-full px-2 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: easeIn,
              type: "spring",
              duration: 1,
              delay: 0.5,
            },
          }}
          className=" md:w-[100%] pt-[2rem] "
        >
          <img src={img} alt="card" className=" md:h-[110%]" />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: easeIn,
              type: "spring",
              duration: 1,
              delay: 0.7,
            },
          }}
          className=" border-black min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
        >
          <div className="text-center flex-wrap font-sans justify-center object-cover ">
            <h1 style={{ fontFamily:` "Libre Baskerville", serif`}} className="text-[2rem] tracking-widest font-bold pt-[2rem] pb-[1rem] text-[#2c3611]">
              What our client says?
            </h1>
            <p style={{fontFamily: `"Mate SC", serif`}} className="text-gray-600 tracking-wider sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1">
              Choosing Saaj Wedding for our wedding in Jaipur was the best
              decision. Their meticulous planning, attention to detail, and
              personalized touch made our celebration truly magical. Highly
              recommend!
            </p>
            <div className="px-[47%] border-black h-fit pt-5 ">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <p className="font-bold pt-2 md:pb-3">Shivaprasad</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
