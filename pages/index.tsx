import type { NextPage } from "next";
import Head from "next/head";

import Intro from "../components/Intro";

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
    </>
  );
};

export default Home;
