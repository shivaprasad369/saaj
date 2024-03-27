import React, { useEffect } from "react";
import Aboutus from "../About";
import founder from "./founder.JPG";
import member1 from "./IMG_9218.JPG";
import member2 from "./WhatsApp Image 2024-03-18 at 1.37.35 PM.jpeg";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById("about1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div id="about1">
      <Aboutus />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", duration: 1.3, ease: "easeIn" },
        }}
        className="overflow-hidden"
      >
        <div className="flex gap-4 pt-[3rem] flex-col justify-center items-center text-center text-xl tracking-wider flex-wrap">
          <h1
            className="text-3xl uppercase tracking-widest font-semibold text-[#53431f]"
            style={{ fontFamily: ` "Libre Baskerville", serif` }}
          >
            About Saaj
          </h1>
          <p
            style={{ fontFamily: `'Segoe UI', sans-serif` }}
            className="border-0 w-[80%] text-[1.2rem] leading-8 text-[#7c582f] text-center"
          >
            Saaj Weddings stands as a testament to the belief that every
            celebration deserves to be extraordinary. Nestled in the heart of
            the vibrant city of Jaipur, Rajasthan. Our journey began with a
            deep-rooted passion for perfection and an unwavering commitment to
            excellence. We have dedicated ourselves to crafting dream weddings
            and memorable events that transcend expectations and create lasting
            memories. <br />
            <br />
            Rooted in the cultural richness and heritage of Rajasthan, Saaj
            Weddings creates events that are more than mere celebrations – they
            are living tapestries that honour traditions and storytelling. From
            Rajasthani folk music and dance performances to traditional
            ceremonies and rituals, we infuse each event with authentic cultural
            elements that showcase the timeless beauty and elegance of our
            heritage.
            <br />
            <br />
            <h4 className="font-bold text-2xl">
              Let's Create Magic Together{" "}
            </h4>
            As you embark on your journey of celebration, let Saaj Weddings be
            your trusted partner in crafting moments that last a lifetime.
            Whether it's a wedding, social gathering, or corporate event, we
            invite you to experience the art of extraordinary celebrations with
            us. Contact us today to begin your journey towards a truly
            unforgettable experience.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col py-[4rem]  max-sm:pl-2">
        <div className="flex flex-col justify-center items-center text-center tracking-widest gap-3">
          <h1
            className="uppercase text-3xl font-semibold text-[#3f3113]"
            style={{ fontFamily: ` "Libre Baskerville", serif` }}
          >
            Our Team
          </h1>
          <span
            style={{ fontFamily: `'Segoe UI', sans-serif` }}
            className="text-[1.3rem] text-[#4b3419] tracking-widest font-bold"
          >
            <i>The core members at saaj weddings</i>
          </span>
        </div>
        <div className="xl:ml-[8rem] max-xl:ml-[2rem]">

       
        <div className="relative mt-[3rem]  ">
          <div className=" sm:w-[72%]  lg:h-[65rem] sm:h-[70rem] md:h-[65rem] max-sm:h-[30rem] max-sm:w-[96%] ">
            <img
              src={founder}
              alt=""
              className=" h-[100%] w-[100%] bottom-[0rem]"
            />
          </div>
          <div className="absolute xl:top-[10%] lg:top-[6%] shadow-xl rounded-md pb-4 md:top-[7%] max-sm:top-[80%] sm:px-2 md:px-[1.3rem] sm:top-[5%] max-sm:w-[85%] md:w-[50%] pt-[3rem] max-md:w-[50%] max-sm:right-4 sm:right-[5%]   bg-[#e9e2d9] text-center md:pt-[3rem] max-md:pb-[2rem] lg:text-xl md:text-md lg:tracking-widest">
            <h1 style={{fontFamily: '"Great Vibes", cursive'}} className="text-[#706923] text-5xl font-semibold pb-[1rem]">
              Sanjay Gupta 
            </h1>
            <span  className="text-[#53431f] text-3xl font-bold">
            Founder
            </span>
            <p className="text-center p-2 mt-[1rem] md:px-3  text-[#7c582f]">
              Meet Sanjay Gupta, the visionary founder of Saaj Weddings, a
              leading event and wedding planning company in Jaipur. With a
              commitment to delivering end-to-end wedding planning services,
              Sanjay Gupta has transformed countless dreams into reality,
              earning the trust and admiration of more than 80+ satisfied
              clients.
              <br />
              <br />
             {/* <span className="font-semibold">Sanjay Gupta's Journey: From Aspiring CA to Event Planning Maestro </span><br/><br/> */}
              Sanjay Gupta's journey in the event planning industry is nothing
              short of inspirational. After embarking on a path in Chartered
              Accountancy, Sanjay realized his true passion lay in creating
              memorable experiences through event planning. With determination
              and a clear vision, he founded Saaj Weddings, setting a new
              standard of excellence in the industry. <br /> <br/>Sanjay Gupta and his
              dedicated team offer comprehensive end-to-end wedding planning
              services. From venue selection and decor to vendor coordination
              and guest management, every aspect of your special day is
              meticulously planned and executed to perfection, ensuring a
              seamless and unforgettable experience for you and your guests.
            </p>
          </div>
        </div>

        <div className="relative mt-[3rem] lg:mt-[6rem] max-sm:mt-[62rem]  ">
          <div className=" sm:w-[72%]  sm:h-[55rem]  max-sm:h-[25rem] max-sm:w-[95%] ">
            <img
              src={member1}
              alt=""
              className="  h-[100%]  w-[100%]  bottom-[0rem]"
            />
          </div>
          <div className="absolute rounded-md  sm:px-[1.3rem] shadow-xl sm:pb-[1rem] lg:top-[20%] md:top-[5%] max-sm:top-[80%] sm:top-[15%] max-sm:w-[80%] lg:w-[40%] md:w-[45%] pt-[3rem] max-md:w-[50%] max-sm:right-4 sm:right-[10%]   bg-[#e9e2d9] text-center md:pt-[3rem] max-md:pb-[2rem] md:text-xl md:tracking-widest">
          <h1 style={{fontFamily: '"Great Vibes", cursive'}} className="text-[#706923] text-5xl font-bold">
              Mohit Singh
            </h1>
            <span  className="text-[#53431f] text-2xl font-bold">
              Hospitality & Logistics Manager
            </span>
            <p className="text-center p-2 mt-[2rem] px-3 text-[#7c582f]">
              Mr. Mohit Singh is the driving force behind the seamless
              hospitality and logistics operations at Saaj Weddings, Jaipur's
              premier wedding planning company. With a wealth of experience and
              a passion for delivering exceptional guest experiences, Mr. Singh
              plays a pivotal role in ensuring that every event is executed with
              precision, professionalism, and a touch of warmth.
            </p>
          </div>
        </div>

        <div className="relative mt-[3rem] max-sm:mb-[22rem] lg:mt-[6rem] max-sm:mt-[32rem]  ">
          <div className=" sm:w-[72%]  sm:h-[55rem]  max-sm:h-[25rem] max-sm:w-[95%] ">
            <img
              src={member2}
              alt=""
              className="h-[100%] w-[100%] bottom-[0rem]"
            />
          </div>
          <div className="absolute lg:top-[20%] shadow-xl rounded-md md:top-[10%] max-sm:top-[80%] sm:px-[1.3rem] pb-[1rem] sm:top-[10%] max-sm:w-[80%] lg:w-[40%] md:w-[45%]  pt-[3rem] max-md:w-[50%] max-sm:right-4 sm:right-[10%]   bg-[#e9e2d9] text-center md:pt-[3rem] max-md:pb-[2rem] md:text-xl md:tracking-widest">
          <h1 style={{fontFamily: '"Great Vibes", cursive'}} className="text-[#706923] text-5xl font-bold">
              Varun Sharma
            </h1>
            <span  className="text-[#53431f] text-2xl font-bold">Production Manager</span>
            <p className="text-center p-2 mt-[2rem] text-[#7c582f]">
              As the Production Manager at Saaj Weddings, Mr. Varun Sharma
              brings unparalleled expertise to the table. His extensive
              background in event production and design, coupled with a keen eye
              for detail, allows him to orchestrate events that captivate the
              senses and leave a lasting impression on clients and guests alike.
            </p>
          </div>
        </div>

        {/* <div className="flex justify-center items-center overflow-hidden w-[100%] mt-[3rem]">
          <div className="flex justify-around items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 0.9,
                  whileInView: { type: "spring", duration: 2, ease: "easeIn" },
                }}
                className="  w-[100%] flex  md:gap-20  max-md:w-[100%] text-center max-md:flex-col-reverse "
              >
                <div className="relative    md:w-[150%] h-[30rem] max-sm:w-[100%] ">
                  <img
                    src={founder}
                    alt=""
                    className="absolute h-[100%] w-[100%] bottom-[0rem]"
                  />
                </div>
                <div className="text-center md:pt-[3rem] max-md:pb-[5rem] text-xl tracking-widest">
                  <h1 className="text-[#706923] text-2xl font-extrabold">Sanjay Gupta - Founder</h1>
                  <span className=" font-semibold">
                    A Visionary in the Art of Celebrations
                  </span>
                  <p className="text-justify p-2 mt-[3rem] text-[#7c582f]">
                    As the visionary behind Saaj Weddings, Sanjay brings a
                    wealth of expertise, creativity, and passion to the realm of
                    event planning and design in Jaipur, Rajasthan. With a
                    deep-rooted love for cultural richness and a keen eye for
                    detail, He has established Saaj Weddings as a premier
                    destination for extraordinary celebrations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div> */}

        {/* <div className="flex justify-center items-center overflow-hidden w-[100%] mt-[3rem]">
          <div className="flex justify-around items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 0.9,
                  whileInView: { type: "spring", duration: 2, ease: "easeIn" },
                }}
                className="  w-[100%] flex  md:gap-20  max-md:w-[100%] text-center max-md:flex-col-reverse "
              >
                <div className="relative  md:hidden  border-[1rem] md:w-[100%] h-[30rem] max-sm:w-[100%] border-[#835d2c]">
                  <img
                    src={member1}
                    alt=""
                    className=" absolute h-[100%] w-[100%]  bottom-[0rem]"
                  />
                </div>
                <div className="text-center md:pt-[3rem] max-md:pb-[5rem] text-xl tracking-widest">
                  <h1 className="text-[#706923] text-2xl font-extrabold">Mohit Singh</h1>
                  <span className="font-semibold">Hospitality & Logistics Manager</span>
                  <p className="text-justify p-2 mt-[3rem] text-[#7c582f]">
                    Mr. Mohit Singh is the driving force behind the seamless
                    hospitality and logistics operations at Saaj Weddings,
                    Jaipur's premier wedding planning company. With a wealth of
                    experience and a passion for delivering exceptional guest
                    experiences, Mr. Singh plays a pivotal role in ensuring that
                    every event is executed with precision, professionalism, and
                    a touch of warmth.
                  </p>
                </div>
                <div className="relative  max-md:hidden border-[1rem] md:w-[150%] h-[30rem] max-sm:w-[100%] border-[#835d2c]">
                  <img
                    src={member1}
                    alt=""
                    className=" absolute h-[100%] w-[100%]  bottom-[0rem]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div> */}

        {/* <div className="flex justify-center items-center overflow-hidden w-[100%] mt-[3rem]">
          <div className="flex justify-around items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 0.9,
                  whileInView: { type: "spring", duration: 2, ease: "easeIn" },
                }}
                className="  w-[100%] flex  md:gap-20  max-md:w-[100%] text-center max-md:flex-col-reverse "
              >
                <div className="relative   border-[1rem] md:w-[150%] h-[30rem] max-sm:w-[100%] border-[#835d2c]">
                  <img
                    src={member2}
                    alt=""
                    className="absolute h-[100%] w-[100%] bottom-[0rem]"
                  />
                </div>
                <div className="text-center md:pt-[3rem] max-md:pb-[5rem] text-xl tracking-widest">
                  <h1 className="text-[#706923] text-2xl font-extrabold">Varun Sharma</h1>
                  <span className="font-semibold">Production Manager</span>
                  <p className="text-justify p-2 mt-[3rem] text-[#7c582f]">
                    As the Production Manager at Saaj Weddings, Mr. Varun Sharma
                    brings unparalleled expertise to the table. His extensive
                    background in event production and design, coupled with a
                    keen eye for detail, allows him to orchestrate events that
                    captivate the senses and leave a lasting impression on
                    clients and guests alike.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div> */}
        {/* <div className="grid md:grid-cols-2 max-[948px]:grid-cols-1 justify-around items-center gap-4  my-[4rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.9,
              whileInView: { type: "spring", duration: 2, ease: "easeIn" },
            }}
            className="border-0 md:ml-[15%] flex md:flex-col md:w-[70%] max-md:w-[100%] text-center max-md:flex-col-reverse "
          >
            <div className="relative  border-[1rem] md:w-[100%] h-[30rem] max-sm:w-[100%] border-[#835d2c]">
              <img
                src={member2}
                alt=""
                className="absolute h-[100%] w-[100%] bottom-[0rem]"
              />
            </div>
            <div className="text-center md:pt-[5rem] max-md:pb-[5rem] text-xl tracking-widest">
              <h1 className="text-[#706923]">Varun Sharma</h1>
              <span>Production Manager </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.9,
              whileInView: {
                type: "spring",
                delay: 0.6,
                duration: 2,
                ease: "easeIn",
              },
            }}
            className="border-0 max-md:w-[100%] w-[70%] text-center "
          >
            <div className=" py-[2rem] pb-[5rem] text-xl tracking-widest">
              <h1 className="text-2xl text-[#776823]">Mohit Singh</h1>
              <span className="tracking-widest leading-9">
                Hospitality & Logistics Manager
              </span>
            </div>
            <div className="relative border-[1rem] md:w-[100%] max-md:w-screen h-[30rem] border-[#835d2c] ">
              <img
                src={member1}
                alt=""
                className=" absolute h-[100%] w-[100%]  bottom-[0rem]"
              />
            </div>
          </motion.div>
        </div> */}
      </div>
      </div>
    </div>
  );
}
