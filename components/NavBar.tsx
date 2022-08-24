import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

import NavLogo from "../public/assets/css.png";

const NavBar = () => {
  // Setting nav bar responsive state
  const [responsiveNav, setResponsiveNav] = useState<boolean>(false);

  // Handler to open bar/close bar
  const handleNavBar = (): void => {
    setResponsiveNav(!responsiveNav);
  };

  return (
    <div className="w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={NavLogo} alt="nav logo" width="50" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">about</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNavBar}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Responsive segment */}

      <div
        className={
          responsiveNav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 "
            : ""
        }
      >
        <div
          className={
            responsiveNav
              ? "fixed left-0 top-0 w-[75%] h-full overflow-auto sm:w-[60%] md:w-[45%] bg-[#f5f3f4] p-10 ease-in duration-500"
              : "fixed left-[-200%] top-0 p-10"
          }
        >
          {/* Top section */}
          <div>
            <div className="flex items-center justify-between w-full">
              <Image src={NavLogo} alt="nav logo" width="50" height="50" />
              <div
                onClick={handleNavBar}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer "
              >
                <AiOutlineClose size={15} />
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
                <li className="py-4 text-md hover:text-[#00b4d8]">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-md hover:text-[#00b4d8]">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-md hover:text-[#00b4d8]">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-md hover:text-[#00b4d8]">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-md hover:text-[#00b4d8]">Contact</li>
              </Link>
            </ul>

            {/* Social Media Links */}
            <div className="mt-4 pt-7">
              <p className="uppercase tracking-widest text-[#00b4d8] border-b">
                social media links
              </p>
              <div className="flex items-center justify-between my-8 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-500  p-3 cursor-pointer hover:scale-105 ease-in-out duration-500">
                  <FaLinkedinIn size={20} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500  p-3 cursor-pointer hover:scale-105 ease-in-out duration-500">
                  <FaGithub size={20} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500  p-3 cursor-pointer hover:scale-105 ease-in-out duration-500">
                  <FaTwitter size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
