import { Language } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import img from '../assets/demo/about1.webp'
import { useLocation } from "react-router-dom";
import {toast} from 'react-hot-toast'
import emailjs from "@emailjs/browser";
export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  const  [form,setForm]=useState({
    name:'',
    email:"",
    subject:"",
    message:"",
    message:"",
    message:"",
   

  })
  const handleSubmit = (event) => {
    event.preventDefault();
 console.log(form)
    emailjs
      .send(
        "service_iyftcu9",
        "template_35t1pae",
        {
          from_name: form.name,
          to_name: "Saaj Weddings",
          from_email: form.email,
          to_email: "info@saajwedding.com",
          message: form.message,
          number:form.number,
          day: form.day,
          guests: form.guests,
         
        },
        "PVqq0KUlSqmgQPJnu"
      )
      .then(() => {
       
        setForm({ name:'',
        email:"",
        number:'',
        subject:"",
        message:"",
        day:"",
        guests:"",
       
    });
    alert("Thank you so much")
        toast.success("Thank you so much")
      });
  };
  return (
    <div id="contact" className="bg-[#d1dad3d2]  relative md:flex max-md:flex-col items-center lg:gap-[10rem] md:gap[5rem]">
      <div className="md:flex flex-col w-[100%] text-md overflow-hidden max-md:p-[1.5rem]  md:m-[2.5rem] flex-[0.70] flex-wrap  ">
        <div className="gap-3 flex flex-col w-[100%]">
          <h1 className="text-[3.4rem] font-bold text-[#695726]" style={{ fontFamily: `"Tinos", serif` }}>Get in touch</h1>
          <p className=" text-md flex-wrap text-[#413f3f]"  style={{ fontFamily: `'Segoe UI', sans-serif` }}>
            Feel free to contact us any time. <br />
            We will get back to you as soon as
            we can!
          </p>

          <div className="flex my-6">
            <div className="flex  gap-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:pb-[3rem] "
                width={30}
                viewBox="0 0 384 512"
              >
                <path
                  fill="#4b4949"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
                </svg>
              <div>
                <span>Address</span>
                <p className="text-xl flex-wrap  overflow-hidden text-[#1b1a1a]"  style={{ fontFamily: `'Segoe UI', sans-serif` }}>
                  PN 75, second floor Satnam Honda, Tonk Rd, near kamal & Co,
                  Jaipur, Rajasthan 302015.
                </p>
              </div>
            </div>
          </div>
          <Divider sx={{width:'90%'}}/>
          <div>
            <div className="flex  gap-5 my-6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
            className="pb-5"
                width={25}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#4b4949"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              <div>
                <span>Phone</span>
                <p className="text-xl flex-col">
                <span>+91 97823 40243</span><br />
                <span>+91 95096 66873</span>
                </p>
              </div>
            </div>
          </div>
          <Divider sx={{width:'90%'}}/>
          <div>
            <div className="flex  gap-5 my-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                className="pb-5"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#4b4949"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <div>
                <span>Email</span>
                <p className="text-xl "   style={{ fontFamily: `'Segoe UI', sans-serif` }}>
                info@saajwedding.com
                </p>
              </div>
            </div>
            <Divider sx={{width:'90%'}}/>
          </div>
          <div className="my-4">
            <h1 className="text-md font-bold">Follow on</h1>
            <div className="flex-wrap gap-4 flex my-[2rem]">
           <a href="https://www.facebook.com/saajweddingsindia/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              viewBox="0 0 512 512"
            >
              <path
                fill="#4b4949"
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
              />
            </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCUXhh0K2BqccrkffVJNJXmA">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#4b4949"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/saaj_weddings/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#4b4949"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="relative max-md:p-4 z-30">
      
         <div className="bg-[#fff] p-5 max-md:w-[100%] md:w-[100%] lg:w-[120%] shadow-xl rounded-md  z-10">
       
          <h1 className="text-2xl my-4 font-bold text-[#55411d]" style={{ fontFamily: `"Tinos", serif` }}>
            
            Send Message
            </h1>
          <div className="flex flex-col" style={{ fontFamily: `'Segoe UI', sans-serif` }}>
            <label className="font-semibold">Name</label>
            <div className="flex gap-2 pb-4 ">

            <div className="flex flex-col w-[50%]">

            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.name}
              onChange={(e)=>setForm({...form, name:e.target.value})}
              className="border-[1px] h-[2rem] p-2 bg-gray-50"
              required
            />
            <span  className="text-gray-400 font-semibold">First</span>
            </div>
          <div className="flex flex-col flex-[0.50] w-[50%]">
          <input type="text" placeholder="last Name" required  className="border-[1px] h-[2rem] p-2 bg-gray-50"/>
          <span className="text-gray-400">Last</span>
          </div>
            </div>
            <label className="font-semibold">Number</label>
          <input type="text" value={form.number} onChange={(e)=>setForm({...form, number:e.target.value})} placeholder="Enter Number"  className="border-none mb-4 h-[2rem] p-2 bg-gray-50" />
          <label className="font-semibold">Email</label>
          <input type="Email "value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Enter Email Address"  className="border-none mb-4 h-[2rem] p-2 bg-gray-50" />
          <label htmlFor="subject" className="font-semibold"> Subject</label>
          <input type="text" value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} placeholder="Enter Subject"   className="border-none h-[2rem] p-2 mb-4 bg-gray-50 "/>
          <label htmlFor="message " className="font-semibold">Comment or Message</label>
          <textarea rows={2} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="border-[1px] mb-4  p-2 bg-gray-50"/>
          <label>Tell me about your special day</label>
          <textarea rows={1} value={form.day} onChange={(e)=>setForm({...form, day:e.target.value})}  className="border-[1px] mb-4  p-2 bg-gray-50"/>
          <label>How many guests are joining</label>
          <textarea rows={1} value={form.guest} onChange={(e)=>setForm({...form, guests:e.target.value})} className="border-[1px] mb-4  p-2 bg-gray-50"/>
          {/* <textarea rows={3}  className="border-[1px] mb-4  p-2 bg-gray-50"/> */}
        
          <button type="submit" className="border-[1px] h-[2.4rem] rounded-md bg-[#b48e47] w-fit px-4 shadow-md font-semibold text-white" style={{float:'left'}} onClick={handleSubmit}>Submit</button>
          </div>
       
      </div>
      </div>  
<img src={img} alt=""  className="absolute right-0 w-[30rem] h-full top-0  max-md:hidden"/>
    </div>
  );
}
