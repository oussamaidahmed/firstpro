import About_me from "@/components/About_me";
import My_skills from "@/components/My_skills";
import React from "react";

export default function page() {
  return (
    <div className="relative top-[-100px] ">
      <div className=" flex flex-col justify-center items-center gap-2  h-screen ">
        <h1 className="text-white text-5xl font-bold -tracking-widest font-league-gothic ">
          OUSSAMA ID AHMED
        </h1>
        <h1 className="text-white text-2xl font-normal tracking-widest font-league-spartan ">
          WEB-DESIGNER
        </h1>
      </div>
      <div  className="flex flex-col bg-white justify-center sm:items-center  py-12 space-y-12 px-10 ">
        <About_me />
        <My_skills />
      </div>
     
    </div>
  );
}
