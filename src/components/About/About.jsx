import React, { useEffect } from "react";
import Aboutus from "../About";
import founder from "./founder.JPG";
import member1 from "./IMG_9218.JPG";
import member2 from "./WhatsApp Image 2024-03-18 at 1.37.35 PM.jpeg";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Team from "./Team";

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
                style={{fontFamily:'"Alegreya", serif '}}
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
        {/* <div className="flex flex-col justify-center items-center text-center tracking-widest gap-3">
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
        </div> */}
       <div>
        <Team/>
       </div>
      </div>
    </div>
  );
}
