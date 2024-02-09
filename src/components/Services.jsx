
import React, { useEffect, useState } from "react";
import data from "../constants/images";

import { easeIn, easeInOut, motion, spring } from "framer-motion";

export default function Services() {
 
  const [index, setIndex] = useState(0);
  const handleNextImage = () => {
    setIndex((index) => (index + 1) % data.length);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === 4) {
        setIndex(1);
      }
      handleNextImage();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <div
      id="services"
      className="p-2 relative justify-center items-center bg-[#f4f4f7]"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <motion.div
        viewport={{once:true}}
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0,transition:{ease:easeInOut,delay:0.3,type:"spring"}}}
          className=" md:pl-3 md:flex flex-col items-center 
          justify-center  "
        >
          <h1 className="text-[20px] text-center font-bold text-red-600 uppercase">
            our services
          </h1>

          <p className="text-gray-600 sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2">
            wedding1 The Old English “Wedding” starts off pretty
            straightforward: “State of being wed; pledge, betrothal; action of
            marrying.” Okay, we don't think anyone's surprised by that. It's how
            we use the word today. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint eveniet fuga necessitatibus aliquid laborum
            quod totam! Repellendus alias distinctio, voluptatibus ipsam vel
            ratione aut, perferendis nobis quos vero ex necessitatibus!
          </p>
        </motion.div>
        <motion.div 
        layout
          viewport={{once:true}}
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0,transition:{ease:easeIn}}}
        className=" bg-gray-100 md:p-1 w-auto ">
          <motion.div
          className="items-center justify-center text-center">
            {data.map((data) => (
              <motion.div
             
              className="object-contain">
                <motion.img
                animate={{transition:{ease:easeIn,type:"spring"}}}
                  src={data.img}
              
                  className={`${
                    data?.index === index ? "block" : "hidden"
                  } md:w-[100%] rounded-md max-md:w-full`}
                />
                <div className="">
                  <h1 className="text-xl font-bold md:pt-2 text-center">
                    {data?.index === index && data.data}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
