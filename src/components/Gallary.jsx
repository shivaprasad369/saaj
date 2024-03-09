
import React from "react";
import data from "../constants/Gallary";

import { easeInOut, motion } from "framer-motion";
import Cards from "./Card";
import Demo from "../demo/Demo";

export default function Gallary() {
  return (
    <div id="gallary" className="justify-center items-center pt-[4rem] relative max-w:[100%]">
      <motion.h1
        className="uppercase  text-center text-[2rem] tracking-wider font-bold text-[#3b4616] pb-3"
        style={{ fontFamily: `"Tinos", serif` }}
      >
        Gallary
      </motion.h1>
      <div className=" ">
        <div className=" gap-4 items-center">
          {/* {data.map((data, index) => (
            <motion.div
            viewport={{once:true}}
              initial={{ opacity: 0, y: 0 }}
              whileHover={{ scale: 1, type: "spring" }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: easeInOut,
                  delay: 0.3 * index,
                  type: "spring",
                },
              }}
              className={`${data.grid} bg-slate-100 p-2 flex-wrap w-[100%] md:w-[70%] md:mt-[10px] ${data.style} `}
              key={data?.id}
            >
              <Cards data={data} key={data?.id} className={"w-full"} />
            </motion.div>
          ))} */}
          <Demo/>
        </div>
      </div>
    </div>
  );
}
