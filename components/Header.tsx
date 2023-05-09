"use client";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import fetchSocial from "../utils/fetchSocial";

type Props = {
  // pageInfo: PageInfo;
};

export default function Header({}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const { data, error } = fetchSocial();

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div></div>

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icon */}
        {data?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <div className="flex flex-row items-center space-x-3">
        <a href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 mr-3">
              Get In Touch{" "}
            </p>
          </motion.div>
        </a>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className=""
        >
          {currentTheme === "dark" ? (
            <button
              className="bg-black-600 hover:bg-white rounded-md border-white border-1 p-1"
              onClick={() => setTheme("light")}
            >
              <SunIcon className="h-5 w-5 text-white hover:text-gray-700" />
            </button>
          ) : (
            <button
              className="bg-white rounded-md border-black border-1 p-1 hover:bg-gray-700"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon className="h-5 w-5 text-gray-700 hover:text-white" />
            </button>
          )}
          {/* <select className="nav-link">
            <option value="en">English</option>
            <option value="en">Portuguese</option>
            <option value="en">French</option>
          </select> */}
        </motion.div>
      </div>
    </header>
  );
}
