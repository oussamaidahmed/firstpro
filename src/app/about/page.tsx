import React from "react";
import { metadata } from "../layout";
import Background from "@/components/AboutMeAndMore/Background";
import Contact_Me_Button from "@/components/Buttons/Contact_Me_Button";


metadata.title = "About";

export default function page() {
  return (
    <div className="relative  place-items-center ">
      <div className="  flex flex-col justify-center items-center gap-2 h-screen ">
        <h1 className="text-white text-5xl font-black -tracking-widest  ">
          ABOUT ME
        </h1>
        <h1 className="text-white text-xl font-normal tracking-widest font-league-spartan  ">
          IT’S A-ME, MARIO !
        </h1>
      </div>
      <div className="flex flex-col bg-white justify-center sm:items-center  py-12 space-y-12 px-10 ">
        <Background />
      </div>
      <div>
        <Contact_Me_Button  />
      </div>
    </div>
  );
}
