import React, { useState } from "react";
import TemporaryDrawer from "./SideBar";
import logo from "./assets/image/logo.png";
import { ImMenu } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="w-[100%] bg-[#03010170] bg-cover ">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", duration: 1.4, ease: "easeIn" },
        }}
        className="absolute flex min-w-[100%] font-Heebo text-white overflow-x-hidden inset-X-0 z-10  w-[100%] items-center text-inherit justify-between gap-2 px-8 py-2 pt-3 "
      >
        <div>
          {/* <img src={logo} alt="logo" width={100} className="max-md:w-[3rem]"/> */}
        </div>
        <div className="flex flex-2 items-center justify-center uppercase font-bold ">
          <div
          style={{fontFamily: "PhutureODC-Ultra"}}
            className={`flex gap-[1.5rem] p-4 font-110 font-normal max-lg:hidden max-[826px]:text-[1rem] text-xl h-[3rem] list-none`}
          >
            <Link to="/" className="tracking-[0.3rem]">
              HOME
            </Link>
            <Link to="/about" className="tracking-[0.3rem]">
              About us
            </Link>
            <Link to="/services" className="tracking-[0.3rem]">
              services
            </Link>
            <Link to="/why" className="tracking-[0.3rem]">
              why saaj
            </Link>

            <Link to="/gallary" className="tracking-[0.3rem]">
              Our Portfolio
            </Link>
            <Link to="/contact" className="tracking-[0.3rem]">
              Contact
            </Link>
            {/* <Link to="/blog" className="tracking-[0.3rem]">
              Blogs
            </Link> */}
          </div>

          <button
            className=" gap-[3rem] max-lg:block lg:hidden max-[945px]:block text-xl list-none "
            onClick={toggleDrawer("right", true)}
          >
            <ImMenu className="text-white text-[2rem]" />
          </button>
        </div>
      </motion.div>
      {/* <div className="md:hidden">{showMenu && menu}</div> */}
      <TemporaryDrawer
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
}
