import React from "react";
import {  motion } from "framer-motion";
import Gallery from "../demo/Gallery";
export default function Gallary() {
  return (
    <div id="gallary" className="justify-center items-center pt-[4rem] relative max-w:[100%]">
     <h1
        className="text-center p-5 text-4xl font-bold  text-[#64321b] uppercase"
        style={{ fontFamily: `"Tinos", serif` }}
      >
        {" "}
        Let our work speak for itself
      </h1>
      <p style={{ fontFamily:'"Alegreya", serif ',fontStyle:'italic', letterpacing: " 0.15em" }} className="pb-[1rem] md:w-[70%] text-center  text-[#705704] font-semibold max-md:w-[80%] md:ml-[15%] max-md:ml-[10%]">
      Experience the excellence we've delivered! Our portfolio speaks volumes about our commitment to quality and customer satisfaction. Discover the creations that have earned us the trust of countless clients.
      </p>
      <div className=" ">
        <div className=" gap-4 items-center">
        <Gallery/>
        </div>
      </div>
    </div>
  );
}
