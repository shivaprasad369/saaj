import { useState } from "react";
import img1 from "../assets/founder-removebg-preview.png";
import img2 from "./a2.png";
import img3 from "../assets/WhatsApp_Image_2024-03-18_at_1.37.35_PM-removebg-preview.png";
import Modal from "./Model";
import {data} from './constant/constant'
export default function Team() {
  const [showModel,setShowModel]= useState(false)
  const [ids,setIds]=useState('')
  const handleModel=(id)=>{
    setShowModel(true)
    const datas=data.filter((data)=>data.id===id)
    setIds(datas)
    console.log(ids)
  }
  return (
    <div
      style={{
        fontFamily:
          " Charlie Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
      }}
    >
      <div>
        <h2
          className="text-center text-[2.25rem] leading-[1.333] text-[#ac7e38] mb-[14px]  "
          style={{
            fontWeight: 500,
            fontFamily:
              "Charlie Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
          }}
        >
          Our leadership team
        </h2>
        <p
          className="text-[1rem] leading-1.5 text-inherit text-center text-[#634820]"
          style={{
            fontFamily:
              " Charlie Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
          }}
        >
          {" "}
          over 100 years of combined experience, we have got a well-seasoned team
          at the helm.
        </p>
      </div>
      <div className="grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 relative mt-[2rem] max-md:mx-1 md:mx-[10%]">
        <div onClick={()=>handleModel(1)} className="lg:h-[20rem] xl:h-[25rem] mb-[5rem] md:h-[22rem] sm:h-[20rem] max-sm:h-[25rem]">
          <div className="border-0 h-[100%] relative">
            <img
              src={img1}
              alt=""
              className="w-[100%] max-md:h-[100%] md:h-[90%]  absolute bottom-0"
            />
            <div className="absolute z-[-1] bg-[#eeba5a] w-[100%] h-[77%] bottom-0" />
          </div>
          <div >
            <h1
              className="pb-[0.6rem] text-[#253858] text-[1.8rem] leading-[1.3333] mt-[1rem]"
              style={{ fontWeight: 500 }}
            >
              Sanjay Gupta
            </h1>
          </div>
          <div>
            <h6 className="tracking-[1px] leading-2 uppercase">
              {" "}
              FOUNDER & CEO
            </h6>
          </div>
        </div>
        <div className="lg:h-[20rem] xl:h-[25rem] mb-[5rem] md:h-[22rem] sm:h-[20rem] max-sm:h-[25rem]" onClick={()=>handleModel(2)} >
          <div className="border-0 h-[100%] relative">
            <img
              src={img2}
              alt=""
              className="w-[100%] max-md:h-[100%] md:h-[95%]  absolute bottom-0"
            />
            <div className="absolute z-[-1] bg-[#eeba5a] w-[100%] h-[77%] bottom-0" />
          </div>
          <div>
            <h1
              className="pb-[0.6rem] text-[#253858] text-[1.8rem] leading-[1.3333] mt-[1rem]"
              style={{ fontWeight: 500 }}
            >
              Mohit Singh
            </h1>
          </div>
          <div>
            <h6 className="tracking-[1px] leading-2 uppercase">
              {" "}
              Hospitality & Logistics Manager
            </h6>
          </div>
        </div>
        <div onClick={()=>handleModel(3)} className="lg:h-[20rem] xl:h-[25rem] mb-[5rem] md:h-[22rem] sm:h-[20rem] max-sm:h-[25rem]">
          <div className="border-0 h-[100%] relative">
            <img src={img3} alt="" className="w-[100%] max-md:h-[100%] md:h-[95%] mb z-1 absolute bottom-0 " />
            <div className="absolute z-[-1] bg-[#eeba5a] w-[100%] h-[77%] bottom-0" />
          </div>
          <div>
            <h1
              className="pb-[0.6rem] text-[#253858] text-[1.8rem] leading-[1.3333] mt-[1rem]"
              style={{ fontWeight: 500 }}
            >
              Varun Sharma
            </h1>
          </div>
          <div>
            <h6 className="tracking-[1px] leading-2 uppercase">
              {" "}
              Production Manager
            </h6>
          </div>
        </div>

        {/* <div >
         <div className="border-0 h-[100%] relative">
         <img src={img3} alt="" className="w-[100%] bottom-0 absolute  " />
         <div className="absolute z-[-1] bg-[#a2eee1] w-[100%] h-[70%] bottom-0" />
         </div>
        </div> */}
        { showModel && <Modal ids={ids} setShowModel={setShowModel} />}
      </div>
      <div className="border-b-[1px] my-[7rem] border-gray-300 max-sm:hidden"/>
    </div>
  );
}
