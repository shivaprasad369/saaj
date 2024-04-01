import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

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
          <Button as={Link} color="primary" href="/contact" variant="flat">
            <Link
             to={'/contact'}>

            Connect
             </Link>
          </Button>
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
          <p className="text-center">
            Saaj Weddings stands as a testament to the belief that every
            celebration deserves to be extraordinary. Nestled in the heart of
            the vibrant city of Jaipur, Rajasthan.
          </p>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-4">
          <button type="button" className="bg-pink-400 py-3 px-5 text-white">
            <Link
              className="w-full uppercase text-white"
              to="/contact"
              size="lg"
            >
              connect
            </Link>
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
