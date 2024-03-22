import React from "react";
import img from "../../demo/gallary2.jpg";
import img2 from "./w8.jpg";
import img3 from "./gallary5.jpg";
import img4 from "./c4.jpg";
import img5 from "./c5.jpg";
import img6 from "./c6.JPG";
import img7 from "./w7.JPG";
import img8 from "./c8.jpg";
import img9 from "./c9.JPG";
import img11 from "./w9.jpeg";
import img12 from "./w10.JPG";
import img13 from "./w11.jpeg";
import img14 from "./w12.jpeg";
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
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Client() {
  return (
    <div
      id="client"
      className="relative containers w:[100%] gap-3 md:mx-[4rem]"
    >
      <div className="swiper-button image-swiper-button-next absolute right-0 top-[50%] text-white border-2 z-30 rounded-full p-3 text-2xl bg-[#b9935a] md:right-[-1.6rem]">
        <GrFormNextLink />
      </div>
      <div className="swiper-button image-swiper-button-prev absolute left-0 md:left-[-1.6rem] top-[50%] text-white border-2 z-30 rounded-full p-3 text-2xl bg-[#b9935a] ">
        <GrFormPreviousLink />
      </div>
      <Swiper
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="relative"
      >
        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className=" md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img2} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] md:mt-[1.5rem] text-justify tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
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
                  <Avatar
                    alt="Evelina & Basant"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Evelina & Basant
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                {/* <p
           style={{fontFamily: `'Segoe UI', sans-serif`,letterpacing:' 0.1em'}}
            className="text-[#705704] text-justify tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem]  leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2"
          ></p> */}
                {/* <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    We had the pleasure of working with Saaj wedding as our
                    wedding planner, and couldn't have asked for a more
                    incredible experience. From the very beginning, they took
                    our vision to heart and transformed it into a reality beyond */}
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  {/* </i> */}
                {/* </p> */}
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
          {/* //       <div className="px-[47%] border-black h-fit pt-5 "> */}
          {/* //         <Avatar */}
          {/* //           alt="Niraj & Aishwarya" */}
          {/* //           src="/static/images/avatar/1.jpg" */}
          {/* //         /> */}
          {/* //       </div> */}
          {/* //       <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light"> */}
          {/* //         Niraj & Aishwarya */}
          {/* //       </p> */}
          {/* //     </div> */}
          {/* //   </motion.div> */}
          {/* // </div> */}
        {/* // </SwiperSlide> */} 

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img3} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
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
                  <Avatar
                    alt="Anuroopa & Vishal"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Anuroopa & Vishal
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img4} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    We got married at Fort Chanwa, Jodhpur in 2023 and had
                    Sanjay as our planner. The journey form the moment we got in
                    touch with Sanjay to the moment we got married was full of
                    fun conversations. Sanjay is friendly, aware of the latest
                    wedding trends, understands the pain associated with
                    planning a marriage on Zoom calls.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar
                    alt="Vishal Shanbhag"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Vishal Shanbhag
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img5} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    We had the pleasure of working with Saaj wedding as our
                    wedding planner, and couldn't have asked for a more
                    incredible experience. From the very beginning, they took
                    our vision to heart and transformed it into a reality beyond
                    our wildest dreams. Their attention to detail was
                    impeccable, ensuring that every aspect of our wedding day
                    was flawless.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  {/* </i> */}
                {/* </p> */}
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                 {/* <div className="px-[47%] border-black h-fit pt-5 "> */}
                   {/* <Avatar */}
                    {/* alt="Mitalee & Hari"
                   src="/static/images/avatar/1.jpg"
                  />
                 </div>
                 <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Mitalee & Hari
             </p>
              </div> */}
           {/* </motion.div>
          </div>
        </SwiperSlide>  */}

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img6} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    We had the pleasure of working with Saaj wedding as our
                    wedding planner, and couldn't have asked for a more
                    incredible experience. From the very beginning, they took
                    our vision to heart and transformed it into a reality beyond
                    our wildest dreams. Their attention to detail was
                    impeccable, ensuring that every aspect of our wedding day
                    was flawless.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar
                    alt="Priyadarshani Jain"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Priyadarshani Jain
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img7} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    What an amazing experience it has been working with Sanjay
                    @Saaj Wedding. He completely understood my expectations for
                    all 4 events at my sister's wedding. He is unlike other
                    event planners who are very particular about how much time
                    they are suppose to give to a client however he was always
                    happy to chat as when needed and not even once he fixed the
                    time duration of the call.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Shilpi" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">Shilpi</p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img8} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    Our experience with Saaj weddings was really good! Sanjay
                    was very easy to work with and he made sure that all my
                    ideas were incorporated. He was patient during the entire
                    process and we were very happy with his final work. We would
                    definitely recommend Saaj weddings for anyone who is
                    planning their wedding!
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar
                    alt="Alisha Gupta"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Alisha Gupta
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img12} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    The best wedding planner I have ever come across for my my
                    Big Day! The whole team is really good and very flexible
                    with any last minute changes. Had a great time working with
                    Sanjay! He is really understanding and very helpful.
                    Definitely recommend this one to everyone who's looking to
                    plan their wedding! Looking forward to working with them in
                    future too
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar
                    alt="Vartika nangai"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Vartika nangai
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img13} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    It was my sister's wedding in December 2021 and we somehow
                    we couldn't book Wedding planner till December first week. I
                    met Saaj wedding team 10 days before the wedding and was
                    convinced in the first meeting that they have understood
                    what work I'm expecting in the wedding. To my surprise, when
                    I reached the venue in each of the event, the decor was
                    simply beyond my expectations.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Monal" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">Monal</p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img11} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    My brother's wedding that took place on 22nd Feb,20 we chose
                    SAAJ WEDDINGS as his wedding planner. We re amazed by the
                    level of professionalism they worked with - be it decor,
                    food and all the other wedding arrangements, they were just
                    so high more than our expectations, where the team of Sadj
                    took everything to a new level.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar
                    alt="Shreeya Sharma"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Shreeya Sharma
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img9} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    Overall happy with the quality of work and experience with
                    Saaj events. Wedding event decor is very critical and we
                    were very anxious on how the actual day would look like, but
                    Sanjay kept giving assurance that all will be fine and he
                    delivered at par with expectations. he is hardworking and
                    adjusting enough to serve the client needs
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar
                    alt="Peeyush Agarwal"
                    src="/static/images/avatar/1.jpg"
                  />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  Peeyush Agarwal
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] md:flex-row max-md:flex-col gap-4 bg-[#e7dfdfb9]  h-full px-2 ">
            <motion.div className="  w-[100%]  md:w-[50%] md:h-[20rem] mt-[2rem]  md:mb-[2rem]  md:ml-[1.5rem] ">
              <img src={img14} alt="card" className="  w-full h-[100%]" />
            </motion.div>
            <motion.div className="   w-[100%] md:mt-[3rem] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] ">
              <div className="text-center z-10 relative flex-wrap font-sans justify-center object-cover ">
                <h1
                  style={{ fontFamily: `"Tinos", serif` }}
                  className="text-[30px] uppercase tracking-widest font-bold pt-[1rem] pb-[1rem] text-[#7a4927]"
                >
                  What our client says?
                </h1>
                <p
                  style={{
                    fontFamily: "'Segoe UI', sans-serif",
                    letterSpacing: " 0.1em",
                  }}
                  className="text-[#705704] text-justify md:mt-[1.5rem] tracking-[0.103em] md:text-[1.203rem]  max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1"
                >
                  <i>
                    Saaj weddings successfully organised the wedding of my
                    sister in the month of January 2020 at the Gold Palace
                    Resorts, Jaipur. I am really thankful to Sanjay and his
                    skilled team that transformed our vision into a living
                    reality. We were ensured that the event execution happens in
                    the right manner and with the best results at all times.
                    {/* felt too. Special shoutout to Sanjay and his team who
                    hustled day in and out to make ends meet! Mr. Sanjay has
                    been extremely helpful. */}
                  </i>
                </p>
                {/* <img src={png} alt=""  className="absolute top-0 z-0"/> */}
                <div className="px-[47%] border-black h-fit pt-5 ">
                  <Avatar alt="Prasashti" src="/static/images/avatar/1.jpg" />
                </div>
                <p className="text-[#6b3b1f] pt-2 md:pb-3 font-light">
                  {" "}
                  Prasashti
                </p>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
