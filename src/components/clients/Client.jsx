import React from "react";
import img from "../../demo/gallary2.jpg";
import { easeIn, motion } from "framer-motion";
import { Avatar } from "@mui/material";
import png from "../assets/flower-black-and-white-png-41825.png";
import "swiper/css";
import './client.css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick"
// import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Client() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    innerWidth:90,
    slidesToScroll: 1,
    
    arrow:true
  };
  return (
    <div id="client" className=" max-w:[100%] gap-3 md:mx-[2rem]">
     <Slider {...settings}>
        <SwiperSlide>
          <div className="flex md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9] h-full px-2 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
          
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeIn",
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                },
              }}
              className=" md:w-[100%] pt-[2rem] md:pl-[3rem] pb-[2rem]"
            >
              <img src={img} alt="card" className="  md:h-[100%] w-[100%] " />
            </motion.div>
            <motion.div
          
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeIn",
                  type: "spring",
                  duration: 1,
                  delay: 0.7,
                },
              }}
              className=" border-black min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
            >
              <div className="text-center items-center relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: ` "Libre Baskerville", serif` }}
                  className="text-[2rem] md:mt-[3rem] tracking-widest font-bold pt-[2rem] pb-[1rem] text-[#724a29]"
                >
                  What our client says?
                </h1>
                {/* <img src={png} alt=""  className="absolute top-0 w-[4rem] rotate-12 right-[24rem]"/> */}
                <p
                  style={{ fontFamily: `"Mate SC", serif` }}
                  className="text-[#6e4a20] md:mt-[3rem] justify-center items-center tracking-widest sm:text-[1.3rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                  Choosing Saaj Wedding for our wedding in Jaipur was the best
                  decision. Their meticulous planning, attention to detail, and
                  personalized touch made our celebration truly magical. Highly
                  recommend!</i>
                </p>
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">Shivaprasad</p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
             
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeIn",
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                },
              }}
              className=" md:w-[100%] pt-[2rem] md:pl-[3rem] pb-[2rem]"
            >
              <img src={img} alt="card" className=" md:h-[100%]" />
            </motion.div>
            <motion.div
              
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeIn",
                  type: "spring",
                  duration: 1,
                  delay: 0.7,
                },
              }}
              className=" border-black min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
            >
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: ` "Libre Baskerville", serif` }}
                  className="text-[2rem] md:mt-[3rem] tracking-widest font-bold pt-[2rem] pb-[1rem] text-[#724a29]"
                >
                  What our client says?
                </h1>
                <p
                  style={{ fontFamily: `"Mate SC", serif` }}
                  className="text-[#6e4a20] md:mt-[3rem] tracking-widest sm:text-[1.3rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                  Choosing Saaj Wedding for our wedding in Jaipur was the best
                  decision. Their meticulous planning, attention to detail, and
                  personalized touch made our celebration truly magical. Highly
                  recommend!</i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">Shivaprasad</p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9] h-full px-2 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
           
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeIn",
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                },
              }}
              className=" md:w-[100%] pt-[2rem] md:pl-[3rem] pb-[2rem]"
            >
              <img src={img} alt="card" className=" md:h-[100%]" />
            </motion.div>
            <motion.div
              
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeIn",
                  type: "spring",
                  duration: 1,
                  delay: 0.7,
                },
              }}
              className=" border-black min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
            >
              <div className="text-center relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: ` "Libre Baskerville", serif` }}
                  className="text-[2rem] md:mt-[3rem] tracking-widest font-bold pt-[2rem] pb-[1rem] text-[#724a29]"
                >
                  What our client says?
                </h1>
                {/* <img src={png} alt=""  className="absolute top-0 w-[4rem] rotate-12 right-[24rem]"/> */}
                <p
                  style={{ fontFamily: `"Mate SC", serif` }}
                  className="text-[#6e4a20]  md:mt-[3rem] tracking-widest sm:text-[1.3rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                  Choosing Saaj Wedding for our wedding in Jaipur was the best
                  decision. Their meticulous planning, attention to detail, and
                  personalized touch made our celebration truly magical. Highly
                  recommend!</i>
                </p>
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">Shivaprasad</p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Slider>
    </div>
  );
}
