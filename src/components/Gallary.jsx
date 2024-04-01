import React from "react";
import {  motion } from "framer-motion";
import Gallery from "../demo/Gallery";
export default function Gallary() {
  return (
    <div id="gallary" className="justify-center items-center pt-[4rem] relative max-w:[100%]">
      <motion.h1
        className="uppercase  text-center text-[30px] tracking-widest font-bold text-[#7a4927] pb-3"
        style={{ fontFamily:`"Tinos", serif` }}
      >
        Our Portfolio
      </motion.h1>
      <div className=" ">
        <div className=" gap-4 items-center">
        <Gallery/>
        </div>
      </div>
    </div>
  );
}
