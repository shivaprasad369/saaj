import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { motion } from "framer-motion";
export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white  ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=""
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 tracking-wider" justify="center">
        <NavbarItem>
          <h1
            className="text-[35px] tracking-wider uppercase text-[#b39033] "
            style={{ fontFamily: "Baskerville Old Face" }}
          >
            Saaj Weddings
          </h1>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <motion.button whileHover={{scale:1.05,transition:{duration:0.3,type:'tween',ease:'easeIn'}}} className="border-[0px] px-[1.5rem] py-2 rounded-sm bg-[#ebb654] text-white  ">
            <Link
             to={'/contact'}>
            Connect
             </Link>
          </motion.button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="md:w-[50%] items-center bg-white">
        <NavbarMenuItem>
          <Link className="w-full uppercase" to="/" size="lg">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full uppercase" to="/about" size="lg">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full uppercase" to="/services" size="lg">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full uppercase" to="/contact" size="lg">
            contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full uppercase" to="/gallary" size="lg">
            our Portfolio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full uppercase" to="/why" size="lg">
            why Saaj?
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-4">
          <p
          style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
           className="text-center tracking-wide">
            Saaj Weddings stands as a testament to the belief that every
            celebration deserves to be extraordinary. Nestled in the heart of
            the vibrant city of Jaipur, Rajasthan.
          </p>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-4">
        <motion.button whileHover={{scale:1.05,transition:{duration:0.3,type:'tween',ease:'easeIn'}}} className="border-[0px] px-[1.5rem] py-2 rounded-sm bg-[#ebb654] text-black uppercase font-semibold ">
            <Link
             to={'/contact'}>
            Connect
             </Link>
          </motion.button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
