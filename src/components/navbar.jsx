import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full h-[50px] px-20 bg-black py-8 flex justify-end items-center fixed z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-90" : "opacity-0"
      }`}
    >
      <figure className="absolute left-[50%] -translate-x-[50%] h-32 w-32 top-2">
        <img
          src="https://media.oakley.com/2024/Olympics/Logo.svg"
          alt="Logo"
        />
      </figure>

      <div
        className={`menu w-2/12 cursor-pointer text-white text-3xl flex justify-end transition-all duration-300 relative z-[100] ${
          isMenuOpen ? "transform rotate-90" : ""
        }`}
        onClick={toggleMenu} 
      >
        {!isMenuOpen ? <IoMenu /> : <IoCloseSharp />} 
      </div>
      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-[#1a1a1a] flex justify-center items-center  "
          style={{ opacity: isMenuOpen ? 1 : 0 }}
        >
          <div className=" w-screen h-screen flex  items-center justify-evenly ">
            <figure className="w-3/12 shadow-2xl p-5 brightness-75 hover:brightness-150 duration-300 shadow-white rounded-lg *:p-5">
              <img src="https://media.oakley.com/2024/Olympics/3Dmodule/sphaera_.png" alt="" />
              <figcaption className="w-full text-center">
                <h3 className="uppercase text-yellow-500 text-lg md:text-2xl">new</h3>
                <p className="capitalize text-white p-2 text-xs md:text-xl">Sphaera™</p>
              </figcaption>
            </figure>
            <figure className="w-3/12 shadow-2xl p-5 brightness-75 hover:brightness-150 duration-300 shadow-white rounded-lg *:p-5">
              <img src="https://media.oakley.com/2024/Olympics/3Dmodule/latch_.png" alt="" />
              <figcaption className="w-full text-center">
                <h3 className="uppercase text-yellow-500 text-lg md:text-2xl">new</h3>
                <p className="capitalize text-white p-2 text-xs md:text-xl">Latch™Panel</p>
              </figcaption>
            </figure>
            <figure className="w-3/12 shadow-2xl p-5 brightness-75 hover:brightness-150 duration-300 shadow-white rounded-lg *:p-5">
              <img src="https://media.oakley.com/2024/Olympics/3Dmodule/bisphaera_.png" alt="" />
              <figcaption className="w-full text-center">
                <h3 className="uppercase text-yellow-500 text-lg md:text-2xl">new</h3>
                <p className="capitalize text-white p-2 text-xs md:text-xl">BiSphaera™</p>
              </figcaption>
            </figure>
          </div>
          <button className="text-white md:text-xl absolute bottom-10 border py-2 px-5 rounded-2xl uppercase font-bold">shop inner spark</button>
        </div>
      )}
    </nav>
  );
}
