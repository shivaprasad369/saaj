import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import price from "./best-price.png";
import price1 from "./expert (1).png";
import React from "react";
import img from "./RA_Wedding (336)-min.jpg";
import { motion } from "framer-motion";
export default function Why() {
  return (
    <div className="w-full relative h-full justify-center items-center  overflow-hidden flex flex-col gap-3">
      <div className="mt-3 gap-3 text-3xl p-4 font-bold uppercase text-[#9e6c32]">
        <h1 style={{ fontFamily: ` "Libre Baskerville", serif` }}>Why Saaj?</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        className="w-[10rem] z-0 absolute left-[5.6rem] bottom-[20%] opacity-[0.3] "
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(5.33333,5.33333)">
            <circle
              cx="36"
              cy="20"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="36"
              cy="12"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="36"
              cy="36"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="36"
              cy="28"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="28"
              cy="20"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="28"
              cy="12"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="28"
              cy="36"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="28"
              cy="28"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="20"
              cy="20"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="20"
              cy="12"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="20"
              cy="36"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="20"
              cy="28"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="12"
              cy="20"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="12"
              cy="12"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="12"
              cy="36"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="12"
              cy="28"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
          </g>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        className="w-[14rem] z-0 absolute right-[5.6rem] bottom-[-8%] opacity-[0.3] "
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(5.33333,5.33333)">
            <circle
              cx="36"
              cy="20"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="36"
              cy="12"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="36"
              cy="36"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="36"
              cy="28"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="28"
              cy="20"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="28"
              cy="12"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="28"
              cy="36"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="28"
              cy="28"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="20"
              cy="20"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="20"
              cy="12"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="20"
              cy="36"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="20"
              cy="28"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="12"
              cy="20"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="12"
              cy="12"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
            <circle
              cx="12"
              cy="36"
              r="3"
              fill-opacity="0.6"
              fill="#8c5f14"
            ></circle>
            <circle
              cx="12"
              cy="28"
              r="3"
              fill-opacity="0.76863"
              fill="#bc8947"
            ></circle>
          </g>
        </g>
      </svg>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { type: "spring", duration: 1.2, ease: "easeIn" },
        }}
        className="flex flex-row relative justify-center  max-md:flex-col gap-10"
      >
        <div className="shadow-sm ">
          <Card
            sx={{
              maxWidth: 460,
              height: 420,
              zIndex: 1,
              boxShadow: 10,
              borderRadius: 5,
              marginBottom: 3,
            }}
            className="shadow-md"
          >
            <CardActionArea className="p-2">
              <CardMedia
                sx={{ height: 260, borderRadius: 5 }}
                className="p-2 border z-10 rounded-md"
                component="img"
                height={"100"}
                image={img}
                alt="client"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p
                    style={{ fontFamily: `"Tinos", serif`,fontStyle:'italic' }}
                    className="text-3xl text-[#9e6c32] font-semibold"
                  >
                    Customized Events
                  </p>
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <p
                  style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
                   className=" md:text-[1rem] text-[#946b2e] tracking-wide  sm:text-[0.88rem]">
                    Crafting unique weddings, ensuring every detail reflects the
                    couple's style, making celebrations unforgettable and
                    special.
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="flex flex-col gap-4 md:ml-4 max-md:p-[1rem] ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex md:h-50 overflow-hidden sm:h-[100%] hover:bg-[#978e8e35] w-full max-w-md items-center justify-center rounded-lg border-0 border-gray-300 bg-white shadow-2xl"
          >
            <div className="flex h-full w-1/4 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                viewBox="0 0 512 512"
                className="sm:h-20 max-sm:h-17 w-[5rem] max-[480px]:w-[4rem]  object-contain hover:text-white border-[1px] p-3  bg-[#684222] rounded-xl"
              >
                <path
                  fill="#fff"
                  d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-80 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM276.8 383.8c1 .1 2.1 .2 3.2 .2c39.8 0 72 32.2 72 72v22.7c0 16.4 16 27.9 31.6 22.8l12.8-4.3c18-6 37.3-6.5 55.6-1.5l19.4 5.3c17.9 4.9 34.4-11.6 29.5-29.5L495.6 452c-5-18.3-4.4-37.6 1.5-55.6l4.3-12.8c5.2-15.5-6.4-31.6-22.8-31.6c-34.6 0-62.7-28.1-62.7-62.7v-32c0-16.4-16-27.9-31.6-22.8l-12.8 4.3c-18 6-37.3 6.5-55.6 1.5l-29.6-8.1c-2.9-.8-5.9-1-8.7-.7c4.2 9.7 5.8 20.8 3.7 32.3L275 298.7c-1.5 8.4-1.4 17 .5 25.3l5.3 23.9c2.8 12.7 1.1 25.2-4 35.9zM127.6 234.5c-15.5-5.2-31.6 6.4-31.6 22.8v32C96 323.9 67.9 352 33.3 352c-16.4 0-27.9 16-22.8 31.6l4.3 12.8c6 18 6.5 37.3 1.5 55.6l-5.3 19.4C6.2 489.4 22.6 505.8 40.5 501L60 495.6c18.3-5 37.6-4.5 55.6 1.5l12.8 4.3c15.5 5.2 31.6-6.4 31.6-22.8v-32c0-34.6 28.1-62.7 62.7-62.7c16.4 0 27.9-16 22.8-31.6l-4.3-12.8c-6-18-6.5-37.3-1.5-55.6l5.3-19.4c4.9-17.9-11.6-34.4-29.5-29.5L196 240.4c-18.3 5-37.6 4.4-55.6-1.5l-12.8-4.3zM384 144a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                />
              </svg>
            </div>
            <div
              style={{ fontFamily: "'Segoe UI', sans-serif" }}
              className="flex w-3/4  flex-col justify-center p-2 border-0"
            >
              <h1
                style={{ fontFamily: `"Tinos", serif` }}
                className="text-3xl text-[#9e6c32]  border-0 font-bold py-2 max-[480px]:text-[1.5rem]"
              >
                Special Decor
              </h1>
              <p   style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}} className=" md:text-[1rem] text-[#684f2a] tracking-wide  sm:text-[0.88rem]">
                Transforming venues with unique floral arrangements and
                personalized themes, Saaj's decor creates enchanting spaces that
                leave a lasting impression on attendees, making every
                celebration truly unforgettable.
              </p>
            </div>
          </motion.div>

          <div
            className="flex gap-4"
          >
            <div className=" h-[93%] max-[480px]:w-[50%] max-[480px]:h-[100%] w-[14rem] shadow-md flex flex-col p-3 bg-white rounded-xl hover:bg-[#978e8e35]">
    
              <img
                src={price}
                alt=""
                className="sm:h-19 max-sm:h-17 w-[4rem] max-[480px]:w-[4rem]  object-contain hover:text-white border-[1px] p-3  bg-[#684222] rounded-xl"
              />
              <h1
                 style={{ fontFamily: `"Tinos", serif` }}
                className="text-3xl text-[#9e6c32] font-bold md:py-2 max-[480px]:text-[1.5rem]"
              >
                Best Price
              </h1>
              <p style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}} className=" md:text-[1rem] text-[#684f2a] tracking-wide  sm:text-[0.88rem]">
                {" "}
                Exceptional quality services at unbeatable rates.
              </p>
            </div>
            <div
              style={{ boxShadow: "2rem" }}
              className=" h-[93%] max-[480px]:w-[50%] max-[480px]:h-[100%] w-[14rem] shadow-md flex flex-col p-3 bg-white rounded-xl hover:bg-[#978e8e35]"
            >
              <img
                src={price1}
                alt=""
                className="sm:h-20 max-sm:h-17 w-[4rem] max-[480px]:w-[4rem]  object-contain hover:text-white border-[1px] p-3  bg-[#684222] rounded-xl"
              />
              <h1
                 style={{ fontFamily: `"Tinos", serif` }}
                className="text-3xl text-[#9e6c32] font-bold md:py-2  max-[480px]:text-[1.5rem] capitalize"
              >
                Expertise
              </h1>
              <p  style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}} className=" md:text-[1rem] h-[100%] text-[#684f2a] md:tracking-wide  sm:text-[0.88rem]">
                {" "}
                Decades of seasoned expertise ensure flawless events.
              </p>
            </div>
          </div>

        
        </div>
      </motion.div>
    </div>
  );
}
