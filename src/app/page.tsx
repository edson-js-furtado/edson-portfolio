"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import {Suspense} from "react"

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";

import fetchPageInfo from "../../utils/fetchPageInfo";
import urlFor from "../../utils/urlFor";

// type Props = {
//   pageInfo: PageInfo;
//   experiences: Experience[];
//   socials: Social[];
//   skills: Skill[];
//   projects: Project[];
// };

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { data, error } = fetchPageInfo();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div></div>;

  return (
    <ThemeProvider attribute="class">
      <main>
        <div
          className="h-screen snap-y snap-mandatory overflow-y-scroll 
        overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4db9ad]/70 "
        >
          <Head>
            <title>Edson's Portfolio</title>
          </Head>

          <Header />

          <section id="hero" className="snap-start">
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>

          <section id="experience" className="snap-center">
            <WorkExperience />
          </section>

          <section id="skills" className="snap-start">
            <Skills />
          </section>

          <section id="projects" className="snap-start">
            <Projects />
          </section>

          <section id="contact" className="snap-start">
            <ContactMe />
          </section>

          <a href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer ">
              <div className="flex flex-col items-center justify-center  ">
                <img
                  className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer"
                  src={urlFor(data.heroImage).url()}
                  alt=""
                />
                <h4 className="text-[10px]">
                  © Created By{" "}
                  <span className="text-[#4db9ad]">
                    {data.name}{" "}
                  </span>
                  • v1.0
                </h4>
              </div>
            </footer>
          </a>
        </div>
      </main>
    </ThemeProvider>
  );
}

// export async function getStaticProps() {
//   const pageInfo: PageInfo = await fetchPageInfo();

//   return {
//     props: {
//       pageInfo,
//     },
//     revalidate: 0
//   };
// }

export default Home;
