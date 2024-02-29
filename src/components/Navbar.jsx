
import React, { useState } from "react";
import TemporaryDrawer from "./SideBar";
import logo from './assets/image/logo.png'
import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
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
    <div className="w-[100%] ">
      <div className="absolute flex min-w-[100%] font-Heebo text-white overflow-x-hidden inset-X-0 z-10  w-[100%] items-center text-inherit justify-between gap-2 px-8 py-2 pt-3 ">
        <div>
          {/* <img src={logo} alt="logo" width={100} className="max-md:w-[3rem]"/> */}
        </div>
        <div className="flex flex-2 items-center justify-center uppercase font-bold ">
          <div
            className={`flex gap-[3rem] p-4 max-[952px]:hidden max-[826px]:text-[1rem] text-xl list-none`}
          >
            <Link to="/#home" className="tracking-widest">HOME</Link>
            <a href="/about" className="tracking-widest">About us.</a>
            <Link to="/services" className="tracking-widest">services</Link>
            <Link to="/contact" className="tracking-widest">Contact</Link>

            <a href="/#gallary" className="tracking-widest">Gallary</a>
            <Link to="/why" className="tracking-widest">why saaj</Link>
          </div>

          <button
            className=" gap-[3rem] max-[946px]:block min-[946px]:hidden text-xl list-none "
            onClick={ toggleDrawer("right", true)}
          >
            <ImMenu className="text-white text-[2rem]"/>
          </button>
        </div>
      </div>
      {/* <div className="md:hidden">{showMenu && menu}</div> */}
      <TemporaryDrawer
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
}
