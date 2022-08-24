import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

//

const Intro = () => {
  return (
    <div className="w-full h-[90vh] text-center">
      <div className="'max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="my-4">
            Hello, I am {<span className="text-[#0077b6]">Jonathan</span>}
          </h1>
          <h2 className="my-4">A Junior Full Stack Web Developer</h2>
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
            <div className="flex items-center justify-center">
              <div className=" mx-6 rounded-full shadow-lg shadow-gray-500  p-3 cursor-pointer hover:scale-105 ease-in-out duration-500">
                <FaLinkedinIn size={20} />
              </div>
              <div className="mx-6 rounded-full shadow-lg shadow-gray-500  p-3 cursor-pointer hover:scale-105 ease-in-out duration-500">
                <FaGithub size={20} />
              </div>
              <div className="mx-6 rounded-full shadow-lg shadow-gray-500  p-3 cursor-pointer hover:scale-105 ease-in-out duration-500">
                <FaTwitter size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
