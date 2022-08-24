import type { NextPage } from "next";
import Head from "next/head";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

// Importing other components

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Jonathan Carpio Portfolio</title>
        </Head>
      </div>
      <Intro />
      <AboutMe />
      <Skills />
    </>
  );
};

export default Home;
