import Contact_Me_Button from "@/components/Buttons/Contact_Me_Button";
import Projects_data, { Projects } from "@/components/Projects_data";
import React from "react";
import { metadata } from "../layout";

metadata.title = "PROJECTS";
export default function page() {
  return (
    <div className="relative top-[-100px]  place-items-center">
      <div className="  flex flex-col justify-center items-center gap-2  h-screen ">
        <h1 className="text-white text-5xl font-bold -tracking-widest font-league-gothic ">
          MY PROJECTS
        </h1>
        <h1 className="text-white text-2xl font-normal tracking-widest font-league-spartan ">
          MADE WITH LOVE
        </h1>
      </div>
      <div className=" ">
        <Projects_data numProjectsToShow={Projects.length}/> 
       
      </div>
      <div className="bg-white flex justify-center items-center py-9">
         <Contact_Me_Button />
      </div>
      
    </div>
  );
}
