import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/rpLogoWhite.png";

export default function Footer() {
  return (
    <div className="relative  text-white flex   w-full h-[150px]   sm:flex-col  lg:flex-row md:flex-row flex-col  sm:justify-around lg:justify-around md:justify-around justify-around items-center ">
      <div className=" flex space-x-10 ">
        <Link href="/My_Projects" className="hover:text-red-700">
          <p>Projects</p>
        </Link>
        <Link href="/Contact_Me" className="hover:text-red-700">
          <p>Contact</p>
        </Link>
        <Link href="/About_Me" className="hover:text-red-700">
          <p>About</p>
        </Link> 
      </div>
      <div className="flex sm:flex-row-reverse lg:flex-row md:flex-row flex-row-reverse gap-5 ">
        <div className="space-y-1   ">
          <p>idhmedo@gmail.com</p>
          <p>+2126 77 77 77 77</p>
        </div>
        <div>
          <Image src={logo} alt="Vercel Logo" width={60} height={60} />
        </div>
      </div>
    </div>
  );
}
