import React, { useState } from "react";
import data from "../constants/Gallary";
import { motion } from "framer-motion";
import {Tooltip} from "@nextui-org/react";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import axios from 'axios'
export default function Gallery() {
  const [datas,setDatas]=useState([])
  const [loading,setLoading]=useState(false)
  async function handleGallery() {
    try {
      setLoading(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/couple/`);
      console.log(res.data.data);
      const result = res;
      setDatas(res.data?.data);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    handleGallery();
   
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 mb-[2rem] max-md:grid-cols-2 max-sm:grid-cols-1 gap-5  justify-center items-center text-center lg:mx-[10%] xl:mx-[13%]">
       {!loading ?
       <>
        {datas?.map((data,index)=>(
         <Tooltip
         content={
           <div className="px-1 py-2 bg-[#a1812a] text-white m-0 rounded-md">
             <div className="text-small font-bold">{data?.name}</div>
             <div className="text-tiny">{data?.desc}</div>
           </div>
         }
       >
          <a key={index} href={data?.link}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:0.3*index,type:'tween'}}} className="border-0 sm:w-[20rem] max-sm:w-[100%] h-fit" key={data?.id}>
          <div className="border-0 w-[100%] sm:h-[16rem] max-sm:h-[100%] ">
            <img src={data?.photo} alt="" className="h-[100%] w-[100%]" />
          </div>
          <h1 style={{fontFamily: '"Imperial Script", cursive'}} className="tracking-widest text-[#a18433] text-3xl pt-4 font-light">{data?.name}</h1>
          <p   style={{fontFamily:'"Alegreya", serif ',fontWeight:600 }}
           className="px-3 tracking-wider md:text-[1.2rem] text-[#442817]  max-sm:text-[1rem] h-[5rem]">
           {data?.desc}
          </p>
        </motion.div>
        </a>
        </Tooltip>
        ))}</>:<div >  <div className="relative max-sm:ml-[5rem] z-0  overflow-hidden md:ml-2  w-[15rem] h-[15rem]  max-sm:w-[80%] ">
        <Skeleton variant="rectangular" width={'100%'} height={'100%'}  />
        </div>
       </div>}
      </div>
    </div>
  );
}
