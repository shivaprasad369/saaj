import React, {useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import slide1 from "./assets/slide1.jpeg";
import slide2 from "./assets/slide2.jpeg";
import slide3 from "./assets/slide3.avif";
import slide4 from "./assets/slide4.jpg";
import Navbar from "./Navbar";

export default function Home() {

  const [img, setImg] = useState("http://localhost:3001/static/media/slide1.3eb299e3ab97891c5a26.jpeg");
  const handleSetImage = (image) => {
    setImg("http://localhost:3001" + image);
    console.log(image)
  
  };
  console.log(img);
  return (
    <div
    id='home'
      className={`bg- bg-no-repeat bg-cover text-black max-md:h-[0%]`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <Navbar />
      <div className="flex justify-between text-inherit max-[446px]:justify-center max-[792px]:text-sm items-center flex-wrap md:p-4 max-md:text-sm ">
        <div className="flex flex-col bg-[#0f020240] md:gap-3 items-center justify-center py-[4rem] px-[2rem] object-contain ">
          <ol
            type="1"
            className=" flex flex-col  text-white max-[462px]:text-[0.8rem]  max-[702px]:text-[10px] md:gap-10 font-semibold object-cover  max-[792px]:text-sm "
          >
            <li onClick={() => handleSetImage(slide1)}>
              <a href="#" className={"active:text-orange-300"}>
                <div className="flex flex-col hover:w-[130%] py-4 hover:bg-[#0a0a0a35] md:px-[3rem] hover:text-[#2b2626]  text-inherit">
                  <h1 className="md:text-xl">1. Destination wedding</h1>
                  <div className="border-b-2" />{" "}
                  <p>Import trace for requested module</p>
                </div>
              </a>
            </li>
            <li onClick={() => handleSetImage(slide2)}>
              <div className="flex flex-col hover:w-[130%]  hover:bg-[#0a0a0a35] py-4 md:px-[3rem] hover:text-[#2b2626] text-gray-900 text-inherit">
                <h1 className="md:text-xl">2. Destination wedding</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
            <li onClick={() => handleSetImage(slide3)}>
              <div className="flex flex-col hover:w-[130%]  hover:bg-[#0a0a0a35] py-4 md:px-[3rem]  hover:text-[#2b2626]  text-gray-950 text-inherit">
                <h1 className="md:text-xl">3. Destination wedding</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
            <li onClick={() => handleSetImage(slide4)}>
              <div className="flex flex-col hover:w-[130%] hover:bg-[#0a0a0a35] py-4 md:px-[3rem] w-full  hover:text-[#2b2626]  text-gray-900 text-inherit">
                <h1 className="md:text-xl">4. Destination wedding</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
          </ol>
        </div>
        {/* max-[762px]:ml-[12rem] max-[640px]:ml-[6rem] max-[536px]:ml-[3rem]  min-[476px]:text-right */}
        <div className="flex flex-col md:pt-[200px] md:pr-3">
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
              <div className="flex flex-row text-right text-black justify-end max-[600px]:text-center">
                <div className="border-3 w-3 text-black" />
                <ul className="flex gap-4 cursor-pointer text-xl md:pt-[120px] my-4 text-center">
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
