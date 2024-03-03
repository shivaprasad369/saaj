import React, { useEffect, useState } from "react";
import data from "../../constants/images";
import img2 from "../../components/assets/service2(desti).jpg";
import img3 from "../../components/assets/service1(decore).jpg";
import img4 from "../../components/assets/service3(vender).jpg";
import img5 from "../../components/assets/service4(coopert).jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import 'swiper/css';
// import 'swiper/css/effect-cards';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./styles.css";
import { Autoplay } from 'swiper/modules';

// import required modules
import { EffectCards } from "swiper/modules";
import { easeIn, easeInOut, motion } from "framer-motion";

export default function Services() {
  const [index, setIndex] = useState(0);
  const handleNextImage = () => {
    setIndex((index) => (index + 1) % data.length);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === 4) {
        setIndex(1);
      }
      handleNextImage();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeInOut", duration:2, type: "spring" }   }}
      id="services"
      className="p-2 relative overflow-hidden justify-center md:mx-[3rem] items-center bg-[#f1f1f3]"
    >
      <div className="grid relative md:grid-cols-2 grid-cols-1 gap-2">
        <motion.div
        
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { ease: "easeInOut", duration:2, type: "spring" },
          }}
          className=" md:pl-3 py-[2rem] md:flex flex-col items-center 
          justify-center  "
        >
          <h1 style={{ fontFamily:` "Libre Baskerville", serif`}} className="text-3xl pb-[2rem] text-center font-bold text-[#3f3415] uppercase">
            our services
          </h1>

          <p style={{fontFamily: `"Mate SC", serif`}} className="text-[#6b601e] text-justify tracking-widest sm:text-[1.2rem] max-sm:text-[1rem] leading-[1.7rem] whitespace-none text-md md:py-3 md:w-[90%] mb-3 px-2">
            Elevate your love story with a destination wedding orchestrated by
            Saaj Wedding. Our expertise extends beyond borders, crafting dream
            weddings in Beautiful spots. Let us turn your destination dreams
            into a reality, where every detail is infused with our signature
            touch of excellence
          </p>
        </motion.div>
        <motion.div
        
          // initial={{ opacity: 0, y: -50 }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          //   transition: { ease: easeIn, duration: 1.5, type: "spring" },
          // }}
          className=" bg-[#f1f1f3] md:p-1 w-auto "
        >
          <motion.div
            initial={{ bottom: "2rem" }}
            whileInView={{ bottom: "0rem" }}
            transition={{ duration: 2, type: "spring" }}
            className=" relative  items-center justify-center uppercase text-center"
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide className="flex  flex-col ">
                

                <img  src={img2} className="max-[412px]:h-[250vh] "/>
                <h1
                  style={{ fontFamily:` "Libre Baskerville", serif`}}
                  className={`text-xl tracking-widest pt-[0.6rem] text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  desctination
                </h1>
                
              </SwiperSlide>

              <SwiperSlide className="flex flex-col">
                <img src={img3} className="w-[100%] max-[412px]:h-[250vh] " />
                <h1
                  style={{ fontFamily:` "Libre Baskerville", serif`}}
                  className={`text-xl tracking-widest pt-[1rem] text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  Decor and Design
                </h1>
              </SwiperSlide>

              <SwiperSlide className="flex flex-col">
                <img src={img4} className="w-[100%] max-[412px]:h-[250vh] "/>
                <h1
                  style={{ fontFamily:` "Libre Baskerville", serif`}}
                  className={`text-xl tracking-widest pt-[0.5rem] text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  Vendor and Artist Management
                </h1>
              </SwiperSlide>

              <SwiperSlide className="flex flex-col">
                <img src={img5} className="w-[100%] max-[412px]:h-[250vh]" />
                <h1
                  style={{ fontFamily:` "Libre Baskerville", serif`}}
                  className={`text-xl tracking-widest pt-[0.7rem] text-[#2e2712] h-full text-center justify-center items-center w-full `}
                >
                  Corporates Events
                </h1>
              </SwiperSlide>
            </Swiper>
            {/* {data ? (
              data.map((data) => (
                <motion.div  className="object-contain">
                  <motion.img
                      initial={{ bottom: "2rem" }}
                      whileInView={{ bottom: "0rem" }}
                      transition={{ duration: 3, type: "spring" }} 
                    src={data.img}
                    className={`${
                      data?.index === index ? "block" : "hidden"
                    } md:w-[100%] blur-[0.1rem] rounded-md max-md:w-full`}
                  />

                  <h1
                    style={{ fontFamily: '"DM Serif Display", serif' }}
                    className={`text-xl absolute ${
                      data.index === 3
                        ? "  text-center"
                        : " items-center justify-center"
                    }   font-bold top-0  pt-[20%]  h-full  text-center justify-center items-center w-full `}
                  >
                    <div className="relative z-10 md:text-6xl max-md:text-5xl text-[#0a0a0a]">

                    {data?.index === index && data.data}
                    </div>
                  </h1>
                </motion.div>
              ))
            ) : (
              <Skeleton animation="wave" height={600} width="100%" />
            )}
            {!data && (
              <Skeleton animation="wave" height={"100%"} width="100%" />
            )} */}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}