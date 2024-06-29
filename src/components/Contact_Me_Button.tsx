"use client";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function Contact_Me_Button() {
  return (
    <div>
      <button
        type="button"
        role="button"
        aria-label="Contact Me"
        onClick={() => window.open("/Contact_Me")}
        title="Contact Me"
        className="bg-red-600 hover:bg-gray-200 text-black font-bold py-4 px-16 "
      >
        <TbArrowNarrowRight size={30} />
        Contact Me
      </button>
    </div>
  );
}
