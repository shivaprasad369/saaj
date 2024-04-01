import React, { useEffect, useState } from "react";
import data from "../../constants/images";
import img2 from "./10.jpg";
import img3 from "./9.jpg";
import img4 from "../../components/assets/service3(vender).jpg";
import img5 from "./s4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import w1 from "../assets/arch.png";
import w2 from "../assets/hall.png";
import w3 from "../assets/vendor.png";
import w4 from "../assets/music.png";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

import png from "../assets/—Pngtree—watercolor floral border composition for_4869610.png";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import {  motion } from "framer-motion";


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
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 2, type: "spring" },
      }}
      id="services"
      className="p-2 relative md:py-8 rounded-md overflow-hidden justify-center md:mx-[3rem] items-center bg-[#f3ebeb]"
    >
      <img
        src={png}
        alt="logo"
        className="absolute z-10 top-0 left-0 opacity-[0.7] w-[8rem] max-sm:w-[5rem]"
      />

      <div className="grid relative md:grid-cols-2 bg-[#f3ebeb] grid-cols-1 gap-2">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { ease: "easeInOut", duration: 2, type: "spring" },
          }}
          className=" md:pl-3 py-[2rem] md:flex flex-col items-center 
          justify-center  "
        >
          <h1
            style={{ fontFamily: `   "Tinos", serif` }}
            className="uppercase text-[#7a4927] tracking-widest text-center font-bold text-[30px]"
          >
            our services
          </h1>

          <p
            style={{ fontFamily: '"Alegreya", serif ',fontStyle:'italic', letterpacing: " 0.1em" }}
            className="text-[#705704] text-justify tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem]  leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2"
          >
            Elevate your love story with a destination wedding orchestrated by
            Saaj Weddings. Our expertise extends beyond borders, crafting dream
            weddings in Beautiful spots. Let us turn your destination dreams
            into a reality, where every detail is infused with our signature
            touch of excellence
          </p>
        </motion.div>
        <motion.div
         
          className=" bg-[#f3f3f5]  w-auto "
        >
          <motion.div
            initial={{ bottom: "2rem" }}
            whileInView={{ bottom: "0rem" }}
            transition={{ duration: 2, type: "spring" }}
            className=" container-1 relative border-0  items-center bg-[#f3ebeb] justify-center uppercase text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              className="absolute border-2 z-[0] opacity-[0.2] max-sm:w-[5rem] bottom-[30%] right-[73%]  w-[10rem]  "
            >
              <g
                fill="#e0b76b"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.33333,5.33333)">
                  <circle
                    cx="36"
                    cy="20"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                  <circle
                    cx="36"
                    cy="12"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="36"
                    cy="36"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                  <circle
                    cx="36"
                    cy="28"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="28"
                    cy="20"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="28"
                    cy="12"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                  <circle
                    cx="28"
                    cy="36"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="28"
                    cy="28"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                  <circle
                    cx="20"
                    cy="20"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                  <circle
                    cx="20"
                    cy="12"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="20"
                    cy="36"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                  <circle
                    cx="20"
                    cy="28"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="12"
                    cy="20"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                  <circle
                    cx="12"
                    cy="36"
                    r="3"
                    fill-opacity="0.6"
                    fill="#8c5f14"
                  ></circle>
                  <circle
                    cx="12"
                    cy="28"
                    r="3"
                    fill-opacity="0.76863"
                    fill="#bc8947"
                  ></circle>
                </g>
              </g>
            </svg>
            {/* <img
              src={png1}
              alt=""
              className="absolute z-0 opacity-[0.1] bottom-[30%] left-9  w-[15rem]  "
            /> */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectCards, Autoplay]}
            >
              <SwiperSlide className="flex  flex-col ">
                <img
                  src={img2}
                  alt="icons"
                  className="max-[412px]:h-[250vh] md:h-[75%] w-[100%]"
                />
                <h1
                  style={{ fontFamily: '"Alegreya", serif ' }}
                  className={`text-xl flex gap-3 flex-wrap tracking-widest pt-[0.6rem] text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  <img src={w1} alt="icons" width={40} />
                  Wedding Planner
                </h1>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col">
                <img
                  src={img3}
                  alt="icons"
                  className="w-[100%] max-[412px]:h-[250vh]  md:h-[80%]"
                />
                <h1
                  style={{ fontFamily: '"Alegreya", serif ' }}
                  className={`text-xl flex gap-4 flex-wrap tracking-widest pt-[1rem] text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  <img src={w2} alt="icons" width={40} />
                  Decor and Design
                </h1>
              </SwiperSlide>

              <SwiperSlide className="flex flex-col">
                <img
                  src={img4}
                  alt="sevice"
                  className="w-[100%] max-[412px]:h-[250vh]  md:h-[75%]"
                />
                <h1
                  style={{ fontFamily: '"Alegreya", serif ' }}
                  className={`text-xl flex gap-4 tracking-widest pt-[0.5rem] relative text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  <img
                    src={w3}
                    alt="icons"
                    width={40}
                    className="text-center absolute left-[10%]"
                  />

                  <span className="w-[70%]">Vendor and Artist Management</span>
                </h1>
              </SwiperSlide>

              <SwiperSlide className="flex flex-col">
                <img
                  src={img5}
                  alt="icons"
                  className="w-[100%] max-[412px]:h-[250vh]  md:h-[80%]"
                />
                <h1
                  style={{ fontFamily: '"Alegreya", serif ' }}
                  className={`text-xl flex gap-4 tracking-widest pt-[0.7rem] text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  <img src={w4} alt="icons" width={40} />
                  Corporate Events
                </h1>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
