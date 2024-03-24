import React from "react";
import img1 from "./1.jpeg";
import img2 from "./prachi.jpg";

import img7 from "./4.jpg";
import img8 from "./w8.jpg";
import img6 from "./6.jpg";

import img5 from "./metali.jpg";
import png from "../components/assets/flower-black-and-white-png-41825.png";
import { motion } from "framer-motion";


export default function Demo() {
  return (
    <div>
      {/* <div className=''>
        <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/>
        <img src={img1} alt="" className='w-[22rem]  m-[6rem] relative  ' />
      </div> */}

      <div className="md:flex  relative z-10 max-[756px]:flex-col md:ml-[8%]  justify-center gap-[3rem] md:mx-[2rem] pt-[1rem] md:pt-[3rem]">
        <img
          src={png}
          alt=""
          className="absolute max-md:hidden md:left-[-8%] top-[-8rem] left-0 w-[12rem] opacity-[0.5] rotate-180"
        />
        <img
          src={png}
          alt=""
          className="absolute max-md:hidden bottom-[0rem] right-[0rem] w-[12rem] opacity-[0.5]"
        />
        {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
        <div className="">
        

          <motion.div
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.3,
                ease: "easeInOut",
                duration: 1,
              },
            }}
            className="border-0 pb-[3rem] max-sm:w-[100%]  flex flex-col w-[80%]  text-center gap-3"
          >
            <a href="https://drive.google.com/drive/folders/1vw-9kYM9Vy-OHrqN55zOKjKldDxBa2HM?usp=drive_link">
            <motion.img
            whileHover={{scale:1.02,transition:{duration:1,type:'spring',ease:'easeInOut'}}}
              src={img1}
              alt=""
              className="w-[100%]   max-[950]:w-[100%] shadow-lg shadow-gray-400 max-sm:h-[25rem] sm:h-[25rem]"
            />
            <h1 className="tracking-widest text-[#443417] text-xl pt-4">
              {" "}
              Alisha & Krunal - Jaipur
            </h1>
            <p className="px-3 tracking-wider md:text-[1.2rem]  max-sm:text-[1rem]">
              Love captured in a single frame, forever begins in our embrace.
            </p>
            </a>
          </motion.div>



          <motion.div
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.6,
                ease: "easeInOut",
                duration: 1,
              },
            }}
            className="border-0   max-sm:w-[100%]  pb-[3rem] flex flex-col w-[80%]  text-center gap-3"
          >
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
          <a href="https://drive.google.com/drive/folders/1Vm7Eudzj_G7bWYY6KFyjJ7zyGf23FLc3?usp=drive_link">
          <motion.img
            whileHover={{scale:1.02,transition:{duration:1,type:'spring',ease:'easeInOut'}}}
              src={img2}
              alt=""
              className="w-[100%] shadow-lg shadow-gray-400   max-sm:h-[25rem] sm:h-[25rem]"
            />
            <h1 className="tracking-widest text-[#443417] text-xl pt-4">
              {" "}
              Anuroopa & Vishal - Jaipur
            </h1>
            <p className="px-3 tracking-wider md:text-[1.2rem]  max-sm:text-[1rem]">
              Joined hands, shared dreams, endless love—a marital masterpiece
              unfolds
            </p>
            </a>
          </motion.div>
          <motion.div
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.8,
                ease: "easeInOut",
                duration: 1,
              },
            }}
            className=" max-sm:w-[100%]  pb-[4rem]flex flex-col w-[80%] text-center gap-3"
          >
            <a href="https://drive.google.com/drive/folders/1iH8lcTprnGLjXUvSRII2ujDCy9cLWYrA?usp=drive_link">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <motion.img
            whileHover={{scale:1.02,transition:{duration:1,type:'spring',ease:'easeInOut'}}}
              src={img8}
              alt=""
              className="w-[100%] shadow-lg shadow-gray-400   max-sm:h-[25rem] sm:h-[25rem]"
            />
            <h1 className="tracking-widest text-[#443417] text-xl py-3 pt-4">
              {" "}
              Evelina & basant - Jaipur
            </h1>
            <p className="px-3 tracking-wider md:text-[1.2rem]  max-sm:text-[1rem]">
              Together, we wrote our vows in the book of love
            </p>
            </a>
          </motion.div>
        </div>
        <div className="md:pt-[10rem] pt-[3rem]">
          <motion.div
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.5,
                ease: "easeInOut",
                duration: 1,
              },
            }}
            className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[90%] text-center gap-3"
          >
            <a href="https://drive.google.com/drive/folders/1JnjtC7w50rJVLNpRJit6joNHeesJhF9S?usp=drive_link">
            <div className="relative w-[100%] shadow-lg shadow-gray-400  max-sm:h-[25rem] sm:h-[25rem]">

            <motion.img
            whileHover={{scale:1.02,transition:{duration:1,type:'spring',ease:'easeInOut'}}}
              src={img7}
              alt=""
              className="absolute h-[100%] w-[100%]"
            />
            </div>
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <h1 className="tracking-widest text-[#443417] text-xl pt-4">
              Rupal & Aditya - Jaipur
            </h1>
            <p className="px-3 tracking-wider md:text-[1.2rem]  max-sm:text-[1rem]">
              In the dance of life, we found our forever rhythm
            </p>
            </a>
          </motion.div>
          <motion.div
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.7,
                ease: "easeInOut",
                duration: 1,
              },
            }}
            className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col  md:w-[90%] text-center gap-3"
          >
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <a href="https://drive.google.com/drive/folders/1Sz_CmUiKCCdUp-hT2EsAOEzVHM57MUem?usp=drive_link">
            <motion.img
            whileHover={{scale:1.02,transition:{duration:1,type:'spring',ease:'easeInOut'}}}
              src={img5}
              alt=""
              className="md:w-[100%] shadow-lg shadow-gray-400   max-sm:h-[25rem] sm:h-[25rem]"
            />
            <h1 className="tracking-widest text-[#443417] text-xl pt-4">
              {" "}
              Mitali & Hari
            </h1>
            <p className="px-3 tracking-wider md:text-[1.2rem]  max-sm:text-[1rem]">
              A union of hearts, captured in the frame of eternity.
            </p>
            </a>
          </motion.div>
          <motion.div
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.9,
                ease: "easeInOut",
                duration: 1,
              },
            }}
            className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[90%] text-center gap-3"
          >
            <a href="https://drive.google.com/drive/folders/13yI5jtkh4lwFsxzoouLZuhDrOtC-sI94?usp=sharing">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <motion.img
            whileHover={{scale:1.02,transition:{duration:1,type:'spring',ease:'easeInOut'}}}
              src={img6}
              alt=""
              className="md:w-[100%] shadow-lg shadow-gray-400  max-sm:h-[25rem] sm:h-[25rem]"
            />
            <h1 className="tracking-widest text-[#443417] text-xl pt-4">
              {" "}
              Prachi & Ravneet - Jaipur
            </h1>
            <p className="px-3 tracking-wider md:text-[1.2rem]  max-sm:text-[1rem]">
              As husband and wife, our journey begins, intertwined and infinite
            </p>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



        // Button code
        // <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        //   Shimmer
        // </button>
  

       
      