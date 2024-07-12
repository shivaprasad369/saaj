import React, {useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import valume from "./Ui/volume.png";
import valume1 from "./Ui/mute.png";


import "./Home.css";
import video from "../Video/saaj2.mp4";
import bg from "../Video/bg.jpg";
import Navbars from "./Navbar";
export default function Home() {
 
  const [enable, setEnable] = useState(false);
  const handleValue = () => {
    var video = document.getElementById('vid');
    setEnable(!enable);
video.volume=0.1;
  };
  return (
    <div
      id="home"
      style={{
       
        backgroundSize: "cover",
        backgroundPosition: "center",

        position: "relative",
      }}
      className="  "
    >
      {/* <Navbars/> */}
      {/* <img
        src={img}
        alt="home"
        className="absolute sm:top-3 max-sm:top-2 left-3 sm:w-[10rem] max-sm:w-[8rem] "
      /> */}
      <div className=" bg-cover md:h-[100vh]  overflow-hidden object-contain w-[100%] h-[40rem] ">
        <video
        id="vid"
          className="absolute w-full h-[100%]  object-cover  top-0 left-0 z-[-1] overflow-hidden"
          poster={bg}
          autoPlay
          loop
          muted={enable ? false : true}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          className={`absolute right-[2rem] bottom-[0.4rem] `}
          onClick={handleValue}
        >
          {enable ?
          <img src={valume} alt="home" className="w-[2.7rem] h-[2.7rem]" />
          : 
          <img src={valume1}  alt="home" className="w-[2.7rem] h-[2.7rem]" />
          }
        </div>
        <div>
          <div className="flex flex-row text-right text-white max-sm:items-center max-sm:justify-center">
            <ul className="absolute md:bottom-20 bottom-5 sm:right-10 max-sm:right-[30]  flex gap-4 cursor-pointer text-right text-2xl sm:pt-[100px] min-[1000px]:ml-[25rem] sm:ml-[3rem]  ">
              <div className="border-2 my-[2rem] w-40 h-0 mt-3 border-white md:block hidden"></div>

              <a href="https://www.instagram.com/saaj_weddings/">
                <li>
                  <FaInstagram />
                </li>
              </a>
              <a href="https://www.youtube.com/channel/UCUXhh0K2BqccrkffVJNJXmA">
                <li>
                  <FaYoutube />
                </li>
              </a>
              <a href="https://www.facebook.com/saajweddingsindia/">
                <li>
                  <FaFacebookF />
                </li>
              </a>
          
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
