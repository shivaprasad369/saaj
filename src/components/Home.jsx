import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { motion, useScroll } from "framer-motion";
import classNames from "classnames";
import img from './assets/Saaj logo png3 (1)(1).png'

const data1 = [
  {
    id: 1,
    title: "Jodhapur",
    subTitle: "Wedding Planners",
    img: "https://image.wedmegood.com/resized/800X/uploads/project/277122/1706366152_0231DSC01460.jpg",
  },
  {
    id: 2,
    title: "Mumbai",
    subTitle: "⁠Decor and Design",
    img: "https://image.wedmegood.com/resized/800X/uploads/project/277123/1706366948_IMG_8129.JPG",
  },
  {
    id: 3,
    title: "Dehli",
    subTitle: "⁠Vendor and Artist Management",
    img: "https://image.wedmegood.com/resized/800X/uploads/project/277122/1706365881_0032DVK05052.jpg",
  },
  {
    id: 4,
    title: "Hydrabad",
    subTitle: "⁠Corporates Events",
    img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1683366572_308587077_502924788510406_3579032554870130889_n.jpg",
  },
];
export default function Home() {
  const [hero, setHero] = useState({
    id: 1,
    title: "Jodhapur",
    subTitle: "Wedding Planners",
    img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1472555802_4517983b_f847_4e35_8246_36616b8e1906___11.jpg",
  });
  const handleSetImage = (ind) => {
    setHero(data1[ind]);
    console.log(hero);
  };

  const settings = {
    focusOnSelect: true,
    // infinite: true,

    slidesToShow: 3.7,
    centerMode: true,
    vertical: true,
    slidesToScroll: 1,
    speed: 500,
   

  };

  // Used to determine which items should be visible. this prevents the "ghosting" animation

  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${hero.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "fit",
        width: "100%",
        position:'relative'
      }}
    >
      <Navbar />
      <img src={img} alt="" className="sm:absolute sm:top-3 max-sm:top-2 left-3 sm:w-[8rem] max-sm:w-[6rem] "/>
      <div  className="bg-[#03010170] bg-cover flex max-sm:h-[25rem] sm:justify-between max-sm:items-center max-sm:justify-center  overflow-hidden  w-full max-sm:text-xl text-inherit items-center flex-wrap max-md:text-sm ">
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0,transition:{duration:1.5,type:'tween',ease:'easeIn'}}} className="flex flex-col z-10 bg-[#0f020240]  md:gap-2 object-contain">
          <ol
            type="1"
            style={{ fontFamily: ` "Libre Baskerville", serif` }}
            className="flex w-[26rem] max-sm:hidden max-[422px]:w-[20rem]  font-light overflow-hidden  flex-col tracking-widest max-sm:text-sm  text-white mt-[3rem]  md:pt-10 object-cover   "
          >
            <Slider {...settings} className=" z-10 gap-20 md:py-10 ">
              <li
                onClick={() => {
                  handleSetImage(0);
                }}
                className="w-[20%]  "
              >
                <div
                  className={`flex flex-col py-8 px-[1rem] ${
                    hero.id === 1
                      ? "bg-[#070606ab]  w-[130%]  text-[#d4bfbf] text-2xl "
                      : "text-[#d3b4b4b4]"
                  }  md:px-[1rem] text-inherit`}
                >
                  <h1 className="text-xl">1. Wedding Planners</h1>
                  <div className="border-b-2 text-md" />{" "}
                  <p>Import trace for requested module</p>
                </div>
              </li>
              <li
                id="top"
                className=""
                onClick={() => {
                  handleSetImage(1);
                }}
              >
                <div
                  className={`flex  py-8 px-[1rem]  ${
                    hero.id === 2
                      ? "bg-[#070606ab]  w-[150%]  text-[#d4bfbf] text-2xl "
                      : "text-[#bea4a4b4]"
                  }  text-gray-900 text-inherit`}
                >
                  <div className="flex-col">
                    <h1 className="text-xl ">2. Decor and Design</h1>
                    <div className="border-b-2" />{" "}
                    <p>Import trace for requested module</p>
                  </div>
                </div>
              </li>
              <li
                onClick={() => {
                  handleSetImage(2);
                }}
                className=""
              >
                <div
                  className={`flex flex-col py-8 px-[1rem]   ${
                    hero.id === 3
                      ? "bg-[#070606ab] w-[130%]  text-[#d4bfbf] text-2xl "
                      : "text-[#c7a9a9b4]"
                  } text-gray-950 text-inherit`}
                >
                  <h1 className="text-xl">
                    3. Vendor and Artist Management
                  </h1>
                  <div className="border-b-2" />{" "}
                  <p>Import trace for requested module</p>
                </div>
              </li>
              <div>
                <li
                  onClick={() => {
                    handleSetImage(3);
                  }}
                >
                  <div
                    className={`flex flex-col py-8 px-[1rem] w-full   ${
                      hero.id === 4
                        ? "bg-[#070606ab]  text-[#d4bfbf] text-2xl "
                        : "text-[#c4aaaab4]"
                    } text-gray-900 text-inherit`}
                  >
                    <h1 className="text-xl">4. Corporates Events</h1>
                    <div className="border-b-2" />{" "}
                    <p>Import trace for requested module</p>
                  </div>
                </li>
              </div>
            </Slider>
          </ol>
        </motion.div>
        {/* max-[762px]:ml-[12rem] max-[640px]:ml-[6rem] max-[536px]:ml-[3rem]  min-[476px]:text-right */}

        <div
          className="pr-6 flex flex-col text-inherit  max-[866px]:min-sm:text-xl  "
          style={{   fontFamily: "Urban Jungle" }}
        >
          <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1,transition:{type:"spring",delay:0.3,duration:1,ease:'easeIn'}}} className=" flex sm:absolute top-[12rem] right-0 justify-end flex-col text-center  max-[544px]:text-center sm:pr-4 ">
            <h5 className="sm:ml-[1.5rem] md:hidden text-[0.9rem]  tracking-[0.3rem] text-white sm:text-right overflow-hidden">
              {hero.subTitle}
            </h5>
            <span
             
              className=" tracking-widest  mb-[2rem] z-0 max-sm:text-[3.5rem] max-md:text-[5rem] md:text-center text-[7rem] pb-3 text-inherit font-urbanjangle text-white sm:text-right sm:ml-[2rem]  sm:mb-[5rem]"
            >
              {hero.title}
            </span>
          </motion.div>
          <div>
            <div className="flex flex-row text-right text-white max-sm:items-center max-sm:justify-center">
              <ul className="absolute bottom-10 sm:right-10 max-sm:right-[30]  flex gap-4 cursor-pointer text-right text-2xl sm:pt-[100px] min-[1000px]:ml-[25rem] sm:ml-[3rem]  ">
                <div className="border-2 my-[2rem] w-40 h-0 mt-3 border-white md:block hidden"></div>
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
  );
}
