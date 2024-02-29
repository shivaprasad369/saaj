import React from "react";
import img1 from "./gallary1.jpg";
import img2 from "./gallary2.jpg";
import img3 from "./gallary3.jpg";

import img4 from "./gsllary4.jpg";

import img5 from "./gallary5.jpg";
import png from '../components/assets/flower-black-and-white-png-41825.png'
export default function Demo() {
  return (
    <div>
      {/* <div className=''>
        <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/>
        <img src={img1} alt="" className='w-[22rem]  m-[6rem] relative  ' />
      </div> */}

      <div className="md:flex relative z-10 max-[756px]:flex-col  max-[906px]:justify-around gap-10 md:justify-center min-[906px]:gap-[8rem] max-[756px]:min-[638px]:ml-[20%]  max-[380px]:ml-[0%] pt-[3rem]">
        <img src={png} alt="" className="absolute top-[-8rem] left-0 w-[12rem] opacity-[0.5] rotate-180"/>
        <img src={png} alt="" className="absolute bottom-[-2.5rem] right-[-2rem] w-[12rem] opacity-[0.5]"/>

        <div  className="gap-5 max-[756px]:flex  max-[756px]:flex-col max-[756px]:text-center max-[756px]:justify-center  ">
          <div className="border-0 pb-[3rem] max-sm:w-[100%]  flex flex-col w-[25rem]  text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img1} alt="" className="md:w-[25rem]  max-sm:h-[20rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Lokesh & Pranjal - Jodhpur</h1>
            <p className="px-3 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias ex .adipisicing elit.
              Molestias ex quibusdamaliquid
            </p>
          </div>
          <div className="border-0   max-sm:w-[100%]  pb-[3rem] flex flex-col w-[25rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img2} alt="" className="md:w-[25rem]  max-sm:h-[20rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Lokesh & Pranjal - Jodhpur</h1>
            <p className="px-3 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias ex quibusdamaliquid 
            </p>
          </div>
          <div className="border-2 max-sm:w-[100%]  pb-[4rem]flex flex-col w-[25rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img3} alt="" className="md:w-[25rem]  max-sm:w-[100%]  max-sm:h-[20rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl py-3"> Lokesh & Pranjal - Jodhpur</h1>
            <p className="px-3 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias ex quibusdamaliquid
            </p>
          </div>
        </div>
        <div className="md:pt-[10rem] pt-[3rem]">
        <div className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[25rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img4} alt="" className="md:w-[25rem]  max-sm:h-[20rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Lokesh & Pranjal - Jodhpur</h1>
            <p className="px-3 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias ex quibusdamaliquid 
            </p>
          </div>
          <div className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[23rem] md:w-[25rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img5} alt="" className="md:w-[25rem]  max-sm:h-[20rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Lokesh & Pranjal - Jodhpur</h1>
            <p className="px-3 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias ex quibusdamaliquid 
            </p>
          </div>
          <div className="border-0 pb-[4rem] max-sm:w-[100%]  flex flex-col w-[23rem] md:w-[25rem] text-center gap-3">
            {/* <img src={img2} alt=""  className='absolute w-[14rem] h-[17rem] right-[21rem] top-[5rem] z-10  rounded-t-full'/> */}
            <img src={img2} alt="" className="md:w-[25rem]  max-sm:h-[20rem] sm:h-[25rem]" />
            <h1 className="tracking-widest text-[#443417] text-xl"> Lokesh & Pranjal - Jodhpur</h1>
            <p className="px-3 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias ex quibusdamaliquid 

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
