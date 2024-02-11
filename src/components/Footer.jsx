
import React from "react";
import { FaFacebook, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoTwitter, IoMail } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import logo from './assets/image/logo.png'
import { Button, TextField } from "@mui/material";
export default function Footer() {
  return (
    <div id="contact" className="bg-orange-400 flex-wrap mt-8 max-[730px]:py-[1rem] max-[672px]:gap-[2rem]">
      <div className="flex md:justify-between justify-center items-center max-md:flex-col px-8">
        <div className="text-left gap-4 ">
          <h1 className="text-center font-bold">Get In Touch</h1>
          <ul className="flex flex-col">
            <li className="flex px-2 my-2">
              <FaLocationDot  className="mr-2"/> <span className="text-md">veernarayana temple, gadag-58201</span>
            </li>
            <li className="flex px-2 my-2">
              <FaPhoneAlt className="mr-2"/>{" "}
              <span className="text-md">
                +91 7878787878 <br />
                +91 9898989898
              </span>
            </li>
            <li className="flex px-2 my-2">
              <IoMail className="mr-2" />
              <span className="text-md">Shivu369sapare@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="text-center mt-[2rem] gap-3">
          <div className=" text-center pl-[34%] max-[412px]:pl-[40%] items-center">

         <div className="max-md:w-[40%] md:w-[5rem]">
          <img src={logo} alt="logo" className="max-md:w-[3rem]"/>
        </div>
          </div>
         <p className="font-bold text-xl mb-4">Saaj Weeding</p>
          <iframe className="max-md:w-[100%] "
          title="location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d348041.86796211504!2d75.46377668537234!3d15.465287616155509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707211014536!5m2!1sen!2sin"
            width="300"
            height="200"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-center gap-3 flex flex-col md:mt-[4rem] md:ml-[2rem]">
          <h1 className="font-bold ">Get Update</h1>
          <TextField label="Enter a email" className="text-black border-black" focused />
          <Button variant="outlined"sx={{color:'white',fontWeight:600}}>Send Enquire</Button>
          <div className="flex flex-row mt-7">
            <p className="flex gap-3"><span className="pr-3 ">Follow Us on</span><FaFacebook /> <LuInstagram /> <IoLogoTwitter /> <FaLinkedinIn /></p>
          </div>
        </div>
      </div>
      
      <div className=" pt-3  justify-center items-center flex-wrap">
        <div className="md:ml-9 max-[378px]:hidden md:flex-row max-md:flex-col md:gap-10 gap-2 text-sm font-bold text-center">
        <a href="#home" className="md:px-3 ">Home</a>
          <a href="#about" className="md:px-3 px-1">About</a>
          <a href="#services" className="md:px-3 px-1">Services</a>
          <a href="#specialization" className="md:px-3 px-1">Specialization</a>
          <a href="#gallary" className="md:px-3 px-1">Gallary</a>
          <a href="#contact" className="md:px-3 px-1">Contact Us.</a>
        </div>
      </div>
      <div className="border-t-2 mt-3"/>

      <div className="text-center pt-2">
        <p>Developed by Shivaprasad</p>
      </div>
    </div>
  );
}
