import React from "react";
import Aboutus from "../About";
import member from '../assets/member.png'
export default function About() {
  return (
    <div>
      <Aboutus />
      <div>
        <div className="flex gap-4 flex-col justify-center items-center text-center text-xl tracking-wider flex-wrap">
          <h1 className="text-3xl uppercase tracking-widest font-semibold text-[#3f3113]" style={{ fontFamily:` "Libre Baskerville", serif`}} >About Saaj</h1>
          <p className="border-0 w-[80%] leading-8 text-[#704e26] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sequi
            sapiente quaerat minus provident commodi? Iusto ad tempore,
            asperiores repellat pariatur, nihil atque doloribus temporibus
            libero nobis dicta quasi autem!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam in dolore assumenda tenetur deserunt debitis, quidem quos distinctio consequatur doloribus nisi eius corrupti, nemo sit blanditiis totam natus saepe.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col py-[4rem]">
            <div className="flex flex-col justify-center items-center text-center tracking-widest gap-3">
                <h1 className="uppercase text-3xl font-semibold text-[#3f3113]" style={{ fontFamily:` "Libre Baskerville", serif`}} >Our Team</h1>
                <span className="text-2xl text-[#4b3419] tracking-widest"><i>The core members at sajj weddings</i></span>
            </div>
                <div className="grid md:grid-cols-2 max-[948px]:grid-cols-1 justify-center  items-center gap-4 md:ml-[8rem] my-[4rem]">
                        <div className="border-0 flex md:flex-col text-center max-md:flex-col-reverse w-fit">
                            <div className="relative border-[1rem] w-[25rem] h-[26rem] border-[#835d2c]">
                                <img src={member} alt="" className="absolute h-[28rem] w-[100%]   bottom-[0rem]"/>
                            </div>
                            <div className="text-center md:pt-[5rem] max-md:pb-[5rem] text-xl tracking-widest">
                                <h1 className="text-[#706923]">Rohit Naik</h1>
                                <span>His Position</span>
                            </div>
                        </div>
                        <div className="border-0  text-center w-fit">
                        <div className=" py-[2rem] pb-[5rem] text-xl tracking-widest">
                                <h1 className="text-2xl text-[#776823]">Rohit Naik</h1>
                                <span className="tracking-widest leading-9">His Position</span>
                            </div>
                            <div className="relative border-[1rem] h-[26rem] border-[#835d2c] w-[25rem]">
                            <img src={member} alt="" className=" absolute h-[28rem] w-[100%]   bottom-[0rem]" />
                            </div>
                        </div>
                </div>
        </div>
      </div>
    </div>
  );
}
