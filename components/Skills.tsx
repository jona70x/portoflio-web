import React from "react";
import Image from "next/image";

// Importing Skill component
import Skill from "./Skill";

// Importing icons
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import node from "../public/assets/skills/node.png";
import sequelize from "../public/assets/skills/sequelize.png";
import github from "../public/assets/skills/github1.png";
import tailwind from "../public/assets/skills/tailwind.png";
import nextjs from "../public/assets/skills/nextjs.png";
import typescript from "../public/assets/skills/typescript.png";
import mongo from "../public/assets/skills/mongo.png";
import redux from "../public/assets/skills/redux.png";
import sass from "../public/assets/skills/sass.png";
import sanity from "../public/assets/skills/sanity.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 ">
      <div className="max-w-[1240px] mx-auto w-[90%] flex flex-col justify-center h-full">
        <h1 className="py-6 text-[#0077b6]">Skills</h1>
        <h2 className="py-2 mb-10">Main Technologies</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm lg:gap-8 lg:text-xl">
          <Skill src={html} description="HTML" />

          <Skill src={css} description="CSS" />

          <Skill src={javascript} description="JavaScript" />

          <Skill src={typescript} description="TypeScript" />

          <Skill src={react} description="React" />

          <Skill src={nextjs} description="NextJs" />

          <Skill src={node} description="NodeJs" />

          <Skill src={tailwind} description="Tailwind" />

          <Skill src={sequelize} description="Sequelize" />

          <Skill src={github} description="Github" />

          <Skill src={sass} description="Sass" />

          <Skill src={sanity} description="Sanity" />
        </div>
        <h2 className="my-10">Interested in</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm lg:gap-8 lg:text-xl mb-10">
          <div className="p-4 rounded-xl shadow-sm shadow-[#03045e] hover:scale-105 ease-in-out duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={mongo}
                  alt="css icon"
                  width="50px"
                  height="50px"
                ></Image>
              </div>
              <p className="text-[1.5rem]">MongoDB</p>
            </div>
          </div>
          <div className="p-4 rounded-xl shadow-sm shadow-[#03045e] hover:scale-105 ease-in-out duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={redux}
                  alt="css icon"
                  width="50px"
                  height="50px"
                ></Image>
              </div>
              <p className="text-[1.5rem]">Redux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
