import React from "react";
import img from "../../demo/gallary2.jpg";
import img2 from "./c2.jpg";
import img3 from "./c3.jpg";
import { easeIn, motion } from "framer-motion";
import { Avatar } from "@mui/material";

import "swiper/css";
import "./client.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Client() {
  return (
    <div id="client" className="containers w:[100%] gap-3 md:mx-[2rem]">
      <Swiper navigation={true} modules={[Navigation]} className="">
      <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className=" md:w-[50%] md:h-[25rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
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
               style={{   fontFamily: "'Segoe UI', sans-serif"}}
                  className="text-[#6e4a20] md:mt-[1.5rem] tracking-widest md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
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
            <motion.div className=" md:w-[50%] md:h-[25rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
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
                <p
               style={{   fontFamily: "'Segoe UI', sans-serif"}}
                  className="text-[#6e4a20] md:mt-[1.5rem] tracking-widest md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
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
            <motion.div className=" md:w-[50%] md:h-[25rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
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
               style={{   fontFamily: "'Segoe UI', sans-serif"}}
                  className="text-[#6e4a20] md:mt-[1.5rem] tracking-widest md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
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
