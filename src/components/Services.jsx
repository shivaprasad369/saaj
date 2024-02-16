import React, { useEffect, useState } from "react";
import data from "../constants/images";

import { easeIn, easeInOut, motion } from "framer-motion";
import { Skeleton } from "@mui/material";
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
    <div
      id="services"
      className="p-2 relative justify-center items-center bg-[#f4f4f7]"
    >
      <div className="grid relative md:grid-cols-2 grid-cols-1 gap-2">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { ease: easeInOut, delay: 0.3, type: "spring" },
          }}
          className=" md:pl-3 md:flex flex-col items-center 
          justify-center  "
        >
          <h1 className="text-[20px] text-center font-bold text-red-600 uppercase">
            our services
          </h1>

          <p className="text-gray-600 sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2">
            Elevate your love story with a destination wedding orchestrated by
            Saaj Wedding. Our expertise extends beyond borders, crafting dream
            weddings in Beautiful spots. Let us turn your destination dreams
            into a reality, where every detail is infused with our signature
            touch of excellence
          </p>
        </motion.div>
        <motion.div
          layout
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { ease: easeIn } }}
          className=" bg-gray-100 md:p-1 w-auto "
        >
          <motion.div className=" relative items-center justify-center text-center">
            {data ? (
              data.map((data) => (
                <motion.div className="object-contain">
                  <motion.img
                    animate={{ transition: { ease: easeIn } }}
                    src={data.img}
                    className={`${
                      data?.index === index ? "block" : "hidden"
                    } md:w-[100%]  h-[17rem] rounded-md max-md:w-full`}
                  />

                  <h1
                    style={{ fontFamily: '"DM Serif Display", serif' }}
                    className={`text-xl absolute ${
                      data.index === 3
                        ? " left-[15%] text-center"
                        : " left-[30%] items-center justify-center"
                    } top-5  font-bold  text-center items-center justify-center`}
                  >
                    {data?.index === index && data.data}
                  </h1>
                </motion.div>
              ))
            ) : (
              <Skeleton animation="wave" height={600} width="100%" />
            )}
            {!data && (
              <Skeleton animation="wave" height={"100%"} width="100%" />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
