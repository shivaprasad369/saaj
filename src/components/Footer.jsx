import React from "react";
import { FaFacebook, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoTwitter, IoMail } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import logo from "./assets/Saaj logo png3 (1)(1).png";
import { Button, TextField } from "@mui/material";
export default function Footer() {
  return (
    <div
      id="contact"
      className="bg-[#5F3615] justify-center items-center text-center  text-white flex-wrap mt-8 max-[730px]:py-[1rem] max-[672px]:gap-[2rem]"
    >
      <div className=" relative md:pt-[5rem] max-md:ml-[40%] md:pb-[1rem] max-md:pb-[1rem] max-md:mt-[2rem]">
        <img
          src={logo}
          alt="logo"
          className="w-[10rem] max-md:top-[1rem] md:absolute top-6 left-[46%]"
        />
      </div>
      <div
        style={{ fontFamily: `"Mate SC", serif` }}
        className="flex flex-1 justify-around max-md:justify-center items-center max-md:flex-col px-8"
      >
        <div className="text-left gap-4 ">
          <h1 className="max-md:text-center md:pl-2 font-bold text-3xl max-md:pt-[1rem] max-md:text-4xl max-md:pb-4 md:pb-4  ">
            Get In Touch
          </h1>
          <ul className="flex flex-col max-md:text-center">
            <li className="flex px-2 my-2 tracking-wider">
              <FaLocationDot className="mr-2 text-xl mt-3" />{" "}
              <span className="text-md">
                SF 228, 25 floor, Vidya Nagar,
                <br />
                Hubballi, Karnataka 580021
              </span>
            </li>
            <li className="flex px-2 my-2">
              <FaPhoneAlt className="mr-2 text-xl mt-3" />{" "}
              <span className="text-md tracking-wider">
                +19 797540000 <br />
                +19 8815566156
              </span>
            </li>
            <li className="flex px-2 my-2">
              <IoMail className="mr-2 text-xl mt-1" />
              <span className="text-md tracking-wider">
                info@saajevents.com.
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-[2rem] gap-3   max-md:pb-[2rem]">
     
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d56927.89392111595!2d75.78436092886044!3d26.903705516105322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d26.927036299999997!2d75.8603042!4m5!1s0x396db24ad0000019%3A0x85e5feb42013a2ac!2sPN%2075%2C%20second%20floor%20Satnam%20Honda%2C%20Tonk%20Rd%2C%20near%20kamal%20%26%20Co%2C%20Jaipur%2C%20Rajasthan%20302015!3m2!1d26.8679201!2d75.79697259999999!5e0!3m2!1sen!2sin!4v1709891989758!5m2!1sen!2sin"
            width="350"
            height="250"
            className="max-md:w-[100%] "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
     
        </div>
        <div className="text-center  gap-3 flex flex-col   ">
          <h1 className="font-bold tracking-widest text-3xl  md:mt-[2rem]">
            Get Updates
          </h1>
          {/* <TextField
          id="standard-read-only-input"
          label="Enter a email address"
          sx={{color:'white'}}
          variant="standard"
        /> */}
          <input
            type="email"
            className="border-b-2 focus:border-0 border-white  bg-[#5F3615] text-white  h-[2rem] p-3 my-1 max-md:my-4"
            placeholder="Enter a email address"
          />
          <button className="border-0 h-[2.5rem] bg-white text-[#3f2b12] border-[#b8bdbd]  ">
            SEND ENQUIRY
          </button>
          <div className="flex flex-row mt-7">
            <p className="flex ml-[2rem] gap-3 text-xl flex-col pb-4">
              <span className="pr-3 ">Follow Us on</span>
              <span className="flex gap-4">
                <FaFacebook /> <LuInstagram /> <IoLogoTwitter />{" "}
                <FaLinkedinIn />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="  ">
        <div
          style={{ fontFamily: `"Mate SC", serif` }}
          className="text-md mt-3 tracking-widest flex flex-wrap md:ml-[30%] max-md:ml-[15%]  max-[378px]:hidden   gap-2 text-center"
        >
          <a href="#home" className="md:px-3 ">
            Home
          </a>
          <a href="#about" className="md:px-3 px-1">
            About
          </a>
          <a href="#services" className="md:px-3 px-1">
            Services
          </a>
          <a href="#specialization" className="md:px-3 px-1">
            Specialization
          </a>
          <a href="#gallary" className="md:px-3 px-1">
            Gallary
          </a>
          <a href="#contact" className="md:px-3 px-1">
            Contact Us.
          </a>
        </div>
      </div>

      <div className="border-t-2 mt-3" />

      <div className="text-center pt-2 tracking-widest">
        <p>
          2024 ©, All rights are reserved, Developed By <br />
          Unitechono software developement pvt ltd.{" "}
        </p>
      </div>
    </div>
  );
}
