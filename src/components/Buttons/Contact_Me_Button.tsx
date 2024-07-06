"use client";
import Link from "next/link";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function Contact_Me_Button() {
  return (
    <div className="bg-white flex justify-center items-center ">
       <Link href="/Contact_Me"  >
      <button
        type="button"
        role="button"
        aria-label="Contact Me"
        title="Contact Me"
        className=" bg-[#D9D9D9] hover:bg-[#adadad] text-black font-bold lg:w-[230px] md:w-[230px] sm:w-[280px] w-[280px] h-14 flex flex-row justify-center items-center gap-1"
      >
        <TbArrowNarrowRight size={30} />
        Contact Me
      </button>
    </Link>
    </div>
   
  );
}
