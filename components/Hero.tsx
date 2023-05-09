"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircle from "./BackgroundCircle";
import fetchPageInfo from "../utils/fetchPageInfo";
import urlFor from "../utils/urlFor"


type Props = {};


export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, the name's Edson Furtado", "Developer, Designer, Creator"],
    loop: true,
    delaySpeed: 2000,
  });

  
  const { data, error } = fetchPageInfo()
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div></div>
  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-0">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src={urlFor(data?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {data.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#4db9ad" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>

          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>

          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>

          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
