import React from "react";
import img1 from "../components/assets/w1.jpg";
import img2 from "./gallary3.jpg";
import img3 from "./gallary3.jpg";
import img7 from './w4.jpg'
import img8 from './w8.jpg'
import img6 from "./gallary2.jpg";
import img4 from "./gsllary4.jpg";
import img5 from "./w5.jpg";
import png from '../components/assets/flower-black-and-white-png-41825.png'
import { motion } from "framer-motion";
export default function Demo() {
  return (
    <div>
      {/* <div className=''>
        <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/>
        <img src={img1} alt="" className='w-[22rem]  m-[6rem] relative  ' />
      </div> */}

      <div  className="md:flex  relative z-10 max-[756px]:flex-col  max-[906px]:justify-around  md:justify-around min-[906px]:gap-[0.5rem] max-[756px]:min-[638px]:ml-[20%]  max-[380px]:ml-[0%] pt-[3rem]">

        <img src={png} alt="" className="absolute top-[-8rem] left-0 w-[12rem] opacity-[0.5] rotate-180"/>
        <img src={png} alt="" className="absolute bottom-[0rem] right-[-2rem] w-[12rem] opacity-[0.5]"/>
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
        <div  className="gap-5 max-[756px]:flex  max-[756px]:flex-col max-[756px]:text-center max-[756px]:justify-center  ">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',delay:0.3,ease:'easeInOut', duration:1}}} className="border-0 pb-[3rem] max-sm:w-[100%]  flex flex-col w-[30rem]  text-center gap-3">
            <img src={img1} alt=""  className="md:w-[30rem]  max-sm:h-[25rem] sm:h-[25rem]"  />
            <h1 className="tracking-widest text-[#443417] text-xl"> Alisha & Krunal - Jaipur</h1>
            <p className="px-3 tracking-wider">
            Love captured in a single frame, forever begins in our embrace.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',delay:0.6,ease:'easeInOut', duration:1}}} className="border-0   max-sm:w-[100%]  pb-[3rem] flex flex-col w-[30rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img2} alt="" className="md:w-[30rem]  max-sm:h-[25rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Prachi & Ravneet - Jaipur</h1>
            <p className="px-3 tracking-wider">
            Joined hands, shared dreams, endless love—a marital masterpiece unfolds
            </p>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',delay:0.8,ease:'easeInOut', duration:1}}} className="border-2 max-sm:w-[100%]  pb-[4rem]flex flex-col w-[30rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img8} alt="" className="md:w-[30rem]  max-sm:w-[100%]  max-sm:h-[25rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl py-3"> Evelina & basant - Jaipur</h1>
            <p className="px-3 tracking-wider">
            .Together, we wrote our vows in the book of love
            </p>
          </motion.div>
        </div>
        <div className="md:pt-[10rem] pt-[3rem]">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',delay:0.5,ease:'easeInOut', duration:1}}} className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[30rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img7} alt="" className="md:w-[30rem]  max-sm:h-[25rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl">Rupal & Aditya - Jaipur</h1>
            <p className="px-3 tracking-wider">
            In the dance of life, we found our forever rhythm
            </p>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',delay:0.7,ease:'easeInOut', duration:1}}} className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[23rem] md:w-[30rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img5} alt="" className="md:w-[30rem]  max-sm:h-[25rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Shresth & Sheetal - Jaipur</h1>
            <p className="px-3 tracking-wider">
            A union of hearts, captured in the frame of eternity.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',delay:0.9,ease:'easeInOut', duration:1}}}className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[23rem] md:w-[30rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img6} alt="" className="md:w-[30rem]  max-sm:h-[25rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Niraj & Aishwarya - Jaipur</h1>
            <p className="px-3 tracking-wider">
            As husband and wife, our journey begins, intertwined and infinite

            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
