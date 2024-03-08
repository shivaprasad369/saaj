import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <div className=" md:flex flex-col  gap-5 py-[4rem] md:pl-[5rem]">
      <div className="flex flex-col gap-4 max-md:justify-center max-md:items-center">
        <div className="flex flex-col flex-wrap px-4 gap-2 mt-[2rem] md:pt-[2rem]">
          <h1
            className="text-4xl font-semibold tracking-widest text-[#462d19] uppercase"
            style={{ fontFamily: ` "Libre Baskerville", serif` }}
          >
            Contact us
          </h1>
          <div className="text-[1.2rem] tracking-wider text-[#462d19] ">
            <p>Feel free to contact us any time.</p>
            <p>We will get back to you as soon as we can!</p>
          </div>
        </div>
        <div className="md:flex max-[910px]:flex-col w-full  justify-between items-center md:py-5 md:gap-14  ">
          <div className="flex flex-col gap-3 max-md:pl-[3rem]">
            <form className="flex flex-col mr-[rem] max-md:mr-[4rem] gap-14 pb-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-b-2 border-[#201f1f]  h-[3rem] bg-[#e6d4b9] text-black md:w-[22rem] px-4"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="border-b-2 border-[#201f1f] h-[3rem] bg-[#e6d4b9] text-black md:w-[22rem] px-4"
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Message"
                className="border-b-2 border-[#201f1f] h-[3rem] bg-[#e6d4b9] text-black md:w-[22rem] px-4"
              ></textarea>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", duration: 0.3, ease: "easeIn" },
                }}
                type="button"
                className="border-2 h-[3rem] rounded-md max-md:w-[40%] hover:bg-[#8d4e35] hover:text-white justify-center items-center  text-center border-[#643522] text-[#643522]  font-bold  uppercase text-xl tracking-widest"
              >
                Send
              </motion.button>
            </form>
          </div>
          <div className="bg-[#9e763b] overflow-hidden font-semibold text-white  md:w-screen pt-[2rem] pb-[3.3rem] px-[3rem] flex flex-col rounded-sm gap-14">
            <div className="md:flex justify-around max-md:flex-col">
              <div className="flex flex-col rounded-sm gap-14">
                <h1 className="text-3xl tracking-widest  ">Info</h1>
                <div className="flex gap-9 tracking-widest   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                  <p className="">info@sajjevents.com.</p>
                </div>
                <div className="flex gap-9 tracking-widest">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                    />
                  </svg>
                  <div>
                    <p>+19 797540000</p>
                    <p>+19 8815566156</p>
                  </div>
                </div>
                <div className="flex gap-9 tracking-widest">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                  <div>
                    SF 228, 25 floor, Vidya Nagar,
                    <br /> Hubballi, Karnataka 580021
                  </div>
                </div>
              </div>
              {/* <iframe className="max-md:hidden md:pl-[2rem] md:pt-[4rem] pt-4"
          title="location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d348041.86796211504!2d75.46377668537234!3d15.465287616155509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707211014536!5m2!1sen!2sin"
            width="350"
            height="400"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d56927.89392111595!2d75.78436092886044!3d26.903705516105322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d26.927036299999997!2d75.8603042!4m5!1s0x396db24ad0000019%3A0x85e5feb42013a2ac!2sPN%2075%2C%20second%20floor%20Satnam%20Honda%2C%20Tonk%20Rd%2C%20near%20kamal%20%26%20Co%2C%20Jaipur%2C%20Rajasthan%20302015!3m2!1d26.8679201!2d75.79697259999999!5e0!3m2!1sen!2sin!4v1709891989758!5m2!1sen!2sin"
                width="350"
                height="400"
                className="max-md:hidden md:pl-[2rem] md:pt-[4rem] pt-4"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
