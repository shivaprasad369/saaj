import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import img from './assets/Saaj logo png3 (1)(1).png'
import './Home.css'
const data1 = [
  {
    id: 0,
    title: "Jodhpur",
    subTitle: "Wedding Planners",
    img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1683366572_308587077_502924788510406_3579032554870130889_n.jpg",
  },
  {
    id: 1,
    title: "Mumbai",
    subTitle: "⁠Decor and Design",
    img: "https://image.wedmegood.com/resized/800X/uploads/project/277123/1706366948_IMG_8129.JPG",
  },
  {
    id: 2,
    title: "Delhi",
    subTitle: "⁠Vendor and Artist Management",
    img: "https://image.wedmegood.com/resized/800X/uploads/project/277122/1706365881_0032DVK05052.jpg",
  },
  {
    id: 3,
    title: "Hyderabad",
    subTitle: "⁠Corporates Events",
    img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1683366572_316665412_560435356092682_2508021726762921812_n.jpg",
  },
];
export default function Home() {
  const [id,setId]=useState(0)
  const [hero, setHero] = useState({
    id: 0,
    title: "Jodhpur",
    subTitle: "Wedding Planners",
    img: "https://image.wedmegood.com/resized/800X/uploads/member/97501/1683366572_308587077_502924788510406_3579032554870130889_n.jpg",
  });
  const settings = {
    focusOnSelect: true,
    slidesToShow: 3.6,
    centerMode: true,
    vertical: true,
    slidesToScroll: 1,
    speed: 900,
   arrows:false,
  };
  const handleSetImage = (ind) => {
    setHero(data1[ind]);
    setId(data1[ind].id)
    console.log(hero.id,id);
  };
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
      className=" max-sm:bg-[#03010170]"
    >
        <Navbar />
        <img src={img} alt="" className="absolute sm:top-3 max-sm:top-2 left-3 sm:w-[8rem] max-sm:w-[6rem] "/>
      <div  className="bg-[#03010170] bg-cover  flex max-sm:h-[25rem] sm:justify-between max-sm:items-center max-sm:justify-center  overflow-hidden  w-full max-sm:text-xl text-inherit items-center flex-wrap max-md:text-sm ">
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0,transition:{duration:1.5,type:'tween',ease:'easeIn'}}} className="flex flex-col  bg-[#0f020240] z-auto  md:gap-2 object-contain">
          <ol
            type="1"
            style={{ fontFamily: "'Heebo', sans-serif" }}
            className="flex w-[28rem]  z-0 max-sm:hidden max-[422px]:w-[20rem]  font-light overflow-visible  flex-col tracking-widest max-sm:text-sm  text-white mt-[3rem] md:pt-10 object-cover   "
          >
            <Slider {...settings} className=" z-10 gap-20 md:py-10 ">
              <li
                onClick={() => {
                  handleSetImage(0);
                }}
                className="w-[20%]  "
              >
                <div
                style={ id===0 ? {color:"white"} :{color:"#816f6f"} }
                  className={`flex flex-col py-8 px-[1rem] text-[#b19595]   ${
                    hero.id === 0
                      ? "bg-[#000000ab]  w-[100%]  text-[#cebebe] text-2xl "
                      : ""
                  }   md:px-[1rem] text-inherit`}
                >
                  <h1 className="text-xl uppercase">1. Wedding Planners</h1>
                  <div className={`border-b-[1.5px] relative ${
                    hero.id === 0 ? 'border-white':'border-gray-500'} border-gray-500` }><span className={`border-b-[3px] h-2 w-[50%]  absolute top-[-6px]  border-white`} ></span> </div>{" "}
                  <p className="text-sm flex-wrap">Transforming dreams into unforgettable wedding memories</p>
                </div>
              </li>
              <li
           
                onClick={() => {
                  handleSetImage(1);
                }}
                className="w-[20%]  "
              >
                <div
                style={ id===1 ? {color:"white"} :{color:"#816f6f"} }
                  className={`flex flex-col py-8 px-[1rem] w-[100%] ${
                    hero.id === 1
                      ? "bg-[#070606ab]  w-[100%]  text-[#d8cbcb] text-2xl "
                      : ""
                  }   md:px-[1rem] text-inherit`}
                >
                
                    <h1 className="text-xl uppercase">2. Decor and Design</h1>
                    <div className="border-b-[1.5px] relative border-gray-500" ><span className={`border-b-[3px] h-2 w-[50%] absolute top-[-6px]   border-white`} ></span> </div>{" "}
                    <p className="text-sm">Exquisite decor, stunning designs for weddings</p>
               
                </div>
              </li>
              <li
                onClick={() => {
                  handleSetImage(2);
                }}
                className=""
              >
                <div
                style={ id===2 ? {color:"white"} :{color:"#816f6f"} }
                  className={`flex flex-col py-8 px-[1rem] ${
                    hero.id === 2
                      ? "bg-[#070606ab] w-[110%]  text-[#ddd0d0] text-3xl "
                      : ""
                  }  text-gray-950 text-inherit`}
                >
                  <h1 className="text-xl uppercase">
                    3. Vendor and Artist Management
                  </h1>
                  <div className="border-b-[1.5px] relative border-gray-500" ><span className={`border-b-[3px] h-2 w-[50%] absolute top-[-6px]  border-white`} ></span> </div>{" "}
                  <p className="text-sm">Expertly manage vendors and talented artists</p>
                </div>
              </li>
              <div>
                <li
                  onClick={() => {
                    handleSetImage(3);
                  }}
                >
                  <div
                  style={ id===3 ? {color:"white"} :{color:"#816f6f"} }
                    className={`flex flex-col py-8 px-[1rem] w-full   ${
                      hero.id === 3
                        ? "bg-[#070606ab]  text-[#d8c9c9] text-2xl "
                        : ""
                    }  text-gray-900 text-inherit`}
                  >
                    <h1 className="text-xl uppercase">4. Corporates Events</h1>
                    <div className="border-b-2 relative border-gray-500" ><span className={`border-b-[3px] h-2 w-[50%] absolute top-[-6px]  border-white`} ></span> </div>{" "}
                    <p className="text-sm">Import trace for requested module</p>
                  </div>
                </li>
              </div>
            </Slider>
          </ol>
        </motion.div>
        <div
          className="pr-6 flex flex-col text-inherit  max-[866px]:min-sm:text-xl  "
        >
          <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0,transition:{type:"spring",delay:0.3,duration:1,ease:'easeIn'}}} className=" flex sm:absolute top-[38%] right-0 justify-end flex-col text-center  max-[544px]:text-center sm:pr-4 ">
            <h5 className="sm:ml-[1.5rem] md:hidden text-[0.9rem]  tracking-[0.3rem] text-white sm:text-right overflow-hidden">
              {hero.subTitle}
            </h5>
            <span
               style={{   fontFamily: "Urban Jungle" }}
              className=" tracking-widest max-md:pt-4 scroll-m-0 mb-[2rem] z-0 max-sm:text-[3.5rem] max-md:text-[5rem] md:text-center text-[7rem] pb-3 text-inherit font-urbanjangle text-white sm:text-right sm:ml-[2rem]  sm:mb-[5rem]"
            >
              {hero.title}
            </span>
          </motion.div>
          <div>
            <div className="flex flex-row text-right text-white max-sm:items-center max-sm:justify-center">
              <ul className="absolute bottom-10 sm:right-10 max-sm:right-[30]  flex gap-4 cursor-pointer text-right text-2xl sm:pt-[100px] min-[1000px]:ml-[25rem] sm:ml-[3rem]  ">
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
                <a href="https://www.instagram.com/saaj_weddings/">
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
    </div>
  );
}
