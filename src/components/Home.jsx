import React,  {useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Navbar from "./Navbar";


const data1=[{
  id:1,
  title:'Jodhapur',
  subTitle:'Wedding Planners',
  img:'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D'
}
,{
  id:2,
  title:'Mumbai',
  subTitle:'⁠Decor and Design',
  img:"https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
},
{
  id:3,
  title:'Dehli',
  subTitle:'⁠Vendor and Artist Management',
  img:"https://images.unsplash.com/photo-1542042161784-26ab9e041e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  id:4,
  title:'Hydrabad',
  subTitle:'⁠Corporates Events',
  img:"https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
}]
export default function Home() {
  const [hero,setHero]=useState({
    id:1,
    title:'Jodhapur',
    subTitle:'Wedding Planners',
    img:'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D'
  })
 const handleSetImage = (ind) => {
  setHero(data1[ind])
  console.log(hero)
  };
  return (
    <div
    id='home'
      style={{  backgroundImage: `url(${hero.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "screen",
      width: "100%",}}
    >
      <Navbar />
      <div className="flex justify-between max-sm:items-center max-sm:justify-center overflow-hidden w-full h-full max-sm:text-xl text-inherit   items-center flex-wrap  max-md:text-sm ">
        <div className="flex flex-col bg-[#0f020240] md:gap-2 px-[3rem] object-contain max-[866px]:mt-[5rem]">
          <ol
            type="1"
            className=" flex flex-col max-sm:text-md text-white mt-[3rem] py-10 gap-10 font-semibold object-cover   "
          >
            <li onClick={() => handleSetImage(0)} className="">
            
                <div className={`flex flex-col md:py-2 ${hero.id===1 ? 'bg-[#0a0a0a35] w-[130%]  text-[#d4bfbf] ' :'' } md:px-[1rem] text-inherit`}>
                  <h1 className="">1. Wedding Planners</h1>
                  <div className="border-b-2" />{" "}
                  <p>Import trace for requested module</p>
                </div>
            
            </li>
            <li onClick={() => handleSetImage(1)}>
              <div className={`flex flex-col hover:w-[130%]  hover:bg-[#0a0a0a35] md:py-2 md:px-[1rem]  ${hero.id===2 ? 'bg-[#0a0a0a35] w-[130%]  text-[#d4bfbf] ' :'' } hover:text-[#d4bfbf] text-gray-900 text-inherit`}>
                <h1 className="md:text-xl">2. Decor and Design</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
            <li onClick={() => handleSetImage(2)}>
              <div className={`flex flex-col hover:w-[130%]   ${hero.id===3 ? 'bg-[#0a0a0a35] w-[130%]  text-[#d4bfbf] ' :'' } hover:bg-[#0a0a0a35] sm:py-2 sm:px-[1rem]  hover:text-[#d4bfbf]  text-gray-950 text-inherit`}>
                <h1 className="md:text-xl">3. Vendor and Artist Management</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
            <li onClick={() => handleSetImage(3)}>
              <div className={`flex flex-col hover:w-[130%]   ${hero.id===4 ? 'bg-[#0a0a0a35] w-[130%]  text-[#d4bfbf] ' :'' } hover:bg-[#0a0a0a35] md:py-2 md:px-[1rem] w-full  hover:text-[#d4bfbf]  text-gray-900 text-inherit`}>
                <h1 className="">4. Corporates Events</h1>
                <div className="border-b-2" />{" "}
                <p>Import trace for requested module</p>
              </div>
            </li>
          </ol>
        </div>
        {/* max-[762px]:ml-[12rem] max-[640px]:ml-[6rem] max-[536px]:ml-[3rem]  min-[476px]:text-right */}
       
          <div className=" flex flex-col text-inherit sm:pt-[6rem] max-[866px]:min-sm:text-xl  " style={{fontWeight:800,fontFamily:'"DM Serif Display", serif'}}>
            <div className=" flex justify-end flex-col p gap-2 max-[877px]:text-md max-sm:text-center pr-4 ">
              <h5 className="sm:ml-[1.5rem] text-white sm:text-right text-inherit overflow-hidden">
                {hero.subTitle}
              </h5>
              <h1 className="text-6xl pb-3 text-inherit text-white sm:text-right sm:ml-[1.5rem] overflow-hidden">
                {hero.title}
              </h1>
            </div>
            <div>
              <div className="flex flex-row  text-white max-sm:items-center max-sm:justify-center">
                <div className="border-3  text-white " />
                <ul className="flex gap-4 cursor-pointer text-xl sm:pt-[100px] sm:ml-[8rem] ">
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                </ul>
              </div>
            </div>
          </div>
       
      </div>
    </div>
  );
}
