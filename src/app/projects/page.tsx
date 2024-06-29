import Projects_data from "@/components/Projects_data";
import React from "react";

export default function page() {
  return (
    <div className="relative top-[-100px]">
      <div className="  flex flex-col justify-center items-center gap-2  h-screen ">
        <h1 className="text-white text-5xl font-bold -tracking-widest font-league-gothic ">
          MY PROJECTS
        </h1>
        <h1 className="text-white text-2xl font-normal tracking-widest font-league-spartan ">
          MADE WITH LOVE
        </h1>
      </div>
      <div className=" ">
        <Projects_data />
      </div>
    </div>
  );
}
