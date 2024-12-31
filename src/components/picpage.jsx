import React, { useState, useEffect } from 'react';

export default function Picpage() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [divOpacity, setDivOpacity] = useState(0); 
  const [FigOpacity, setFigOpacity] = useState(1); 

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 60;
    const y = ((clientY - top) / height - 0.5) * 60;

    setOffset({ x, y });
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setScrollY(currentScroll);

    if (currentScroll >= 300) {
      setDivOpacity(1);
    } else {
      setDivOpacity(0);
    }

    if (currentScroll >= 1350) {
      setFigOpacity(0);
    } else {
      setFigOpacity(1);
    }
  };

  useEffect(() => {
    const initialScroll = window.scrollY;
    setScrollY(initialScroll);

    if (initialScroll >= 300) {
      setDivOpacity(1);
    } else {
      setDivOpacity(0);
    }

    if (initialScroll >= 1350) {
      setFigOpacity(0);
    } else {
      setFigOpacity(1);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <figure
      className="w-full h-screen flex items-center justify-center fixed overflow-hidden transition-opacity duration-300"
      onMouseMove={handleMouseMove}
      style={{
        opacity: FigOpacity,
      }}
    >
      <div
        className="text-lg md:text-6xl flex flex-wrap justify-center text-yellow-400 absolute top-10 capitalize transition-opacity"
        style={{
          opacity: 1 - scrollY / 300,
        }}
      >
        <img src="https://media.oakley.com/2024/Olympics/Logo.svg" alt="" />
        <h2 className="w-full text-center">winning is an inside the job</h2>
      </div>

      <img
        className="absolute z-30 transition-all w-[40vw] ml-32"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${1 - scrollY / 1000})`,
          opacity: 1 - scrollY / 300,
        }}
        src="https://media.oakley.com/2024/Olympics/Hero_radio_new_M.png"
        alt=""
      />
      <img
        className="absolute z-20 transition-transform w-[100vw]"
        style={{
          transform: `translate(${offset.x * 2}px, ${offset.y * 2}px) scale(${1 + scrollY / 1000})`,
        }}
        src="https://media.oakley.com/2024/Olympics/Hero_athlete_new2_D.png"
        alt=""
      />
      <div
        className="relative z-40 w-6/12 flex flex-wrap justify-center transition-opacity duration-500"
        style={{
          opacity: divOpacity,
        }}
      >
        <h2 className="w-full text-white text-center text-sm md:text-2xl capitalize">
          Inspired by the human nervous system that guides everything we do, think, and feel, the Inner Spark Collection boasts revamped frames ready to help you win from within.
        </h2>
        <button className="uppercase my-10 text-white border py-2 px-5 rounded-xl">
          Shop inner spark
        </button>
      </div>
    </figure>
  );
}
