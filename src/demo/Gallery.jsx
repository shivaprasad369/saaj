import React from "react";
import data from "../constants/Gallary";
import { motion } from "framer-motion";
import { a } from "react-spring";

export default function Gallery() {
  return (
    <div>
      <div className="grid md:grid-cols-3 mb-[2rem] max-md:grid-cols-2 max-sm:grid-cols-1 gap-5  justify-center items-center text-center lg:mx-[10%] xl:mx-[13%]">
        {data.map((data,index)=>(
          <a key={index} href={data?.links}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:0.3*index,type:'tween'}}} className="border-0 sm:w-[20rem] max-sm:w-[100%] h-fit" key={data?.id}>
          <div className="border-0 w-[100%] sm:h-[16rem] max-sm:h-[100%] ">
            <img src={data?.img} alt="" className="h-[100%] w-[100%]" />
          </div>
          <h1 style={{fontFamily: '"Imperial Script", cursive'}} className="tracking-widest text-[#a18433] text-3xl pt-4 font-light">{data?.name}</h1>
          <p   style={{fontFamily:'"Alegreya", serif ',fontWeight:600 }}
           className="px-3 tracking-wider md:text-[1.2rem] text-[#442817]  max-sm:text-[1rem] h-[5rem]">
           {data?.description}
          </p>
        </motion.div>
        </a>
        ))}
      </div>
    </div>
  );
}
