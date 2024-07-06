import React from "react";
import { metadata } from "../layout";
import Form from "@/components/Form";

metadata.title = "Contact Me";

export default function page() {
  return (
    <div className="relative  place-items-center">
      <div className="  flex flex-col justify-center items-center gap-2  h-screen ">
        <h1 className="text-white text-5xl font-black -tracking-widest  ">
          CONTACT ME
        </h1>
        <h1 className="text-white text-xl font-normal tracking-widest  ">
          SAY HELLO TO ME
        </h1>
      </div>
      {/* Form */}
      <div className=" flex justify-center w-full bg-white items-center place-items-center ">
        <Form />
      </div>
    </div>
  );
}
