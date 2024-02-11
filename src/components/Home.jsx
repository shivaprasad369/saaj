import React, {useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Navbar from "./Navbar";
import data from "../constants/images";
export default function Home({handleSetImage}) {
  // const [imageIndex,setImageIndex]=useState(1)
  // const handleSetImage = (ind) => {
  //  setImageIndex(ind)
  
  // };
 
  return (
    <div
    id='home'
      // className={`bg-[url()]`}
      // style={{backgroundImage:url()}}
    >
      {/* {data?.length && data.map((data,index)=>(

      <img src={data.img} alt="homepage" key={data.index} className={`overflow-hidden h-screen ${data.index===imageIndex ?'block':'hidden'} absolute bg-no-repeat bg-cover w-[100%]  max-[1364px]:h-[75%] max-md:h-[65%] max-[420px]:h-[100%] min-[439px]:max-[730px]:h-[60%] min-[769px]:max-[910px]:h-[80%] max-[914px]:h-[75%]  text-black `}/>
      ))

    } */}
      <Navbar />
      <div className="flex justify-between relative text-inherit max-[446px]:justify-center max-[792px]:text-sm items-center flex-wrap md:p-4 max-md:text-sm ">
        <div className="flex flex-col bg-[#0f020240] md:gap-2 items-center justify-center  px-[3rem] object-contain md:mt-[5rem]">
          <ol
            type="1"
            className=" flex flex-col  text-white max-[462px]:text-[0.8rem] py-1 md:py-9 max-[702px]:text-[10px] gap-10 font-semibold object-cover  max-[792px]:text-sm "
          >
            <li onClick={() => handleSetImage(1)} className="">
              <a href="#" className={"active:text-orange-300"}>
                <div className="flex flex-col md:py-2 hover:w-[130%] hover:bg-[#0a0a0a35] md:px-[3rem] hover:text-[#d4bfbf] text-inherit">
                  <h1 className="md:text-xl">1. Destination wedding</h1>
                  <div className="border-b-2" />{" "}
                  <p>Import trace for requested module</p>
                </div>
              </a>
            </li>
            <li onClick={() => handleSetImage(2)}>
              <div className="flex flex-col hover:w-[130%]  hover:bg-[#0a0a0a35] md:py-2 md:px-[3rem] hover:text-[#d4bfbf] text-gray-900 text-inherit">
                <h1 className="md:text-xl">2. Destination wedding</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
            <li onClick={() => handleSetImage(3)}>
              <div className="flex flex-col hover:w-[130%]   hover:bg-[#0a0a0a35] md:py-2 md:px-[3rem]  hover:text-[#d4bfbf]  text-gray-950 text-inherit">
                <h1 className="md:text-xl">3. Destination wedding</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
            <li onClick={() => handleSetImage(4)}>
              <div className="flex flex-col hover:w-[130%]   hover:bg-[#0a0a0a35] md:py-2 md:px-[3rem] w-full  hover:text-[#d4bfbf]  text-gray-900 text-inherit">
                <h1 className="md:text-xl">4. Destination wedding</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
          </ol>
        </div>
        {/* max-[762px]:ml-[12rem] max-[640px]:ml-[6rem] max-[536px]:ml-[3rem]  min-[476px]:text-right */}
        <div className="flex flex-col md:pt-[200px] md:pr-3 ">
          <div className="gap-2  ">
            <div className="font-semibold uppercase max-[792px]:text-xl ">
              <h5 className="text-sm text-right font-bold max-[792px]:mb-3">
                destination
              </h5>
              <h1 className="text-[6rem] max-[976px]:text-[2.7rem]  max-[702px]:text-[3rem] max-[583px]:text-[2rem]  ">
                JODHPUR
              </h1>
            </div>
            <div>
              <div className="flex flex-row text-right text-white justify-end max-[600px]:text-center">
                <div className="border-3 w-3 text-white" />
                <ul className="flex gap-4 cursor-pointer text-xl md:pt-[80px] my-3 text-center">
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
