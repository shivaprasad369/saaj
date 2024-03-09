import React from "react";
import img from "./flower.avif";
import "./Footer.css";
import yt from "./WhatsApp Image 2024-03-09 at 4.27.33 PM.jpeg";
export default function Footer() {
  return (
    <div
      style={{ fontFamily: ' "Chakra Petch", sans-serif' }}
      className={"bg justify-around  bg-[#28231e] text-[#aea493]"}
    >
      <div className="flex flex-1 w-auto justify-around  max-lg:flex-col max-lg:mx-[2.5rem] ">
        <div
          style={{
            fontFamily: "FedraSansStd-book, sans-serif",
            marginInlineStart: "1em",
            lineHeight: "24px",
            fontSize: "16px",
            padding: "0 1.2rem 0 0",
          }}
          className="flex flex-row gap-10 items-center max-lg:text-[18px] max-lg:mt-[2rem] "
        >
          <ul className="flex flex-col gap-4">
            <li className="hover:text-[#cd6727]">
              <span className="border-b-[1px]">
                <a href="/">Home</a>
              </span>
            </li>
            <li className="hover:text-[#cd6727]">
              {" "}
              <span className="border-b-[0.5px]">
                <a href="/about">About</a>
              </span>
            </li>
            <li className="hover:text-[#cd6727]">
              {" "}
              <span className="border-b-[1px]">
                <a href="/service"> Services</a>
              </span>
            </li>
            <li className="hover:text-[#cd6727]">
              {" "}
              <span className="border-b-[1px]">
                <a href="/contact"> Contact</a>
              </span>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-[#cd6727]">
              <span className="border-b-[1px]">
                <a href="/gallary">Gallary</a>
              </span>
            </li>
            <li className="hover:text-[#cd6727]">
              {" "}
              <span className="border-b-[0.5px]">
                <a href="/why"> Why Saaj</a>
              </span>
            </li>
            <li className="hover:text-[#cd6727]">
              {" "}
              <span className="border-b-[1px]">
                <a href="/#client"> Testinomial</a>
              </span>
            </li>
            <li className="hover:text-[#cd6727]">
              {" "}
              <span className="border-b-[1px]">
                <a href="/contact"> Contact us</a>
              </span>
            </li>
          </ul>
          <img
            src={img}
            alt=""
            className="w-[2rem] max-lg:hidden h-[20rem]"
          />
        </div>
        <div className="flex flex-col border-0 w-[12rem] mt-[2rem]">
          <h1
            style={{
              fontFamily: "FedraSansStd-A-medium",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: 1.2,
            }}
            className="text-[#ffe1b9] mb-[0.8rem]  font-"
          >
            Subscribe
          </h1>
          <div>
            <div className="max-lg:flex w-auto max-[450px]:flex-col max-lg:gap-3  w-[25rem]">
              <a href="https://www.youtube.com/channel/UCUXhh0K2BqccrkffVJNJXmA">
                <img
                  src={yt}
                  alt=""
                  className="w-[9rem] h-[5rem] max-lg:h-[7rem] "
                />
              </a>
              <p className="p max-lg:w-[12rem] w-[10rem] max-lg:h-[7rem]">
                Don't miss a moment! Subscribe to our YouTube for exclusive
                event updates
              </p>
            </div>
            <a href="https://www.youtube.com/channel/UCUXhh0K2BqccrkffVJNJXmA">
              <button className="border-[1px] mt-[20px] border-[#A29887] w-full h-[3rem] text-center rounded-md">
                Subscribe Now
              </button>
            </a>
          </div>
        </div>
        <div className="b-2 w-[13rem] gap-3 mt-[2rem] pb-4">
          <h1 style={{ fontWeight: 600 }} className="contact ">
            Contact us
          </h1>
          <div className="text-[16px]">
            <p className="mb-[2rem]  gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="float-start "
                width={15}
                viewBox="0 0 384 512"
              >
                <path
                  fill="#ffffff"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span className="pr-2"></span>PN 75, second floor Satnam Honda,
              Tonk Rd, near kamal & Co, Jaipur, Rajasthan 302015
            </p>

            <p className="mb-[2rem] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={"w-5 float-start"}
                w={10}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              <span className="pr-2" />
              +91 97823 40243,
              <br />
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 float-start"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>{" "}
              <span className="pr-2" />
              info@saajevents.com.
            </p>
          </div>
        </div>
        {/* <div className="w-[7rem] mt-[2rem]">
          <div>
            <h1 className="down">Download Sadhguru App</h1>
            <div className="max-[950px]:flex border-2">

           
            <div className="w-[5rem] my-[2rem] h-[5rem] border-2">
              <img src="" alt="" />
            </div>
            <div className="max-[950px]:flex-col">

            <button className="w-full max-[950px]:mb-5 mb-[2rem] h-[2rem] border-[1px] rounded-md">
              Ios
            </button>
            <button className="w-full h-[2rem] border-[1px] rounded-md">
              Ios
            </button>
            </div>
            </div>
          </div>
        </div> */}
        <div className="down mt-[2rem] w-[9rem]">
          <h1>Find us on Social Media</h1>
          <div className="flex-wrap gap-4 grid grid-cols-2 my-[2rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
              />
            </svg>
            <a href="https://www.youtube.com/channel/UCUXhh0K2BqccrkffVJNJXmA">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/saaj_weddings/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-[1px]  mt-10 border-[#aea493]" />
      <div className="flex items-center py-[2rem] ml-[10%] max-[950px]:mr-[5%] text-[#676055] cursor-pointer max-[500]:flex-col">
        © 1999 - 2023 Unitechno software development pvt ltd. All Rights
        Reserved.
        <span className="text-white px-2"> |</span> Terms & Conditions
        <span className="text-white px-2"> |</span> Privacy Policy
      </div>
    </div>
  );
}
