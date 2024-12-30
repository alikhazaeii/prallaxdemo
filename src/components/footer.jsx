import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] py-10 px-5 relative z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center md:justify-start gap-8 mb-6 md:mb-0">
          <a
            href="https://www.linkedin.com/in/ali-khazaei021/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alikhazaeii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-600 transition duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ali_khazaei_developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition duration-300 text-2xl"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="mailto:ali.tradding021@gmail.com"
            className="text-gray-300 hover:text-red-500 transition duration-300 text-2xl"
          >
            <IoMailOutline />
          </a>
        </div>

        <div className="text-center md:text-right text-gray-400 text-sm md:text-lg font-medium">
          <p>Designed and Coded by Ali Khazaei © {new Date().getFullYear()}</p>
          
        </div>

        <div className="mt-6 md:mt-0">
          <div className="w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gray-500">
            <img
              src="/profit.jpg"
              alt="Profile"
              className="w-full h-full object-cover scale-125"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
