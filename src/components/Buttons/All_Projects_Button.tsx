"use client";
import Link from "next/link";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function Contact_Me_Button() {
  return (
    <div className="bg-white flex justify-center items-center py-9">
    <Link href="/Projects">
      <button
        type="button"
        role="button"
        aria-label="All Projects"
        title="Contact Me"
        className=" bg-[#D9D9D9] hover:bg-[#adadad] text-black font-bold lg:w-[230px] md:w-[230px] sm:w-[280px] w-[280px] h-16 flex flex-row justify-center items-center gap-1"
      >
        <TbArrowNarrowRight size={30} />
        All Projects
      </button>
    </Link>
    </div>
  );
}
