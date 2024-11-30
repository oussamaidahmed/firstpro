"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();

    console.log(data);
  };

  return (
    <div className=" lg:w-[80%] md:w-[100%] w-full h-full bg-white  p-20 flex flex-col gap-10 ">
      <h1 className="text-black font-bold text-3xl tracking-tight flex self-start ">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  flex flex-col w-full
        justify-center "
      >
        <div className="flex  sm:flex-col lg:flex-row md:flex-row flex-col  justify-between lg:space-x-16 md:space-x-16 ">
          <div className="flex flex-col pb-5 md:w-1/2 lg:w-1/2 sm:w-full w-full">
            {/* Name Input Field */}
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              {...register("name", { required: "name is required" })}
              type="text"
              placeholder="Your Name"
              className="border-b-2 border-black  focus:outline-none "
              
            />
            {errors.name && (
              <p className="text-red-500">{`${errors.name.message}`}</p>
            )}
          </div>
          {/* Email Input Field */}
          <div className="flex flex-col md:w-1/2 lg:w-1/2 sm:w-full w-full">
            <label htmlFor="Email" className="font-medium  ">
              Email
            </label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="email@example.com"
              className="border-b-2 border-black focus:outline-none  "
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
          </div>
        </div>

        {/* Message Input Field */}
        <label htmlFor="name" className="font-medium pt-5">
          Message
        </label>
        <input
          {...register("Message", { required: "Message is required" })}
          type="text"
          placeholder="Hello, my name is . . ."
          className="border-b-2 border-black w-fill p-1 focus:outline-none"
        />
        {errors.Message && (
          <p className="text-red-500">{`${errors.Message.message}`}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative mt-16 bg-[#D9D9D9] hover:bg-[#adadad] text-black font-bold lg:w-[350px] md:w-[320px] sm:w-[300px] w-full h-14 justify-center items-center flex self-center p-2"
        >
          {isSubmitting ? (
            <CgSpinner
              className="animate-spin bg-center text-black "
              size={25}
            />
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
