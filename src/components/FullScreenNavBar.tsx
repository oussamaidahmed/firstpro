"use client";
import Link from "next/link";
import { useState } from "react";


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
      <div className="  flex flex-row justify-around place-items-center h-screen">
        <div className="flex flex-row justify-around place-items-center">
           <h1 className="rotate-[-90deg]  text-2xl font-medium font-league-spartan flex ">MENU</h1>
           <div className="flex flex-col justify-center items-start space-y-7">
          <Link
            className="text-6xl font-bold hover:text-red-500 font-league-spartan  "
            href="/"
            onClick={() => setOpen(!open)}
          >
            Home
          </Link>
          <Link
            className="text-6xl font-bold hover:text-red-500 font-league-spartan "
            href="/About"
            onClick={() => setOpen(!open)}
          >
            About
          </Link>
          <Link
           className="text-6xl font-bold hover:text-red-500 font-league-spartan "
            href="/Contact_Me"
            onClick={() => setOpen(!open)}
          >
            ContactMe
          </Link>
          <Link
            className="text-6xl font-bold hover:text-red-500 font-league-spartan "
            href="/Projects"
            onClick={() => setOpen(!open)}
          >
            Projects
          </Link>
        </div>
        </div>
       
       

        <div className="space-y-2 pl-4   text-xl font-medium font-league-spartan ">
          <p>idhmedo@gmail.com</p>
          <p>+2126 77 77 77 77</p>
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
          className="group z-50 relative w-8 h-6  cursor-pointer flex-col justify-between items-end flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
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
