import About_me from "@/components/About_me";
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
      <div className=" flex flex-col justify-center bg-white w-full py-12 items-center ">
        <About_me />
      </div>
    </div>
  );
}
