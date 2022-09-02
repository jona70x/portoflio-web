import React from "react";
import Image from "next/image";

import forkifyImg from "../public/assets/project_images/forkify_0.png";

// Component fo and indiviual project
const Project = () => {
  return (
    <div className="relative flex items-center justify-center h-auto  shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#caf0f8] to-[#0077b6]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={forkifyImg}
        alt="forkify project"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
        <h2 className="text-white pb-4 ">Forkify</h2>
        <p className="text-white pb-10 bold text-xl">MVC - JavaScript</p>

        <button>
          <a
            className=" tracking-wider"
            href="https://forkify-jonathancarpio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Check Live
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
