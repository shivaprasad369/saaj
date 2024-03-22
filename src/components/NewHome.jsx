import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import Navbar from "./Navbar";
import valume from "./Ui/volume.png";
import valume1 from "./Ui/mute.png";
import { motion, useScroll } from "framer-motion";
import classNames from "classnames";
import img from "./assets/Saaj logo png3 (1)(1).png";
import "./Home.css";
import video from "../Video/saaj2.mp4";
import bg from "../Video/bg.jpg";
// const data1 = [
//   {
//     id: 0,
//     title: "Jodhpur",
//     subTitle: "Wedding Planners",
//     img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1683366572_308587077_502924788510406_3579032554870130889_n.jpg",
//   },
//   {
//     id: 1,
//     title: "Mumbai",
//     subTitle: "⁠Decor and Design",
//     img: "https://image.wedmegood.com/resized/800X/uploads/project/277123/1706366948_IMG_8129.JPG",
//   },
//   {
//     id: 2,
//     title: "Delhi",
//     subTitle: "⁠Vendor and Artist Management",
//     img: "https://image.wedmegood.com/resized/800X/uploads/project/277122/1706365881_0032DVK05052.jpg",
//   },
//   {
//     id: 3,
//     title: "Hyderabad",
//     subTitle: "⁠Corporates Events",
//     img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1683366572_316665412_560435356092682_2508021726762921812_n.jpg",
//   },
// ];
export default function Home() {
  const [id, setId] = useState(0);
  const [enable, setEnable] = useState(false);
  const handleValue = () => {
    var video = document.getElementById('vid');
    setEnable(!enable);
video.volume=0.5;
  };
  const [hero, setHero] = useState({
    id: 0,
    title: "Jodhpur",
    subTitle: "Wedding Planners",
    img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1683366572_308587077_502924788510406_3579032554870130889_n.jpg",
  });

  const settings = {
    focusOnSelect: true,
    //  infinite: false,

    slidesToShow: 3.6,
    centerMode: true,
    vertical: true,
    slidesToScroll: 1,
    speed: 900,
    arrows: false,
  };
  //   const handleSetImage = (ind) => {
  //     setHero(data1[ind]);
  //     setId(data1[ind].id)
  //     console.log(hero.id,id);
  //   };

  // Used to determine which items should be visible. this prevents the "ghosting" animation

  return (
    <div
      id="home"
      style={{
        // backgroundImage: `url(${hero.img})`,
        // backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        position: "relative",
      }}
      className=" max-sm:bg-[#03010170] "
    >
      <Navbar />
      <img
        src={img}
        alt=""
        className="absolute sm:top-3 max-sm:top-2 left-3 sm:w-[13rem] max-sm:w-[8rem] "
      />
      <div className="bg-[#ddd3d300] bg-cover md:h-[100vh]  overflow-hidden object-contain w-[100%] h-[30rem] ">
        <video
        id="vid"
          className="absolute w-full h-[100%]  object-cover  top-0 left-0 z-[-1] overflow-hidden"
          poster={bg}
          autoPlay
          loop
          muted={enable ? false : true}
   
          // controls
          // volume={0.2}
          
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          className={`absolute right-[2rem] bottom-[0.4rem] `}
          onClick={handleValue}
        >
          {enable ?
          <img src={valume} className="w-[3rem] h-[3rem]" />
          : 
          <img src={valume1} className="w-[3rem] h-[3rem]" />
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
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
