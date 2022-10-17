import React, { useState } from "react";

import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  // Setting nav bar responsive state
  const [responsiveNav, setResponsiveNav] = useState<boolean>(false);

  // Handler to close responsive nav bar when a button is clicked
  const closeHandler = (): void => {
    setResponsiveNav(!responsiveNav);
  };

  // Handler to open bar/close bar
  const handleNavBar = (): void => {
    setResponsiveNav(!responsiveNav);
  };

  return (
    <div className="sticky top-0 w-full h-[8rem] shadow-xl bg-[#f5f3f4] z-10">
      <div className="flex justify-between items-center w-full h-full 2xl:px-16">
        <h2 className="mx-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00b4d8] to-[#03045e]">
          Jonathan C
        </h2>
        <div className="mx-3">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="uppercase hover:border-b hover:border-[#0077b6] border-b border-transparent">
                home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10  uppercase hover:border-b hover:border-[#0077b6] border-b border-transparent">
                about
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10  uppercase hover:border-b hover:border-[#0077b6] border-b border-transparent">
                skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10  uppercase hover:border-b hover:border-[#0077b6] border-b border-transparent">
                projects
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNavBar}>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Responsive segment */}

      <div
        className={
          responsiveNav
            ? "md:hidden z-[100] fixed left-0 top-0 w-full h-screen bg-black/60 transition-all ease-in 500"
            : "z-[100]"
        }
      >
        <div
          className={
            responsiveNav
              ? "fixed left-0 top-0 w-[75%] h-full overflow-auto sm:w-[60%] md:w-[45%] bg-[#f5f3f4] p-10 ease-in duration-400 z-110"
              : "fixed left-[-200%] top-0 p-10"
          }
        >
          {/* Top section */}
          <div>
            <div className="flex items-center justify-between w-full">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b4d8] to-[#03045e]">
                Jonathan C
              </h2>
              <div
                onClick={handleNavBar}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-8">
              <p className="w-[85%] md:w-[90%] py-4 text-[#00b4d8] uppercase">
                Junior Full Stack Developer to your needs
              </p>
            </div>
          </div>
          {/* Link Section */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  className="py-8 text-md hover:text-[#00b4d8]"
                  onClick={closeHandler}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  className="py-8 text-md hover:text-[#00b4d8]"
                  onClick={closeHandler}
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  className="py-8 text-md hover:text-[#00b4d8]"
                  onClick={closeHandler}
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  className="py-8 text-md hover:text-[#00b4d8]"
                  onClick={closeHandler}
                >
                  Projects
                </li>
              </Link>
            </ul>

            {/* Social Media Links */}
            <div className="mt-8">
              <p className="uppercase tracking-widest text-[#00b4d8] border-b mb-8">
                social media links
              </p>
              <div className="flex items-center justify-between w-full m-auto py-4 sm:w-[80%]">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/jonathancarpioarellano/"
                >
                  <div className="rounded-full shadow-lg shadow-gray-500  p-5 cursor-pointer hover:scale-105 ease-in-out duration-500">
                    <FaLinkedinIn size={22} />{" "}
                  </div>
                </a>
                <a
                  href="https://github.com/jona70x"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-500  p-5 cursor-pointer hover:scale-105 ease-in-out duration-500">
                    <FaGithub size={22} />
                  </div>
                </a>
                <a
                  href="https://twitter.com/jona70xc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-500  p-5 cursor-pointer hover:scale-105 ease-in-out duration-500">
                    <FaTwitter size={22} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
