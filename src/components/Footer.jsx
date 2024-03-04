
import React from "react";
import { FaFacebook, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoTwitter, IoMail } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import logo from './assets/Saaj logo png3 (1)(1).png'
import { Button, TextField } from "@mui/material";
export default function Footer() {
  return (
    <div id="contact" className="bg-[#5F3615]  text-white flex-wrap mt-8 max-[730px]:py-[1rem] max-[672px]:gap-[2rem]">
      <div style={{fontFamily: `"Mate SC", serif`}} className="flex flex-wrap max-md:justify-center items-center max-md:flex-col px-8">
        <div className="text-left gap-4 ">
          <h1 className="text-center font-bold text-3xl ">Get In Touch</h1>
          <ul className="flex flex-col">
            <li className="flex px-2 my-2 tracking-wider">
              <FaLocationDot  className="mr-2"/> <span className="text-md">SF 228, 25 floor, Vidya Nagar,<br/>
Hubballi, Karnataka 580021</span>
            </li>
            <li className="flex px-2 my-2">
              <FaPhoneAlt className="mr-2"/>{" "}
              <span className="text-md tracking-wider">
              +19 797540000 <br />
              +19 8815566156
              </span>
            </li>
            <li className="flex px-2 my-2">
              <IoMail className="mr-2" />
              <span className="text-md tracking-wider">info@sajjevents.com.</span>
            </li>
          </ul>
        </div>
        <div className="  ">
        <div style={{fontFamily: `"Mate SC", serif`}} className="text-md tracking-widest  max-[378px]:hidden flex flex-col  gap-2 text-center">
        <h1 className="text-xl font-semibold">MENU</h1>
        <a href="#home" className="md:px-3 ">Home</a>
          <a href="#about" className="md:px-3 px-1">About</a>
          <a href="#services" className="md:px-3 px-1">Services</a>
          <a href="#specialization" className="md:px-3 px-1">Specialization</a>
          <a href="#gallary" className="md:px-3 px-1">Gallary</a>
          <a href="#contact" className="md:px-3 px-1">Contact Us.</a>
        </div>
      </div>
        <div className="text-center mt-[2rem] gap-3 md:ml-[5rem] md:mr-[5rem]">
          <div className=" text-center pl-[40%] max-[412px]:pl-[40%] items-center">

         <div className=" relative md:pt-[9rem] max-md:mt-[5rem]">
          <img src={logo} alt="logo" className="w-[9rem] max-md:top-[-7rem] absolute top-0 left-[-2.5rem]"/>
        </div>
          </div>
        

          
        
      <iframe className="max-md:w-[100%] "
          title="location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d348041.86796211504!2d75.46377668537234!3d15.465287616155509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707211014536!5m2!1sen!2sin"
            width="450"
            height="250"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        
        </div>
        <div className="text-center  gap-3 flex flex-col md:mt-[4rem] md:ml-[2.5rem]">
          <h1 className="font-bold tracking-widest text-3xl ">Get Updates</h1>
          {/* <TextField
          id="standard-read-only-input"
          label="Enter a email address"
          sx={{color:'white'}}
          variant="standard"
        /> */}
        <input type="email" className="border-b-2 focus:border-0 border-white bg-[#5F3615] text-white  h-[2rem] p-3 my-4" placeholder="Enter a email address" />
          <button className="border-0 h-[2.5rem] bg-[#0f3536] border-[#0f3536]">SEND ENQUIRY</button>
          <div className="flex flex-row mt-7">
            <p className="flex md:ml-[2rem] gap-3 text-xl flex-col"><span className="pr-3 ">Follow Us on</span><span className="flex gap-4"><FaFacebook /> <LuInstagram /> <IoLogoTwitter /> <FaLinkedinIn /></span></p>
          </div>
        </div>
      </div>
      
     
      <div className="border-t-2 mt-3"/>

      <div className="text-center pt-2 tracking-widest">
        <p>2024 ©, All rights are reserved, Developed By <br />Unitechono software developement pvt ltd. </p>
      </div>
    </div>
  );
}
