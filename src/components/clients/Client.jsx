import React from "react";
import img from "../../demo/gallary2.jpg";
import img2 from "./w8.jpg";
import img3 from "./gallary5.jpg";
import { easeIn, motion } from "framer-motion";
import { Avatar } from "@mui/material";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "swiper/css";
import "./client.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Client() {
  return (
    <div id="client" className="relative containers w:[100%] gap-3 md:mx-[4rem]">
     
      <div className="swiper-button image-swiper-button-next absolute right-0 top-[50%] text-white border-2 z-30 rounded-full p-3 text-2xl bg-[#19134b] md:right-[-1.6rem]">
      <GrFormNextLink />
</div>
<div className="swiper-button image-swiper-button-prev absolute left-0 md:left-[-1.6rem] top-[50%] text-white border-2 z-30 rounded-full p-3 text-2xl bg-[#19134b] ">
<GrFormPreviousLink />
</div>
      <Swiper navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }} modules={[Navigation]} className="relative">
      <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className=" md:w-[70%] md:h-[25rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img2} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div
             
              className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
            >
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
              <h1
                  style={{ fontFamily:`"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
           
                >
                  What our client says?
                </h1>
                <p
               style={{fontFamily: "'Segoe UI', sans-serif",letterSpacing:' 0.1em'}}
                  className="text-[#705704] md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    We hired ''Saaj wedding'' team for our destination wedding
                    in Jaipur ! Mr. Sanjay executed our dream wedding board with
                    an exceptional team that made everything look effortless.
                    The guests at our wedding were in awe of everything they saw
                    around them, and it wasn’t just what they saw but what they
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Evelina & Basant
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className=" md:w-[70%] md:h-[25rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div
              
              className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
            >
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
              <h1
                  style={{ fontFamily:`"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
           
                >
                  What our client says?
                </h1>
                  {/* <p
           style={{fontFamily: `'Segoe UI', sans-serif`,letterpacing:' 0.1em'}}
            className="text-[#705704] text-justify tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem]  leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2"
          ></p> */}
                <p
               style={{fontFamily: "'Segoe UI', sans-serif",letterSpacing:' 0.1em'}}
                  className="text-[#705704] md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                  We had the pleasure of working with Saaj wedding as our
                    wedding planner, and couldn't have asked for a more
                    incredible experience. From the very beginning, they took
                    our vision to heart and transformed it into a reality beyond
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                Niraj & Aishwarya
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className=" md:w-[70%] w-[100%] md:h-[25rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img3} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div
             
              className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
            >
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily:`"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
           
                >
                  What our client says?
                </h1>
                <p
               style={{fontFamily: "'Segoe UI', sans-serif",letterSpacing:' 0.1em'}}
                  className="text-[#705704] md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                  It was so amazing and creative. I would recommend everyone
                    to choose saaj weddings for dream wedding. Abhishek and
                    sanjay both think differently with thier smart work. They
                    work like family with amazing ideas and in good budget.
                   
                   Really amazing hospitality & decor was as expected.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                Anuroopa &   Vishal
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}
