import React, { useEffect, useState } from "react";
import w1 from "./Ui/a1.jpg";
import w2 from "./Ui/a2.jpg";

import w11 from "./Ui/a22.jpg";
import w22 from "./Ui/a11.jpg";

import { Button, Skeleton } from "@mui/material";
import { easeIn, motion } from "framer-motion";
import png from "./assets/pngegg.png";
import { Link } from "react-router-dom";
import axios from "axios";
export default function About() {
  const [more, setMore] = useState(false);
  const handleMore = () => {
    setMore((more) => !more);
  };
  // const [loading, setLoading] = useState(false);
  // const [img, setImg] = useState("");
  // const [img2, setImg2] = useState("");
  // const [img3, setImg3] = useState("");
  // const [img4, setImg4] = useState("");
  // async function handleImage(id) {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);
  //     console.log(res.data.data);
  //     const result = res;
  //     setImg(result.data?.data?.photo);
  //   } catch (err) {
  //     alert(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function handleImage2(id) {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);
  //     console.log(res.data.data);
  //     const result = res;
  //     setImg2(res.data?.data?.photo);
  //   } catch (err) {
  //     alert(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // async function handleImage3(id) {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);
  //     console.log(res.data.data);
  //     const result = res;
  //     setImg3(res.data?.data?.photo);
  //   } catch (err) {
  //     alert(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // async function handleImage4(id) {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);
  //     console.log(res.data.data);
  //     const result = res;
  //     setImg4(res.data?.data?.photo);
  //   } catch (err) {
  //     alert(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   handleImage(1);
  //   handleImage2(2);
  //   handleImage3(3);
  //   handleImage4(4);
  // }, [img, img2, img3, img4]);
  return (
    <div
      id="about"
      className="z-100 relative py-[2rem] pt-[3rem] md:px-[3rem] overflow-hidden flex max-sm:flex-col sm:justify-between  w-[100%] md:gap-[5rem] "
    >
      <img
        src={png}
        alt=""
        className="absolute bottom-0 right-0 rotate- width-20 w-[10rem] opacity-[0.6]"
      />
      <img
        src={png}
        alt=""
        className="absolute top-0 left-0 rotate-180 width-20 w-[10rem] opacity-[0.6]"
      />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { ease: "easeIn", type: "spring", duration: 2 },
        }}
        className="flex flex-col sm:gap-3 md:ml-[3rem]  sm:w-[40%] sm:pt-[5%] sm:pb-[2rem] max-sm:pb-[2rem]"
      >
        <div>
          <h1
            style={{ fontFamily: `"Tinos", serif` }}
            className="uppercase text-[#7a4927] tracking-widest text-center font-bold text-[30px]"
          >
            ABout US
          </h1>
          <div className=" ">
            <p
              style={{ fontFamily: `'Segoe UI', sans-serif` }}
              className="tracking-widest text-justify text-[#705704] md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[1rem] max-sm:px-[2rem] sm:pl-[3rem]"
            >
              Welcome to Saaj Weddings, where we turn your wedding dreams into
              reality amidst the enchanting backdrop of Jaipur - the Pink City.
              Immerse yourself in the regal charm and cultural richness of this
              historical city as we take you on a journey to create timeless
              memories on your special day.
            </p>
          </div>
        </div>
        <div>
          <div className="text-center ">
            <div className="">
              <div className="absolute z-10  items-center justify-center md:pt-[1rem] ">
                {/* <Image
                  src={w2}
                  height={550}
                  width={200}
                  alt="wedding2"
                  className="rounded-t-full max-[750px]:hidden hidden"
                /> */}
              </div>
              <div className="relative w-full h-fit mt-[5rem] sm:ml-[6rem]">
                <div className="relative">
                  <div className="absolute w-[75%] max-sm:ml-[5rem] max-sm:w-[80%] md:ml-2 overflow-hidden rounded-t-full left h-full bg-[#08070777] z-20" />
                  {/* {img ?  */}
                  <img
                    style={{ backgroundColor: "#131010bd" }}
                    src={w1}
                    // src={`${img ? img : w1}`}
                    alt="wedding1"
                     className="relative max-sm:ml-[5rem] z-0 bg-[#0c0404] overflow-hidden md:ml-2 
                    rounded-t-full 
                     w-[75%]   md:h-[100%] max-sm:w-[80%] "
                  />
                  {/* :
                  <div className="relative max-sm:ml-[5rem] z-0  overflow-hidden md:ml-2  rounded-t-full w-[70%] h-[26rem]  max-sm:w-[80%] ">
                     <Skeleton variant="rectangular" width={'100%'}  />
                     </div>
                     } */}
                </div>
                {/* {img2 ? */}
                <motion.img
                  whileHover={{
                    scale: 1.1,
                    transition: { ease: "easeIn", type: "spring", duration: 1 },
                  }}
                  src={w22}
                  // src={`${img2 ? img2 : w22}`}
                  alt=""
                  className="absolute z-20 top-[-3rem] left-[0rem] sm:left-[-3rem] sm:w-[50%] w-[65%] h-[15rem]"
                />
                {/* :
                <div className="absolute z-20 top-[-3rem] left-[0rem] sm:left-[-3rem] h-[10rem] sm:w-[50%] w-[60%]">
                   <Skeleton variant="rectangular" width={'100%'}  />
                   </div>
                   }  */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { ease: "easeIn", type: "spring", duration: 2 },
        }}
        className="items-center m-0 md:gap-3 flex-wrap sm:w-[40%] md:mr-[5rem]"
      >
        {/* <Image
            src={w2}
            height={250}
            width={350}
            alt="wedding2"
            className="absolute z-9 max-[385px]:hidden md:w-auto w-auto "
          /> */}
        <div className="relative w-fit h-fit sm:pt-[2rem] sm:ml-[2rem]">
          <div className="relative">
            <div className="absolute w-[75%] h-full mb-3 bg-[#110c0c80] z-10" />
            {/* {img3 ? */}
            <img
              src={w2}
              // src={`${img3 ? img3 : w2}`}
              alt="wedding1"
              className="mb-3  relative  w-[75%] z-0"
            />
            {/* :
            <div className="mb-3  relative h-[26rem]  w-[75%] z-0">
               <Skeleton variant="rectangular" width={'100%'}  />
               </div>
               }  */}
            {/* {loading &&<p className="absolute top-[20%] rounded-t-full w-[50%] z-20 h-[60%] right-4 text-2xl font-bold">Loading</p>} */}
          </div>
          {/* {img4 ? */}
          <motion.img
            whileHover={{
              scale: 1.1,
              transition: { ease: "easeIn", type: "spring", duration: 1 },
            }}
            src={w11}
            // src={`${img4 ? img4 : w11}`}
            alt=""
            className="absolute top-[20%] rounded-t-full w-[50%] z-20 h-[60%] right-4"
          />
          {/* :
            <div className="mb-3  relative h-[26rem]  w-[75%] z-0">
               <Skeleton variant="rectangular" width={'100%'}  />
               </div>
               }  */}
        </div>

        <div className="flex flex-col flex-wrap object-cover ">
          <motion.p
            whileInView={{
              opacity: 1,
              transition: { ease: easeIn, delay: 0.3 },
            }}
            style={{ fontFamily: `'Segoe UI', sans-serif` }}
            className=" tracking-[0.09em] border-0  md:mr-4 text-[#705704] whitespace-pre-line  sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] text-justify text-md md:py-3 md:w-[100%] lg:w-[108%] mb-3 px-[2rem]"
          >
            <div className=" h-[100%] w-[100%] ">

            Discover Jaipur's enchanting magic with SAAJ WEDDINGS, renowned for exquisite wedding packages and cultural richness, crafting unforgettable and regal celebrations that resonate with timeless
            charm and cultural grandeur. Experience your dream wedding with Saaj
            Weddings dedicated team who turns dreams into reality through
            meticulous planning and hard work. 
            </div>
          </motion.p>
          <div className="text-center pb-3">
            {/* <button className=" border-2 w-[8rem] text-center font-serif 
             whitespace-nowrap text-red-500 h-[3rem] font-bold">
              Know More
            </button> */}
            {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button> */}
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { ease: "easeIn", type: "spring", duration: 0.3 },
              }}
              className="border-2 text-xl hover:bg-[#5F3615] hover:border-0 hover:text-white rounded-sm  border-[#5F3615] px-[1.5rem] py-[0.5rem] text-[#5F3615]"
              onClick={handleMore}
            >
              <Link to={"/about"}>
                {" "}
                {!more ? "Know More.." : "Show Less..."}
              </Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
