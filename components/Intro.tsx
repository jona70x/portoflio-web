import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

//

const Intro = () => {
  return (
    <div className="w-full h-[100vh] text-center clip-polygon bg-[#eee] z-10">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div>
          <h1 className="mb-20">
            Hello, I am{" "}
            {
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b4d8] to-[#03045e]">
                Jonathan
              </span>
            }
          </h1>
          <h2 className="my-8">A Junior Full Stack Web Developer</h2>
          <p className="m-auto w-[80%] md:w-[70%] lg:w-[50%] p-3 ">
            I am a self-taught Full Stack Web Developer who loves to create
            functional and stunning digital experiences. I am focused on getting
            my first job as a Web Developer to be able to showcase my current
            abilities and grow as a team member of your company.{" "}
          </p>
          <div className="mt-4 pt-7">
            <p className="uppercase tracking-widest text-[#00b4d8] mb-4">
              Get in contact with me:
            </p>
            <div className="flex items-center my-10 justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jonathancarpioarellano/"
              >
                <div className="rounded-full shadow-lg shadow-gray-500 mx-8 p-6 cursor-pointer hover:scale-105 ease-in-out duration-500">
                  <FaLinkedinIn size={20} />{" "}
                </div>
              </a>
              <a
                href="https://github.com/jona70x"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-500 mx-8  p-6 cursor-pointer hover:scale-105 ease-in-out duration-500">
                  <FaGithub size={20} />
                </div>
              </a>
              <a
                href="https://twitter.com/jona70xc"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-500 mx-8  p-6 cursor-pointer hover:scale-105 ease-in-out duration-500">
                  <FaTwitter size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
