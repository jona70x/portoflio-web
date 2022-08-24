import React from "react";
import Image from "next/image";

import profilePicture from "../public/assets/profile.jpeg";

const AboutMe = () => {
  return (
    <section className="p-4 flex items-center md:h-screen py-16 w-full bg-[#0077b6]">
      <div className="max-w-[1440px] md:grid m-auto grid-cols-3 gap-2">
        <div className="col-span-2 text-white p-2">
          <h1 className="uppercase mb-10">Who am i?</h1>

          <h2 className="py-2">Jonathan Carpio</h2>
          <p className="py-2"></p>
          <p className="py-2">
            I graduated in 2017 and earned an Associate&apos;s Degreein Foreing
            trade. After my graduation, I worked as a Sales Executive for a
            international insurance company, where I sharpened my negotation
            skills, and had the oportunity to work in various countries in
            LATAM.
          </p>
          <p className="py-2">
            Since arriving to the US, my work experience has been mostly in
            retail and food distribution, such as warehouse work and product
            merchandising in the food industry. In January 2022, I resigned from
            my previous position with and have been learning how to code in
            JavaScript.
          </p>
          <p className="py-2">
            I consider myself someone curious and eager to learn new skills. I
            have been learning to code mostly by myself and recently completed a
            self-paced Full Stack JavaScript course by{" "}
            <strong className="border-b ">
              <a href="https://teamtreehouse.com/" target="blank">
                Team Treehouse
              </a>
            </strong>
            , where I gained the fundamentals to work with HTML, CSS,
            JavaScript, Express, React, and SQL. I am also comfortable working
            with third-party libraries and frameworks.
          </p>
          <p className="py-2">
            Solving problems and creating solutions with the power of technology
            is what motivates me to continue learning, and affirms that this is
            the career that I always wanted to persued.
          </p>
        </div>
        <div className="max-w-[350px] bg-white h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={profilePicture} alt="Profile picture"></Image>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
