import React, { useEffect, useState } from "react";
import img1 from "./services111.jpg";
import img2 from "./s1.jpg";
import img3 from "./s3.jpg";
import img4 from "./s4.jpg";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function Services() {
  const [i,setImg]=useState()
  const [i2,setImg2]=useState()

  const [i3,setImg3]=useState()
  const [i4,setImg4]=useState()

  const [loading,setLoading]=useState(false)
  const [loading1,setLoading1]=useState(false)

  const [loading2,setLoading2]=useState(false)
  const [loading3,setLoading3]=useState(false)

  const [showModel,setShowModel]= useState(false)
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  
  async function handleImage(id) {
    try {
      setLoading(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/services/${id}`);
      console.log(res.data.data);
      const result = res;
      setImg(res.data?.data?.photo);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }
  async function handleImage2(id) {
    try {
      setLoading1(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/services/${id}`);
      console.log(res.data.data);
      const result = res;
      setImg2(res.data?.data?.photo);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading1(false);
    }
  }
  async function handleImage3(id) {
    try {
      setLoading2(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/services/${id}`);
      console.log(res.data.data);
      const result = res;
      setImg3(res.data?.data?.photo);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading2(false);
    }
  }
  async function handleImage4(id) {
    try {
      setLoading3(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/services/${id}`);
      console.log(res.data.data);
      const result = res;
      setImg4(res.data?.data?.photo);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading3(false);
    }
  }
  useEffect(() => {
    handleImage(1);
    handleImage2(2);
    handleImage3(3);
    handleImage4(4);

  }, []);
  return (
    <div
      className="bg-white mr-[3%]"
      id="services"
      style={{ backgroundColor: "white" }}
    >
      <div className="text-center mt-[2rem] max-md:mb-[5rem]">
        <h1
          className="text-3xl uppercase text-[#975d2e]"
          style={{ fontFamily: '"DM Serif Display", serif', fontWeight: 600 }}
        >
          Our services
        </h1>
      </div>
      <div id="client max-w:[90%]  justify-center items-center ">
        <div 
        className="md:w-[90%] md:mt-[6rem] md:mb-[10rem]
          md:rounded-tl-[100px] md:ml-[7%] flex m-2  md:flex-row max-xl:flex-col gap-4
           bg-[#E7E1D9] xl:h-[27rem] max-md:h-full  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className=" md:w-[150%] mt-[-2rem] sm:rounded-tl-[100px]"
          >
            {!loading ? <img
              src={i}
              alt="card"
              className=" md:h-[110%] md:w-[100%] sm:rounded-tl-[100px] sm:rounded-br-[100px]"
            />:<>Loading</>}
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black bg-[#E7E1D9] min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
          >
            <div style={{ fontFamily:'"Alegreya" serif ',fontStyle:'italic' }} className="text-center flex-wrap  justify-center object-contain ">
              <h1
                className="text-[3rem] text-[#794d25] leading-17 font-bold pt-[2rem] pb-[1rem] capitalize"
                style={{ fontFamily: '"Great Vibes"', fontWeight: 400 }}
              >
                wedding planning
              </h1>
              <p
             style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
              className="tracking-wider text-center text-[#705704] md:text-[1.2rem]   max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[1rem] max-sm:px-[0.5rem] "
            >
                Saaj Weddings stands proudly as the symbol of excellence among
                wedding planners in Jaipur, renowned for our unwavering
                commitment and years of expertise in crafting dream weddings. We
                understand that your big day is special, and our experience
                allows us to make it uniquely yours.
              </p>
              <div></div>
              <p
               style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
              className="tracking-wider text-center text-[#705704] md:text-[1.2rem] md:mt-3  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[0.3rem] max-sm:px-[0.5rem] "
              >
                At Saaj Weddings, our passion is to transform your dreams into
                reality, ensuring that every detail is a reflection of your
                unique love story. Entrust your special day to Saaj Weddings,
                where our seasoned expertise meets heartfelt dedication,
                promising you a celebration that transcends expectations and
                becomes an everlasting chapter in your love story.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div id="client max-w:[90%] justify-center items-center ">
        <div className="md:w-[90%] object-contain max-sm:mt-[4rem] md:ml-[7%] md:mb-[10rem] flex m-2 mt-10 md:flex-row max-md:flex-col gap-4 bg-[#E7E1D9] sm:rounded-br-3xl max-sm:rounded-none  xl:h-[30rem] h-full max-md:h-full   ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="md:hidden md:w-[100%]  mt-[-2rem] sm:rounded-tl-[100px]"
          >
           {!loading1 ? <img
              // src={img2}
              src={i2}
              alt="card"
              className=" md:h-[100%] md:w-[100%] sm:rounded-tl-[100px]  sm:rounded-br-[100px]"
            />: <div>
               <div className="relative max-sm:ml-[5rem] z-0  overflow-hidden md:ml-2  rounded-t-full w-[70%] h-[26rem]  max-sm:w-[80%] ">
                     <Skeleton variant="rectangular" width={'100%'}  />
                     </div>
              </div>}
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black pb-2 min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center  flex-wrap max-[810px]:pb-[1rem] "
          >
            <div className="text-center rounded-r-[30px] flex-wrap justify-center object-contain ">
              <h1
                className="text-[3rem] text-[#794d25] leading-17 font-bold pt-[2rem] pb-[1rem] capitalize"
                style={{ fontFamily: '"Great Vibes"', fontWeight: 400 }}
              >
                vendors and artist management
              </h1>
              <p
                  style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
                  className="tracking-wider text-center text-[#705704] md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[0.3rem] max-sm:px-[0.5rem] "
              >
                At Saaj Weddings, we understand that the success of any
                celebration lies in seamless vendor and artist management.
                Choosing the right vendors and artists is like assembling the
                perfect team for your dream day. Our commitment to excellence
                extends to carefully selecting and managing each vendor and
                artist, ensuring they align with your vision and expectations.
              </p>
              <div className="p-2"></div>
              <p
                  style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
                  className="tracking-wider text-center text-[#705704] md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[0.3rem] max-sm:px-[0.5rem] "
              >
                From photographers capturing your cherished moments to caterers
                delighting taste buds, every vendor plays a crucial role. Our
                meticulous management ensures everyone works in harmony,
                creating a symphony of talents that makes your wedding
                extraordinary. With Saaj Weddings, you can relax knowing that we
                handle all the details, allowing you to enjoy a flawless
                celebration filled with the expertise and creativity of the best
                in the business.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="max-md:hidden w-[170%] mt-[-2rem] rounded-tl-[100px]"
          >
           {!loading1 ? <img
              // src={img2}
              src={i2}
              alt="card"
              className=" md:h-[110%] w-[100%] rounded-tl-[100px] rounded-br-[100px]"
            />:<>Loading..</>}
          </motion.div>
        </div>
      </div>

      <div id="client max-w:[90%] justify-center items-center ">
        <div className="md:w-[90%]  md:ml-[7%] xl:h-[27rem] max-sm:mt-[4rem]  md:rounded-tl-[100px]  md:mb-[10rem] flex m-2 mt-10 md:flex-row max-md:flex-col gap-4 bg-[#E7E1D9] md:h-[100%] h-full  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className=" md:w-[150%] mt-[-2rem] sm:rounded-tl-[100px]"
          >
           {!loading2 ? <img
              // src={img3}
              src={i3}
              alt="card"
              className=" md:h-[110%]  w-[100%] max-md:h-[23rem] sm:rounded-tl-[100px] sm:rounded-br-[100px]"
            />:<>Loading ..</>}
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black pb-2 min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
          >
            <div className="text-center flex-wrap  justify-center object-contain ">
              <h1
                className="text-[3rem] text-[#794d25] leading-17 font-bold pt-[2rem] pb-[1rem] capitalize"
                style={{ fontFamily: '"Great Vibes"', fontWeight: 400 }}
              >
                decor and design
              </h1>
              <p
                 style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
                 className="tracking-wider text-center text-[#705704] md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[0.3rem] max-sm:px-[0.5rem] "
              >
                At Saaj Weddings, we know that how a wedding looks and feels is
                super important. Decor and design are like the fairy tale makers
                – they create the magical atmosphere that makes your day
                unforgettable. We pay extra attention to every detail, from
                flowers to lights, making sure everything matches your style and
                makes your love story shine.
              </p>
              <div className="p-2"></div>
              <p
                  style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
                  className="tracking-wider text-center text-[#705704] md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[0.3rem] max-sm:px-[0.5rem] "
              >
                Our goal is to turn your venue into a dreamy space that brings
                out all the happy emotions, not just for you but for everyone
                celebrating with you. With Saaj Weddings, you can count on a
                perfect mix of creativity and elegance, making your special day
                as beautiful as your love story.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div id="client max-w:[90%] justify-center items-center ">
        <div className="md:w-[90%] md:ml-[7%] max-sm:mt-[4rem] md:mb-[10%] flex m-2 mt-10 sm:rounded-br-[2.4rem] max-sm:rounded-none md:flex-row max-md:flex-col gap-4 bg-[#E7E1D9]  h-full  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="md:hidden md:w-[80%] sm:w-full sm:h-full mt-[-2rem] sm:rounded-tl-[100px]"
          >
            {!loading3 ? <img
              // src={img4}
              src={i4}
              alt="card"
              className=" md:h-[110%] max-md:w-[100%] max-md:h-[23rem] sm:rounded-tl-[100px] sm:rounded-br-[100px]"
            />:<>Loading...</>}
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.7,
              },
            }}
            className=" border-black  min-[766px]:w-[150%] max-min:w-[90%] max-[810px]:text-[0.8rem] mt-2 px-3 items-center justify-center flex-wrap max-[810px]:pb-[2rem] "
          >
            <div className="text-center flex-wrap  justify-center object-contain ">
              <h1
                className="text-[3rem] text-[#724a24] leading-17 font-bold pt-[2rem] pb-[1rem] capitalize"
                style={{ fontFamily: '"Great Vibes"', fontWeight: 400 }}
              >
                corporate events
              </h1>
              <p
                style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
                className="tracking-wider text-center text-[#705704] md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[0.3rem] max-sm:px-[0.5rem] "
              >
                At Saaj Weddings, we bring our expertise in creating magical
                moments to the corporate world, offering a unique touch to your
                business events. Whether it's a product launch, corporate
                retreat, or a milestone celebration, we understand the
                importance of leaving a lasting impression. Our seasoned team at
                Saaj Weddings meticulously plans and executes corporate events,
                ensuring a perfect blend of professionalism and creativity.
              </p>
              <div></div>
              <p
                 style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
                 className="tracking-wider text-center md:pb-8 md:mt-3 text-[#705704] md:text-[1.2rem]  max-sm:text-[1rem] leading-[1.6rem] max-sm:py-[0.3rem] max-sm:px-[0.5rem] "
              >
                From conceptualization to flawless execution, we focus on every
                detail, including venue selection, thematic decor, audio-visual
                arrangements, and guest experience. Trust Saaj Weddings to
                elevate your corporate gatherings, making them not just events
                but experiences that reflect the excellence of your brand.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeIn",
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="max-md:hidden md:w-[160%] mt-[-2rem] sm:rounded-tl-[100px]"
          >
            {!loading3 ?<img
              // src={img4}
              src={i4}
              alt="card"
              className=" md:h-[110%] rounded-tl-[100px] rounded-br-[100px]"
            />:<>Loading...</>}
          </motion.div>
        </div>
      </div>
      <div className="max-sm:hidden my-[10%] border-b-[1px] border-gray-200"></div>
    </div>
  );
}
