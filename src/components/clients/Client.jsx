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
          <div className="flex md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className=" md:w-[100%] pt-[2rem] md:pl-[3rem] pb-[2rem]">
              <img src={img2} alt="card" className=" md:h-[100%] w-full" />
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
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[2rem] md:mt-[3rem] tracking-wider font-bold pt-[2rem] pb-[1rem] text-[#724a29]"
                >
                  What our client says?
                </h1>
                <p
               style={{   fontFamily: "'Segoe UI', sans-serif"}}
                  className="text-[#6e4a20] md:mt-[3rem] tracking-widest sm:text-[1.3rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
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
          <div className="flex md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className=" md:w-[100%] pt-[2rem] md:pl-[3rem] pb-[2rem]">
              <img src={img} alt="card" className=" md:h-[100%] w-full" />
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
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[2rem] md:mt-[3rem] tracking-wider font-bold pt-[2rem] pb-[1rem] text-[#724a29]"
                >
                  What our client says?
                </h1>
                <p
                   style={{   fontFamily: "'Segoe UI', sans-serif"}}
                  className="text-[#6e4a20] md:mt-[3rem] tracking-widest sm:text-[1.3rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    We had the pleasure of working with Saaj wedding as our
                    wedding planner, and couldn't have asked for a more
                    incredible experience. From the very beginning, they took
                    our vision to heart and transformed it into a reality beyond
                    {/* our wildest dreams. Their attention to detail was
                    impeccable, ensuring that every aspect of our wedding day
                    was flawless. They brought a sense of warmth and personal
                    connection to our planning journey. */}
                    {/* All the requests which we have made
                    and changes we have requested were delivered better than we
                    could ask for. Planning team were extremely understanding
                    and helpful, our Indian as well as foreigner guest has loved
                    the decor and appraised the use of real flowers and event
                    planning. Sanjay is extremely professional and a person who
                    delivers more than what he promises. Sanjay has agreed to
                    most of the last-minute amendments and well-coordinated with
                    the other vendors to get the event done in fascinating
                    manner. My family & I would 100% recommend reaching out to
                    them if you’re planning your special day and looking for a
                    fairytale wedding planner with a professional team,
                    especially if you are NRI. */}
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
          <div className="flex md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9] h-full px-2 ">
            <motion.div className=" md:w-[100%] pt-[2rem] md:pl-[3rem] pb-[2rem]">
              <img src={img3} alt="card" className=" md:h-[100%]" />
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
                    style={{   fontFamily: "'Segoe UI', sans-serif"}}
                  className="text-[2rem] md:mt-[3rem] tracking-wider font-bold pt-[2rem] pb-[1rem] text-[#724a29]"
                >
                  What our client says?
                </h1>
                {/* <img src={png} alt=""  className="absolute top-0 w-[4rem] rotate-12 right-[24rem]"/> */}
                <p
                    style={{   fontFamily: "'Segoe UI', sans-serif"}}
                  className="text-[#6e4a20]  md:mt-[3rem] tracking-widest sm:text-[1.3rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    It was so amazing and creative. I would recommend everyone
                    to choose saaj weddings for dream wedding. Abhishek and
                    sanjay both think differently with thier smart work. They
                    work like family with amazing ideas and in good budget.
                   
                   Really amazing hospitality & decor was as expected. 
                    {/* Everyone
                    appreciated it & loved it Sanjay is extremely professional
                    and a person who delivers more than what he promises. My
                    family & I would 100% recommend reaching out to them if
                    you’re planning your special day */}
                  </i>
                </p>
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
