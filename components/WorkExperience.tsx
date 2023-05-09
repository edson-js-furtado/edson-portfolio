import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import fetchExperience from "../utils/fetchExperience";
import urlFor from "../utils/urlFor";

import { useTheme } from "next-themes";
import { Slide } from "react-slideshow-image";

type Props = {};

const WorkExperience = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const { data, error } = fetchExperience();

  const containerRef = useRef(null);
  const scrollSpeed = 1; // Adjust this value to change scroll speed


  if (error) return <div>Failed to load</div>;
  if (!data) return <div></div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        ref={containerRef}
        className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory mt-20
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4db9ad]/70"
      >
        {data?.map((experience) => (
            <article
              key={experience._id}
              className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0
            w-[400px] md:w-[400px] xl:w-[500px] snap-center dark:bg-[#292929] bg-gray-100 p-4 hover:opacity-100 
            opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden mb-5"
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
                src={urlFor(experience.companyImage).url()}
                alt=""
              />

              <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
                <p className="font-bold text-xl mt-1 ">{experience.company}</p>
                <div className="flex space-x-2 my-2">
                  {experience.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className="h-7 w-7 rounded-full"
                      src={urlFor(technology.image).url()}
                      alt=""
                    />
                  ))}
                </div>
                <p className="uppercase py-5">
                  {new Date(experience.dateStarted).toDateString()} -{" "}
                  {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateStarted).toDateString()}
                </p>
                <ul className="list-disc space-y-2 ml-3 text-sm">
                  {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
