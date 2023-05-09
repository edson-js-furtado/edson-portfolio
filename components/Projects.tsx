import React from "react";
import { motion } from "framer-motion";
import fetchProject from "../utils/fetchProjects";

import urlFor from "../utils/urlFor";
import Link from "next/link";

type Props = {};

export default function Projects({}: Props) {
  const { data, error } = fetchProject();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div></div>;

  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4db9ad]/70"
      >
        {data?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2
            items-center justify-center p-5 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
              className="xl:w-[450px] xl:h-[350px] md:w-72 md:h-44 w-56 h-36 mt-5"
            />
            <div>
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#4db9ad]/40">
                  Case {i + 1} of {data.length} |
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left mt-4">
                {project.summary}
              </p>
            </div>
            <a href={project.LinkToBuild} target="_blank">
              <button className="demonstrationButton mt-2">Demonstration</button>
            </a>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#4db9ad]/10 left-0 h-[270px] -skew-y-12" />
    </motion.div>
  );
}
