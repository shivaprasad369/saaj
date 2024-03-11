import React, { useEffect } from "react";
import Aboutus from "../About";
import member from "../assets/member.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById('about1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div id="about1">
      <Aboutus/>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", duration: 1.3, ease: "easeIn" },
        }}
        className="overflow-hidden"
      >
        <div className="flex gap-4 pt-[3rem] flex-col justify-center items-center text-center text-xl tracking-wider flex-wrap">
          <h1
            className="text-3xl uppercase tracking-widest font-semibold text-[#53431f]"
            style={{ fontFamily: ` "Libre Baskerville", serif` }}
          >
            About Saaj
          </h1>
          <p  style={{ fontFamily: `'Segoe UI', sans-serif` }} className="border-0 w-[80%] text-[1.2rem] leading-8 text-[#7c582f] text-justify">
            At Saaj Weddings, we weave dreams into reality. With a passion for
            perfection and an eye for elegance, our dedicated team crafts
            bespoke weddings that reflect your unique love story. Let us
            transform your vision into a breathtaking celebration, making
            moments last a lifetime.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col py-[4rem]">
        <div className="flex flex-col justify-center items-center text-center tracking-widest gap-3">
          <h1
            className="uppercase text-3xl font-semibold text-[#3f3113]"
            style={{ fontFamily: ` "Libre Baskerville", serif` }}
          >
            Our Team
          </h1>
          <span style={{ fontFamily: `'Segoe UI', sans-serif` }} className="text-[1.3rem] text-[#4b3419] tracking-widest">
            <i>The core members at saaj weddings</i>
          </span>
        </div>
        <div className="grid md:grid-cols-2 max-[948px]:grid-cols-1 justify-around items-center gap-4  my-[4rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.9,
              whileInView: { type: "spring", duration: 2, ease: "easeIn" },
            }}
            className="border-0 flex md:flex-col w-[100%] text-center max-md:flex-col-reverse "
          >
            <div className="relative border-[1rem] w-[100%] h-[40rem] max-sm:w-[100%] border-[#835d2c]">
              <img
                src={member}
                alt=""
                className="absolute h-[40rem] w-[100%] bottom-[0rem]"
              />
            </div>
            <div className="text-center md:pt-[5rem] max-md:pb-[5rem] text-xl tracking-widest">
              <h1 className="text-[#706923]">Rohit Naik</h1>
              <span>His Position</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.9,
              whileInView: {
                type: "spring",
                delay: 0.6,
                duration: 2,
                ease: "easeIn",
              },
            }}
            className="border-0 w-[100%] text-center "
          >
            <div className=" py-[2rem] pb-[5rem] text-xl tracking-widest">
              <h1 className="text-2xl text-[#776823]">Rohit Naik</h1>
              <span className="tracking-widest leading-9">His Position</span>
            </div>
            <div className="relative border-[1rem] w-[100%] max-md:w-screen h-[40rem] border-[#835d2c] ">
              <img
                src={member}
                alt=""
                className=" absolute h-[40rem] w-[100%]  bottom-[0rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
