import React, { useState } from "react";
import { motion } from "framer-motion";
import fetchExperience from "../utils/fetchExperience";

type Props = {};

const ExperienceCard = () => {

  const { data, error } = fetchExperience()

  if (error) return <div>Failed to load</div>;
  if (!data) return <div></div>;

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0
      w-[400px] md:w-[400px] xl:w-[500px] snap-center bg-[#292929] p-4 hover:opacity-100 
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mb-5"
    >
        <motion.img
          // key={data?._id}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          // src={urlFor(data?.companyImage).url()}
          alt=""
        />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Mobile Developer</h4>
        <p className="font-bold text-xl mt-1 ">Self Employed</p>
        <div className="flex space-x-2 my-2">
          {/* {data.technologies.map((technology)=> (
             <img
             key={technology._id}
             className="h-7 w-7 rounded-full"
             src={urlFor(technology.image).url()}
             alt=""
           />
          ))} */}
         
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Worked....Ended...
        </p>
        <ul className="list-disc space-y-2 ml-3 text-sm">
          <li>
            Summary ListSummary List Summary List Summary List Summary List
          </li>
          <li>
            Summary ListSummary List Summary List Summary List Summary List
          </li>
          <li>
            Summary ListSummary List Summary List Summary List Summary List
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
