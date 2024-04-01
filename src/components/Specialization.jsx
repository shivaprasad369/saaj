import React from "react";
import { motion } from "framer-motion";

import img1 from './assets/solution(1).png'
import img2 from './assets/delivery-time.png'
import img3 from './assets/handshake(1).png'
import img4 from './assets/quality-service.png'
import img5 from './assets/earning.png'


export default function Specialization() {
  return (
    <motion.div
      id="specialization"
    
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
        style={{ fontFamily:`"Tinos", serif`}} className="uppercase text-[#7a4927] my-[1rem] md:my-[2rem] tracking-widest text-center font-bold text-[30px]"
      >
        
        Our Specialities
      </motion.h1>
      <div className="h-[100%] object-fill md:flex max-md:flex-col md:px-[2rem]  justify-between gap-2 pt-3">
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
        

           <img src={img1} alt="wedding1" className=" w-[3rem]" /> 
           
          </div>
          <div className="flex flex-col gap-y-2">
            <h1
              className="text-md md:text-md font-semibold max-sm:text-[1rem] text-[#705704] tracking-[0.103em] leading-[1.7rem]  w-[8rem]"
              style={{fontFamily:'"Alegreya", serif ',letterpacing:' 0.1em'}}
            >
              Unique Theme & Ideas{" "}
            </h1>
          </div>
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
        
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 0.6,duration:0.4, ease: "easeInOut", type: "spring " },
          }}
          className="md:row-start-2 md:row-span-1 md:mt-[4rem] flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
         
            
            <img src={img2} alt="wedding1" className=" w-[3rem]" />
           
          </div>
          <div>
          <h1
              className="text-md md:text-md font-semibold max-sm:text-[1rem] text-[#705704] tracking-[0.103em] leading-[1.7rem]"
              style={{fontFamily:'"Alegreya", serif ',letterpacing:' 0.1em'}}
            >
             On-Time Service
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
          
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 0.8,duration:0.4, ease: "easeInOut", type: "spring " },
          }}
          className="md:row-start-1 md:row-span-2 flex flex-col items-center max-md:mb-[2rem]"       >
          <div className=" p-[2rem] rounded-full bg-gray-200">           
            <img src={img3} alt="wedding1" className=" w-[3rem]" />
          </div>
          <div>
          <h1
              className="text-md md:text-md font-semibold max-sm:text-[1rem] text-[#705704] tracking-[0.103em] leading-[1.7rem]"
              style={{fontFamily:'"Alegreya", serif ',letterpacing:' 0.1em'}}
          
            >
              Extensive Experience{" "}
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity:0.9, scale: 1 }}
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 0.9,duration:0.4, ease: "easeInOut", type: "spring " },
          }}
          className="md:row-start-2 md:row-span-2 md:mt-[4rem] flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">

            <img src={img4} alt="wedding1" className=" w-[3rem] " />
           
          </div>
          <div>
          <h1
              className="text-md md:text-md font-semibold max-sm:text-[1rem] text-[#705704] tracking-[0.103em] leading-[1.7rem]  "
              style={{fontFamily:'"Alegreya", serif ',letterpacing:' 0.1em'}}
            >
              High-Quality service
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 1 }}
          whileInView={{
            opacity: 1,
            scale: 1.2,
            transition: { delay: 1.1, duration:0.4, ease:"easeInOut", type: "spring " },
          }}
          className="md:row-start-1 md:row-span-1  flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            <img src={img5} alt="wedding1" className=" w-[3rem]" />
          </div>
          <div>
          <h1
              className="text-md md:text-md font-semibold max-sm:text-[1rem] text-[#705704] tracking-[0.103em] leading-[1.7rem] "
              style={{fontFamily:'"Alegreya", serif ',letterpacing:' 0.1em'}}
             >
             Budget Friendly
            </h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
