import React, { useRef } from "react";
import img from './constant/linkedin.png'
// import { X , Download } from 'lucide-react';
// import data from './constant/constant'
function Modal({ setShowModel,ids }) {
  const modelRef = useRef();
// console.log(ids)
  const onClose = (e) => {
    console.log(ids)
    if (modelRef.current === e.target) {
      setShowModel(false);
    }
    // if (modelRef.current &&!modelRef.current.contains(e.target)) {
    //     setShowModel(false);
    //   }
  };


  return (
    <div
      ref={modelRef}
      onClick={onClose} style={{zIndex:100}}
      className="fixed z-900 inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center"
    >
      <div className="flex flex-col gap-5 mt-10 ">
       
        <div className="bg-white p-8 relative gap-4 flex flex-col  items-center w-[80%] md:h-[25rem]  max-md:h-[30rem] overflow-scroll ml-[10%]">
            <button type="button" className=" absolute text-black float-end top-2 right-5" onClick={() => setShowModel(false)}>
         X
       </button>
          <div  style={{
            fontWeight: 400,
            fontFamily:
              "Charlie Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
          }} className="md:flex max-md:flex-col gap-10">
            <div>
              <div className="border-0 relative md:h-[15rem] md:w-[15rem] max-md:h-[15rem] max-[820]:h-[20rem]">
                <img src={ids[0]?.image} alt="" className="absolute z-10 bottom-0 h-[100%]  w-[100%]" />
                <div className={`bg-[#eeba5a] absolute h-[70%] bottom-0  w-[100%]`}/>
              </div>
              <div>
                <h1
                  className="pb-[0.6rem] text-[#253858] text-[1.8rem] leading-[1.3333] mt-[1rem]"
                  style={{ fontWeight: 500 }}
                >
                 {ids[0]?.name}
                </h1>
              </div>
              <div>
                <h6 className="tracking-[1px] text-black leading-2 uppercase">
                  {ids[0]?.designation}
                </h6>
              </div>
              <div className="flex gap-4 text-black pt-[2rem]">
                <h6 className="tracking-[1px] text-black  leading-2 uppercase">
                  {" "}
                  <a href={ids[0]?.links}>
                  <img src={img} className="w-7"/>
                  </a>
                </h6>
                
              </div>
            </div>
<div>

           {ids[0]?.content}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
