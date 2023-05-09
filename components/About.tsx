"use client";
import React from "react";
import { motion } from "framer-motion";

import fetchPageInfo from "../utils/fetchPageInfo";
import urlFor from "../utils/urlFor";

type Props = {};

export default function About({}: Props) {


  const { data, error } = fetchPageInfo()
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div></div>

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(data?.profilePic).url()}
        className="-mb-5 md:mt-20 flex-shrink-0 w-[120px] h-[120px] rounded-full 
        object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[300px] xl:h-[400px] mt-20 xl:ml-20"
      />
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#4db9ad]/70">little</span>{" "}
          background
        </h4>
        <p className="text-[14px] md:text-base xl:text-base xl:mr-32">
          {data.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
