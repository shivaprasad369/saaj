import React from "react";
import w1 from "./assets/image/about2.png";
import w2 from "./assets/image/about1.png";

import { Button } from "@mui/material";
export default function About() {
  return (
    <div id="about" className="z-100 relative bg-white flex max-sm:flex-col sm:justify-between  w-[100%] md:gap-[5rem] ">
      
      <div className="flex flex-col sm:gap-3  sm:w-[40%] sm:pt-[5%] sm:pb-[2rem] max-sm:pb-[2rem]">
        <div>
          <h1 className="uppercase text-center font-bold text-[30px]">
            ABout US
          </h1>
          <div className=" ">
            <p className=" text-gray-600 md:text-[1.2rem] leading-[1.6rem] max-sm:text-[1rem] max-sm:py-[1rem] max-sm:px-[2rem]   sm:text-[1rem] sm:pl-[3rem]">
              wedding1 The Old English “Wedding” starts off pretty
              straightforward: “State of being wed; pledge, betrothal; action of
              marrying.” Okay, we don't think anyone's surprised by that. It's
              how we use the word today
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
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
            <img
              src={w2}
              alt="wedding1"
             
              className="mb-3 sm:w-full"
            />
          </div>
        
        <div className="flex flex-col flex-wrap object-cover">
          <p className="text-gray-600 sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2">
            The Old English “Wedding” starts off pretty straightforward: “State
            of being wed; pledge, betrothal; action of marrying.” Okay, we don't
            think anyone's surprised by that. It's how we use the word today
          </p>
          <div className="text-center pb-3">
            {/* <button className=" border-2 w-[8rem] text-center font-serif 
             whitespace-nowrap text-red-500 h-[3rem] font-bold">
              Know More
            </button> */}
          <Button variant="outlined">Know More..</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
