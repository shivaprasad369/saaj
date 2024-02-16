import React, { useState } from "react";
import img from "../assets/event.avif";
import { easeIn, motion } from "framer-motion";
import { Button } from "@mui/material";

export default function Services() {
const [more1,setMore1]=useState(false)
const [more2,setMore2]=useState(false)
const [more3,setMore3]=useState(false)
const [more4,setMore4]=useState(false)
  return (
    <div className="">
      <div className="text-center mt-[2rem]">
        <h1
          className="text-3xl uppercase"
          style={{ fontFamily: '"DM Serif Display", serif', fontWeight: 600 }}
        >
          Our services
        </h1>
      </div>
      <div id="client max-w:[90%] justify-center items-center ">
        <div className="md:w-[85%] md:mt-[6rem] md:mb-[10rem] rounded-xl md:rounded-tl-[100px] md:ml-[7%] flex m-2  md:flex-row max-md:flex-col gap-4 bg-[#948f8f35] md:h-[100%] h-full  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className=" md:w-[100%] mt-[-2rem] sm:rounded-tl-[100px]"
          >
            <img
              src={img}
              alt="card"
              className=" md:h-[110%] sm:rounded-tl-[100px] sm:rounded-br-[100px]"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black pb-2 min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
          >
            <div className="text-center flex-wrap font-sans justify-center object-contain ">
              <h1
                className="text-[3rem] leading-17 font-bold pt-[2rem] pb-[1rem] capitalize"
                style={{ fontFamily: '"Parisienne", cursive', fontWeight: 700 }}
              >
                wedding planner
              </h1>
              <p className="text-gray-600 md:text-[1rem] sm:text-[1.1rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1">
                Saaj Wedding stands proudly as the symbol of excellence among
                wedding planners in Jaipur, renowned for our unwavering
                commitment and years of expertise in crafting dream weddings. We
                understand that your big day is special, and our experience
                allows us to make it uniquely yours.
              </p>
              <div></div>
              <p className="text-gray-600 md:text-[1rem]  pb-[2rem] sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1">
              {more1 && 'At Saaj Wedding, our passion is to transform your dreams into reality, ensuring that every detail is a reflection of your unique love story. Entrust your special day to Saaj Wedding, where our seasoned expertise meets heartfelt dedication, promising you a celebration that transcends expectations and  becomes an everlasting chapter in your love story.'}
              </p>
              <Button onClick={()=>setMore1((more1)=>!more1)} variant="outlined">{more1 ? 'Know less': 'Show more'}</Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div id="client max-w:[90%] justify-center items-center ">
        <div className="md:w-[85%] md:ml-[7%] rounded-xl md:mb-[10rem] flex m-2 mt-10 md:flex-row max-md:flex-col gap-4 bg-[#948f8f35] md:h-[100%] h-full  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="md:hidden md:w-[90%] mt-[-2rem] sm:rounded-tl-[100px]"
          >
            <img
              src={img}
              alt="card"
              className=" md:h-[110%] sm:rounded-tl-[100px] sm:rounded-br-[100px]"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black pb-2 min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[1rem] "
          >
            <div className="text-center flex-wrap font-sans justify-center object-contain ">
              <h1
                className="text-[2.3rem]  font-bold pt-[2rem] pb-[1rem] capitalize"
                style={{ fontFamily: '"Parisienne", cursive', fontWeight: 700 }}
              >
                vendors and artist management
              </h1>
              <p className="text-gray-600 md:text-[1rem]  sm:text-[1rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1">
                vendors and artist management : At Saaj Wedding, we understand
                that the success of any celebration lies in seamless vendor and
                artist management. Choosing the right vendors and artists is
                like assembling the perfect team for your dream day. Our
                commitment to excellence extends to carefully selecting and
                managing each vendor and artist, ensuring they align with your
                vision and expectations.
              </p>
              <div className="p-2"></div>
              <p className="text-gray-600 md:text-[1rem]  pb-[1rem] sm:text-[1rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1">
              {more2 && <>From photographers capturing your cherished moments to caterers
                delighting taste buds, every vendor plays a crucial role. Our
                meticulous management ensures everyone works in harmony,
                creating a symphony of talents that makes your wedding
                extraordinary. With Saaj Wedding, you can relax knowing that we
                handle all the details, allowing you to enjoy a flawless
                celebration filled with the expertise and creativity of the best
                in the business.</>}
              </p>
              <Button onClick={()=>setMore2((more2)=>!more2)} variant="outlined">{more2 ? 'Know less': 'Show more'}</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="max-md:hidden md:w-[90%] mt-[-2rem] rounded-tl-[100px]"
          >
            <img
              src={img}
              alt="card"
              className=" md:h-[110%] rounded-tl-[100px] rounded-br-[100px]"
            />
          </motion.div>
        </div>
      </div>

      <div id="client max-w:[90%] justify-center items-center ">
        <div className="md:w-[85%]  md:ml-[7%] md:rounded-tl-[100px] rounded-xl md:mb-[10rem] flex m-2 mt-10 md:flex-row max-md:flex-col gap-4 bg-[#948f8f35] md:h-[100%] h-full  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className=" md:w-[90%] mt-[-2rem] sm:rounded-tl-[100px]"
          >
            <img
              src={img}
              alt="card"
              className=" md:h-[110%] max-sm:h-full sm:rounded-tl-[100px] sm:rounded-br-[100px]"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black pb-2 min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
          >
            <div className="text-center flex-wrap font-sans justify-center object-contain ">
              <h1
                className="text-[2.5rem] leading-17 font-bold pt-[1rem] pb-[1rem] capitalize"
                style={{ fontFamily: '"Parisienne", cursive', fontWeight: 700 }}
              >
                decor and design
              </h1>
              <p className="text-gray-600 md:text-[1rem]  sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1">
                At Saaj Wedding, we know that how a wedding looks and feels is
                super important. Decor and design are like the fairy tale makers
                – they create the magical atmosphere that makes your day
                unforgettable. We pay extra attention to every detail, from
                flowers to lights, making sure everything matches your style and
                makes your love story shine.
              </p>
              <div className="p-2"></div>
              <p className="text-gray-600 pb-[2rem] md:text-[1rem]  sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md px-1">
               {more3 && <> Our goal is to turn your venue into a dreamy space that brings
                out all the happy emotions, not just for you but for everyone
                celebrating with you. With Saaj Wedding, you can count on a
                perfect mix of creativity and elegance, making your special day
                as beautiful as your love story.</>}
              </p>
              <Button onClick={()=>setMore3((more3)=>!more3)} variant="outlined">{more3 ? 'Know less': 'Show more'}</Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div id="client max-w:[90%] justify-center items-center ">
        <div className="md:w-[85%] md:ml-[7%]  md:mb-[10%] flex m-2 mt-10 rounded-xl md:flex-row max-md:flex-col gap-4 bg-[#948f8f35] md:h-[100%] h-full  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="md:hidden md:w-[100%] sm:w-full sm:h-full mt-[-2rem] sm:rounded-tl-[100px]"
          >
            <img
              src={img}
              alt="card"
              className=" md:h-[110%] sm:rounded-tl-[100px] sm:rounded-br-[100px]"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black pb-2 min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
          >
            <div className="text-center flex-wrap font-sans justify-center object-contain ">
              <h1
                className="text-[2.5rem] leading-17 font-bold pt-[2rem] pb-[1rem]  capitalize"
                style={{ fontFamily: '"Parisienne", cursive', fontWeight: 700 }}
              >
                corporate events
              </h1>
              <p className="text-gray-600 sm:text-[1.2rem] md:text-[1rem]  max-sm:text-[1rem]  whitespace-none text-md px-1">
                At Saaj Wedding, we bring our expertise in creating magical
                moments to the corporate world, offering a unique touch to your
                business events. Whether it's a product launch, corporate
                retreat, or a milestone celebration, we understand the
                importance of leaving a lasting impression. Our seasoned team at
                Saaj Wedding meticulously plans and executes corporate events,
                ensuring a perfect blend of professionalism and creativity.
              </p>
              <div></div>
              <p className="text-gray-600 pb-[2rem] md:text-[1rem]  sm:text-[1.2rem] max-sm:text-[1rem]  whitespace-none text-md px-1">
              {more4 && <> From conceptualization to flawless execution, we focus on every
                detail, including venue selection, thematic decor, audio-visual
                arrangements, and guest experience. Trust Saaj Wedding to
                elevate your corporate gatherings, making them not just events
                but experiences that reflect the excellence of your brand</>}
              </p>
              <Button onClick={()=>setMore4((more4)=>!more4)} variant="outlined">{more4 ? 'Know less': 'Show more'}</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: easeIn,
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="max-md:hidden md:w-[100%] mt-[-2rem] sm:rounded-tl-[100px]"
          >
            <img
              src={img}
              alt="card"
              className=" md:h-[110%] rounded-tl-[100px] rounded-br-[100px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}