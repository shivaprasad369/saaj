import React from "react";
import { easeInOut, motion } from "framer-motion";
// import { LiaPrayingHandsSolid } from "react-icons/lia";
// import img1 from './assets/solutions.png'
// import img2 from './assets/management.png'
// import img3 from './assets/handshake.png'
// import img4 from './assets/accessible.png'
// import img5 from './assets/passionate.png'


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
        style={{ fontFamily: "'Segoe UI', sans-serif" }}
        className="font-bold text-[#534c1b] text-[2rem] pb-[3rem] uppercase tracking-widest"
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
            {/* <Image
              src={img}
              width={100}
              height={150}
              className="r
              ounded-full max-md:w-[100%]"
            /> */}
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            {/* <img src={img1} alt="wedding1" className=" w-[3rem]" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 384 512"> <path fill="#48340a" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1
              className="text-md tracking-widest text-[#363634] w-[8rem]"
              style={{   fontFamily: "'Segoe UI', sans-serif",fontWeight:600
            }}
            >
              Unique Theme & Ideas{" "}
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
          className="md:row-start-2 md:row-span-1 md:mt-[4rem] flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            /> */}
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            {/* <img src={img2} alt="wedding1" className=" w-[3rem]" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 640 512"><path fill="#48340a" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>
          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{   fontFamily: "'Segoe UI', sans-serif",fontWeight:600
            }}
            >
             On-Time Service
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
            {/* <img src={img3} alt="wedding1" className=" w-[3rem]" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={60} viewBox="0 0 640 512"><path fill="#48340a" d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{   fontFamily: "'Segoe UI', sans-serif",fontWeight:600
            }}
            >
              Extensive Experience{" "}
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
          className="md:row-start-2 md:row-span-2 md:mt-[4rem] flex flex-col items-center max-md:mb-[2rem]"
        >
          <div className=" p-[2rem] rounded-full bg-gray-200">
            {/* <LiaPrayingHandsSolid className="text-[3rem]" /> */}
            {/* <img src={img4} alt="wedding1" className=" w-[3rem] " /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 640 512"><path fill="#48340a" d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{   fontFamily: "'Segoe UI', sans-serif",fontWeight:600
            }}
            >
              High-Quality service
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
            {/* <img src={img5} alt="wedding1" className=" w-[3rem]" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 448 512"><path fill="#48340a" d="M144 0C117.5 0 96 21.5 96 48V96v28.5V176c0 8.8-7.2 16-16 16s-16-7.2-16-16V149.3l-9 7.5C40.4 169 32 187 32 206V244c0 38 16.9 74 46.1 98.3L128 384v96c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V374.7c46.9-19 80-65 80-118.7V176 160 144c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 83.5 329.3 64 304 64c-12.4 0-23.6 4.7-32.1 12.3C270 51.5 249.3 32 224 32c-12.4 0-23.6 4.7-32.1 12.3C190 19.5 169.3 0 144 0z"/></svg>
          </div>
          <div>
            <h1
              className="text-md tracking-widest"
              style={{   fontFamily: "'Segoe UI', sans-serif",fontWeight:600
            }}
            >
             Budget Friendly
            </h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
