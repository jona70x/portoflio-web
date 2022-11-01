import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
  src: StaticImageData;
  description: string;
}

const Skill = ({ src, description }: IProps) => {
  return (
    <div className="p-4 rounded-xl shadow-sm shadow-[#03045e] hover:scale-105 ease-in-out duration-500">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={src} alt="css icon" width="50px" height="50px"></Image>
        </div>
        <p className="text-[1.5rem]">{description}</p>
      </div>
    </div>
  );
};

export default Skill;
