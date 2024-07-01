import About_me from "@/components/AboutMeAndMore/About_me";
import All_Projects_Button from "@/components/Buttons/All_Projects_Button";
import Contact_Me_Button from "@/components/Buttons/Contact_Me_Button";
import My_skills from "@/components/My_skills";
import Projects_data from "@/components/Projects_data";
import React from "react";

export default function page() {
  return (
    <div >
      <div className=" flex flex-col justify-center items-center gap-2  h-screen ">
        <h1 className="text-white text-5xl font-black -tracking-widest ">
          OUSSAMA ID AHMED
        </h1>
        <h1 className="text-white text-xl font-normal tracking-widest ">
          WEB-DESIGNER
        </h1>
      </div>
      {/* About me / skills */}
      <div className="flex flex-col bg-white justify-center sm:items-center  py-12 space-y-12 px-10 ">
        <About_me />
        <My_skills />
      </div>
      {/* projects Preview */}
      <div>
        <Projects_data numProjectsToShow={3} />
      </div>
      {/* buttons */}
      <div>
        <div className=" flex bg-white justify-center items-center lg:gap-16 md:gap-16  sm:flex-col lg:flex-row md:flex-row flex-col">
          <Contact_Me_Button />
          <All_Projects_Button />
        </div>
      </div>
    </div>
  );
}
