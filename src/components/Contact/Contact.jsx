import { Divider } from "@nextui-org/react";
import React, { useEffect } from "react";
import image from './contact.png'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
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
    story:"",
    hear:"",
    number:"",
    functions:'',
    guests:"",
   partners:"",
   

  })
  const handleSubmit = (event) => {
    event.preventDefault();
 console.log(form)

    emailjs.send(
        "service_iyftcu9",
        "template_35t1pae",
        {
          from_name: form.name,
          to_name: "Saaj Weddings",
          from_email: form.email,
          to_email: "info@saajwedding.com",
          message:"parters name :-"+form.partners + " About their stories :-" +form.story + "Where did you hear about saaj weddings :- "+form.hear ,
          number:form.number,
          day: form.functions,
          guests: form.guests,
         
        },
        "PVqq0KUlSqmgQPJnu"
      )
      .then(() => {
       
        setForm({
        name:'',
        email:"",
        number:'',
        partners:"",
        functions:"",
        hear:"",
        story:"",
        guests:"",
       
    });
    alert("Thank you so much")
        toast.success("Thank you so much",{
          duration: 4000,
          position: 'top-center',
         })
      });
  }
  return (
    <>
    <div id='contact' className="md:flex max-sm:flex-col justify-center  text-center mx-[5%] mt-[3rem]">
      <div className="border-0 justify-center md:w-[45%] max-md:w-[100%] items-center">
        <div>
          <div className="border-0  md:h-[35rem] max-sm:h-full">
          <img src={image} alt="" className="w-full h-full"/>
          </div>
          <div className=" gap-5 my-7 flex flex-col">
            <h4 className="font-semibold">BOOK US</h4>
            <h6 className="font-semibold">Mail: <span >info@saajwedding.com</span></h6>
            <h6>Phone: +91 97823 40243 <br />
                      <span className="ml-10"/> +91 95096 66873</h6>
            <h6>G-13, Balaji Tower IV, Radisson blue hotel, Durgapura Flyover, Tonk Road Jaipur, 302020.</h6>
            <h6 className="px-4">
              Our networks are spotty- We would really appreciate if you could
              leave a message in case you can’t get through.
            </h6>
            <h6 className="font-semibold">LET'S WORK TOGETHER</h6>
            {/* <h6>info@saajwedding.com</h6> */}

            {/* 
CAREERS
We are always hiring! Please leave your details on the link below and we will get in touch if you’re a good fit!

www.devikanarainandcompany.com/joinus */}
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-0  md:w-[35rem] max-md:w-[100%] flex flex-col gap-3 ">
          <form action=" " onSubmit={handleSubmit} className="flex flex-col text-start px-5">
            <label htmlFor="name">
              Your Name{" "}
              <span className="text-xs text-gray-500">(required)</span>
            </label>
            <div className="flex gap-1 my-2">
              <div className="w-[50%]">
                <label htmlFor="First" className="text-xs">
                  First Name
                </label>
                <input
                 onChange={(e)=>setForm({...form, name:e.target.value})}
                  type="text"
                  name="name"
                  value={form.name}
                  id="name"
                  required
                  className="bg-gray-100 p-2 w-[100%] h-[2.5rem] border-[1px]  border-gray-500"
                />
              </div>
              <div  className="w-[50%]">
                <label htmlFor="Last" className="text-xs">
                  Last Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="bg-gray-100 h-[2.5rem] p-2 border-[1px] w-[100%] border-gray-500"
                />
              </div>
            </div>
            <label htmlFor="Partners" className="py-2">
              Partners Name{" "}
              <span className="text-xs text-gray-500">(required)</span>
            </label>
            <input
              type="text"
              name="parter"
              onChange={(e)=>setForm({...form, partners:e.target.value})}
              id="partner"
              value={form.partners}
              required
              className="bg-gray-100 h-[2.5rem] border-[1px] p-2 w-[100%] border-gray-500"
            />
            <label htmlFor="email" className="py-2">
              Email <span className="text-xs text-gray-500">(required)</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@domain.com"
              onChange={(e)=>setForm({...form, email:e.target.value})}
              id="email"
              required
              value={form.email}
              className="bg-gray-100 h-[2.5rem] border-[1px] w-full border-gray-500 p-3"
            />
            <label htmlFor="Phone" className="py-2 mt-1">
              Phone <span className="text-xs text-gray-500">(required)</span>
            </label>
            <h6 className="text-xs font-thin mb-1">
              Please specify Area Code. <br />
              Whatsapp Number is preferred.
            </h6>
            <input
              type="tel"
              name="phone"
              onChange={(e)=>setForm({...form, number:e.target.value})}
              placeholder="Enter Phone Number"
              id="phone"
              value={form.number}
              required
              className="bg-gray-100 h-[2.5rem] border-[1px] w-full border-gray-500 p-3"
            />

            <div className="mt-[1rem]" />
            <span className="py-1 text-sm">Section</span>
            <Divider />
            <div className="mt-4">
              <label htmlFor="where" className="font-normal pb-2 ">
                Where did you hear about us?
              </label>
              <div>
                <input
                  type="checkbox"
                  id="friends"
                  name="friends"
                  onChange={(e)=>setForm({...form, hear:e.target.value})}
                  value="friend"
                />
                <label htmlFor="friends" className="text-sm font-thin">
                  {" "}
                  A friend
                </label>
                <br />
                <input
                  type="checkbox"
                  id="Online"
                  name="Online"
                  onChange={(e)=>setForm({...form, hear:e.target.value})}
                  value="Online"
                />
                <label htmlFor="Online" className="text-sm font-thin">
                  {" "}
                  Online
                </label>
                <br />
                <input type="checkbox" id="Blog" name="Blog " onChange={(e)=>setForm({...form, hear:e.target.value})} value="Blog" />
                <label htmlFor="Blog or Magazine" className="text-sm font-thin">
                  {" "}
                  Blog or Magazine
                </label>
                <br />
              </div>
              <label htmlFor="">
                We love stories! Tell us yours{" "}
                <span className="text-xs text-gray-500">(required)</span>
              </label>
              <br />
              <textarea
                name="story"
                id="story"
                value={form.story}
                onChange={(e)=>setForm({...form, story:e.target.value})}
                rows="3"
                className="bg-gray-100  border-[1px] w-full border-gray-500 p-3"
              ></textarea>
              <label htmlFor="" className="pt-3">
                Tell us about your function.
                <span className="text-xs text-gray-500">(required)</span>
              </label>

              <h6 className="font-light text-xs pt-3 pb-1">
                Dates, number of guests, venues, styles and anything else you'd
                like to tell us <br />
                The more details you give us, the easier it is for us to share a
                quote with you!
              </h6>
              <textarea
                name="function"
                id="function"
                rows="3"
                required
                value={form.functions}
                onChange={(e)=>setForm({...form, functions:e.target.value})}
                className="bg-gray-100  border-[1px] w-full border-gray-500 p-3"
              ></textarea>
              <label htmlFor="" className="py-2">
                How many guests are you expecting?
                <span className="text-xs text-gray-500">(required)</span>
              </label>
              <textarea
                name="guests"
                id="guests"
                rows="3"
                value={form.guests}
                onChange={(e)=>setForm({...form, guests:e.target.value})}
                required
                className="bg-gray-100  mt-2 border-[1px] w-full border-gray-500 p-3"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-[#559e33] hover:bg-gray-800 text-xl text-white py-3 max-sm:mb-[2rem] w-[8rem] rounded mt-[1.5rem]"
            />
          </form>
        </div>
      </div>
    </div>
      <div className="my-[10rem] border-b-[1px] max-md:hidden block border-gray-200"></div>
      {/* <div className="mb-[5rem] border-b-[1px] w-[70%] max-md:hidden block border-gray-400"/> */}
    </>
  );
}
