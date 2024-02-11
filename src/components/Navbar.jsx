
import React, { useState } from "react";
import TemporaryDrawer from "./SideBar";
import logo from './assets/image/logo.png'
import { ImMenu } from "react-icons/im";
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
      <div className="flex relative overflow-hidden z-10 bg-[#07070735] w-[100%] items-center text-inherit justify-between gap-2 px-8 py-2 pt-3 ">
        <div>
          <img src={logo} alt="logo" width={100} className="max-md:w-[3rem]"/>
        </div>
        <div className="flex flex-2 items-center justify-center uppercase font-bold ">
          <div
            className={`flex gap-[3rem] max-[952px]:hidden max-[826px]:text-[1rem] md:text-xl list-none`}
          >
            <a href="#home">HOME</a>
            <a href="#about">About us.</a>
            <a href="#services">services</a>
            <a href="#gallary">Gallary</a>
            <a href="#client">why saaj</a>
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
