import React, { useState } from "react";
import w1 from "./assets/about1.png";
import w2 from "./assets/Abouts2.png";

import { Button } from "@mui/material";
import { easeIn, motion } from "framer-motion";
import png from './assets/pngegg.png'
import { Link } from "react-router-dom";
export default function About() {
  const [more, setMore] = useState(false);
  const handleMore = () => {
    setMore((more) => !more);
  };
  return (
    <div
      id="about"
      className="z-100 relative py-[2rem] pt-[3rem] flex max-sm:flex-col sm:justify-between  w-[100%] md:gap-[5rem] "
    >
      <div className="flex flex-col sm:gap-3  sm:w-[40%] sm:pt-[5%] sm:pb-[2rem] max-sm:pb-[2rem]">
        <div>
          <h1 style={{ fontFamily:` "Libre Baskerville", serif`}} className="uppercase text-[#7a4927] tracking-widest text-center font-bold text-[30px]">
            ABout US
          </h1>
          <div className=" ">
            <p style={{fontFamily: `"Mate SC", serif`}} className="tracking-wider text-[#705704] md:text-[1.2rem] leading-[1.6rem] max-sm:text-[1rem] max-sm:py-[1rem] max-sm:px-[2rem]   sm:text-[1rem] sm:pl-[3rem]">
             <i>
              Welcome to Saaj Wedding, where we turn your wedding dreams into
              reality amidst the enchanting backdrop of Jaipur - the Pink City.
              Immerse yourself in the regal charm and cultural richness of this
              historical city as we take you on a journey to create timeless
              memories on your special day
              </i>
            </p>
          </div>
        </div>
        <div>
          <div className="text-center ">
            <div className="">
              <div className="absolute z-10  items-center justify-center md:pt-[1rem] ">
                {/* <Image
                  src={w2}
                  height={550}
                  width={200}
                  alt="wedding2"
                  className="rounded-t-full max-[750px]:hidden hidden"
                /> */}
              </div>
                <img src={png} alt="" className="absolute bottom-0 right-0 rotate- width-20 w-[10rem] opacity-[0.6]" />
                <img src={png} alt="" className="absolute top-0 left-0 rotate-180 width-20 w-[10rem] opacity-[0.6]" />
              
              <img
                src={w1}
                alt="wedding1"
                className="relative sm:pt-[3rem] md:ml-2 h-auto  sm:w-[100%] max-sm:w-[100%] "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center m-0 md:gap-3 flex-wrap sm:w-[40%]">
        {/* <Image
            src={w2}
            height={250}
            width={350}
            alt="wedding2"
            className="absolute z-9 max-[385px]:hidden md:w-auto w-auto "
          /> */}
        <div className="sm:pt-[2rem]">
          <img src={w2} alt="wedding1" className="mb-3 sm:w-full" />
        </div>

        <div className="flex flex-col flex-wrap object-cover">
          <motion.p
            whileInView={{
              opacity: 1,
              transition: { ease: easeIn, delay: 0.3 },
            }}
            style={{fontFamily: `"Mate SC", serif`}}
            className=" tracking-wider text-[#705704] sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2"
          >
            <i>
            Experience the magic of Jaipur with SAAJ WEDDING which are famous
            for its wedding packages, cultural richness, and regal charm
            converge to create unforgettable celebrations. Let us craft your
            dream wedding today. “Meet our passionate team at Saaj Wedding. With
            dedication and meticulous hard work, we transform dreams into
            reality, we don't just plan weddings.,{" "}
            {more &&
              "we pour heart and soul into crafting each detail, ensuring your celebration is a testament to our unwavering commitment and hard work."}
          </i>
          </motion.p>
          <div className="text-center pb-3">
            {/* <button className=" border-2 w-[8rem] text-center font-serif 
             whitespace-nowrap text-red-500 h-[3rem] font-bold">
              Know More
            </button> */}

            <Button variant="outlined" onClick={handleMore}>
             <Link to={'/about'}> {!more ? "Know More.." : "Show Less..."}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
