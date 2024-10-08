"use client";
import Link from "next/link";
import { useState } from "react";
import { PiInstagramLogoLight, PiTwitterLogo } from "react-icons/pi";

function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-full  bg-white transform ${
        open ? "-translate-y-0  " : "-translate-y-full "
      } transition-transform  duration-700 ease-in-out filter `}
    >
      <div className="fixed top-0 left-0 h-screen w-full  bg-white flex justify-center items-center lg:justify-around   lg:flex-row md:flex-row sm:flex-col flex-col  md:space-x-[160px] space-y-28 space-x-16  ">


        <div className="flex flex-row justify-around place-items-center">
          <h1 className="rotate-[-90deg]  text-2xl font-medium  flex  ">
            MENU
          </h1>
          <div className="flex flex-col justify-center items-start space-y-5 ">
            <Link
              className="text-6xl font-black hover:text-red-500 "
              href="/"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              className="text-6xl font-black hover:text-red-500  "
              href="/About_Me"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
            <Link
              className="text-6xl font-black hover:text-red-500   "
              href="/Contact_Me"
              onClick={() => setOpen(!open)}
            >
              Contact Me
            </Link>
            <Link
              className="text-6xl font-black hover:text-red-500 "
              href="/My_Projects"
              onClick={() => setOpen(!open)}
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="space-y-2  right-12 relative  text-xl font-medium font-league-spartan ">
          <p>idhmedo@gmail.com</p>
          <p>+2126 77 77 77 77</p>
          <div className="flex space-x-3">
            <PiInstagramLogoLight  size={30} />
            <PiTwitterLogo  size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-11/12 flex justify-end items-center">
        <div
          className="group z-50 relative w-8 h-6  cursor-pointer flex-col justify-between items-end flex "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-1 w-[2.6rem] bg-black  cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : " bg-white"
            }`}
          />
          <span
            className={`h-1 w-[1.8rem]   cursor-pointer transition-all duration-600 ease-in-out ${
              open ? "w-[0] " : "w-full bg-white"
            }`}
          />
          <span
            className={`h-1 w-[1.2rem] bg-black  cursor-pointer transform transition duration-300 ease-in-out ${
              open ? " w-[2.6rem] -rotate-45 -translate-y-2.5" : "bg-white "
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
