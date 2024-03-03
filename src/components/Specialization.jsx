import React from "react";
import { easeInOut, motion } from "framer-motion";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import img1 from './assets/solutions.png'
import img2 from './assets/management.png'
import img3 from './assets/handshake.png'
import img4 from './assets/accessible.png'
import img5 from './assets/passionate.png'


export default function Specialization() {
  return (
    <motion.div
      id="specialization"
      // viewport={{ once: true, amount: "all" }}
     
      whileInView={{
        opacity: 1,
        y:-20,
        transition: {  ease: "easeInOut", type: "spring ",duration:1},
      }}
      className="md:pt-5 py-[2rem] overflow-x-hidden px-5 max-w-[100%] h-[100%] md:mt-[2rem] flex-wrap justify-center items-center text-center gap-4 max-md:pt-[3rem]"
    >
      <motion.h1
        initial={{ opacity: 1,scale:0.9 }}
      
        whileInView={{
          opacity: 1,
          scale:1,
          transition: { delay: 0.6, ease: "easeInOut", type: "spring " ,duration:0.3},
        }}
        style={{ fontFamily: ` "Libre Baskerville", serif` }}
        className="font-bold text-[#534c1b] text-[2rem] pb-[3rem] tracking-widest"
      >
        Our Specialization
      </motion.h1>
      <div className="h-[100%] object-fill md:flex max-md:flex-col   justify-between gap-2 pt-3">
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
         
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 0.3, duration:0.4, ease: "easeInOut", type: "spring " },
          }}
          className=" md:row-start-1 max-md:w-[100%] md:row-span-2 items-center flex flex-col max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <Image
              src={img}
              width={100}
              height={150}
              className="r
              ounded-full max-md:w-[100%]"
            /> */}
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            <img src={img1} alt="wedding1" className=" w-[3rem]" />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1
              className="text-md tracking-widest"
              style={{ fontFamily: `"Mate SC", serif` }}
            >
              One stop solution{" "}
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
          // viewport={{ once: true, amount: "all" }}
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 0.6,duration:0.4, ease: "easeInOut", type: "spring " },
          }}
          className="md:row-start-2 md:row-span-1 md:mt-[5rem] flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            /> */}
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            <img src={img2} alt="wedding1" className=" w-[3rem]" />
            
          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{ fontFamily: `"Mate SC", serif` }}
            >
             Professional Team
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
          // viewport={{ once: true, amount: "all" }}
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 0.8,duration:0.4, ease: "easeInOut", type: "spring " },
          }}
          className="md:row-start-1 md:row-span-2 flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            /> */}
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            <img src={img3} alt="wedding1" className=" w-[3rem]" />

          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{ fontFamily: `"Mate SC", serif` }}
            >
              Commitment{" "}
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity:0.9, scale: 1 }}
          // viewport={{ once: true, amount: "all" }}
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 0.9,duration:0.4, ease: "easeInOut", type: "spring " },
          }}
          className="md:row-start-2 md:row-span-2 md:mt-[5rem] flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            <img src={img4} alt="wedding1" className=" w-[3rem]" />

          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{ fontFamily: `"Mate SC", serif` }}
            >
              Budget Friendly
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
          // viewport={{ once: true, amount: "all" }}
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 1.1, duration:0.4, ease:"easeInOut", type: "spring " },
          }}
          className="md:row-start-1 md:row-span-1  flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            <img src={img5} alt="wedding1" className=" w-[3rem]" />

          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{ fontFamily: `"Mate SC", serif` }}
            >
              Passionate
            </h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
