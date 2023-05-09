import React from "react";
import { motion } from "framer-motion";
import fetchSkill from "../utils/fetchSkills";
import urlFor from "../utils/urlFor";

type Props = {};

const Skills = (props: Props) => {
  const { data, error } = fetchSkill();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div></div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skills for currency profieciency
      </h3>

      <div className="grid grid-cols-5 gap-5 pt-20 xl:pt-20">
        {data.map((skill) => (
          <div className="group relative flex cursor-pointer ">
            <motion.img
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={urlFor(skill.image).url()}
              className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 
              xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition 
              duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full "
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">
                  {skill.progress}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
