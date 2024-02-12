import React from "react";
import { easeInOut, motion } from "framer-motion";
import { LiaPrayingHandsSolid } from "react-icons/lia";

export default function Specialization() {
  return (
    <motion.div
    id="specialization"
    viewport={{once:true,amount:"all"}}
      initial={{ opacity: 1, }}
      whileInView={{
        opacity: 1,
        
        transition: { delay: 0.3, ease: easeInOut, type: "spring " },
      }}
      className="md:pt-5   max-w-[100%] h-[100%] md:mt-[2rem] flex-wrap justify-center items-center text-center gap-4 max-md:pt-[3rem]"
    >
      <motion.h1
        initial={{ opacity: 1 }}
        viewport={{once:true,amount:'all'}}
        whileInView={{
          opacity: 1,
         
          transition: { delay: 0.6, ease: easeInOut, type: "spring " },
        }}
        className="font-bold text-[2rem] pb-[3rem]"
      >
        Our Specialization
      </motion.h1>
      <div className="h-[100%] object-fill grid md:grid-rows-2 md:grid-flow-col max-md:grid-cols-1 gap-2 pt-3">
        <motion.div  initial={{ opacity: 1, scale:1}}
        viewport={{once:true,amount:'all'}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.3, ease: easeInOut, type: "spring " },
      }} className=" md:row-start-1 max-md:w-[100%] md:row-span-2 items-center flex flex-col max-md:mb-[2rem]">
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <Image
              src={img}
              width={100}
              height={150}
              className="r
              ounded-full max-md:w-[100%]"
            /> */}
            <LiaPrayingHandsSolid className="text-[3rem]"/>
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 1, scale:1}}
        viewport={{once:true,amount:'all'}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.5, ease: easeInOut, type: "spring " },
      }} className="md:row-start-2 md:row-span-3 flex flex-col items-center max-md:mb-[2rem]">
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            /> */}
            <LiaPrayingHandsSolid className="text-[3rem]"/>
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div  initial={{ opacity: 1, scale:1}}
        viewport={{once:true,amount:'all'}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.7, ease: easeInOut, type: "spring " },
      }} className="md:row-start-1 md:row-span-2 flex flex-col items-center max-md:mb-[2rem]">
          <div  className=" p-[2rem] rounded-full bg-gray-200">
            {/* <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            /> */}
            <LiaPrayingHandsSolid className="text-[3rem]"/>
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div  initial={{ opacity: 1, scale:1}}
        viewport={{once:true,amount:'all'}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.9, ease: easeInOut, type: "spring " },
      }} className="md:row-start-2 md:row-span-2 flex flex-col items-center max-md:mb-[2rem]">
          <div className=" p-[2rem] rounded-full bg-gray-200">
          <LiaPrayingHandsSolid className="text-[3rem]"/>
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div  initial={{ opacity: 1, scale:1}}
        viewport={{once:true,amount:'all'}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 1.1, ease: easeInOut, type: "spring " },
      }} className="md:row-start-1 md:row-span-1  flex flex-col items-center max-md:mb-[2rem]">
          <div className=" p-[2rem] rounded-full bg-gray-200">
          <LiaPrayingHandsSolid className="text-[3rem]"/>
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
