import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  projectName: string;
  projectLink: string;
  projectImage: StaticImageData;
  projectDescription: string;
}

// Component fo and indiviual project
const Project = ({
  projectName,
  projectLink,
  projectImage,
  projectDescription,
}: Props) => {
  return (
    <div className="relative flex lg:h-[380px] md:h-[320px] sm:h-[360px] h-[280px] w-[100%] items-center justify-center shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#caf0f8] to-[#0077b6]">
      <Image
        className="rounded-xl group-hover:opacity-10 ransition-all duration-500 ease-out"
        layout="fill"
        src={projectImage}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
        <h2 className="text-white pb-4 md:text-2xl">{projectName}</h2>
        <p className="text-white pb-6 bold md:text-xl text-base">
          {projectDescription}
        </p>

        <button>
          <a
            className=" tracking-wider"
            href={projectLink}
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
