import React, { useState } from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Glasses() {
  const images = [
    'https://media.oakley.com/2024/Olympics/3Dcarousel/sutro_lite.png',
    'https://media.oakley.com/2024/Olympics/3Dcarousel/encoder.png',
    'https://media.oakley.com/2024/Olympics/3Dcarousel/holbrook.png',
    'https://media.oakley.com/2024/Olympics/3Dcarousel/bisphaera.png',
    'https://media.oakley.com/2024/Olympics/3Dcarousel/sphaera.png',
    'https://media.oakley.com/2024/Olympics/3Dcarousel/latch.png',
    'https://media.oakley.com/2024/Olympics/3Dcarousel/resistor.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center bg-white py-20">
      <h2 className="text-center text-lg md:text-3xl uppercase font-bold py-5">
        find your inner spark
      </h2>
      <p className="text-center text-sm md:text-2xl capitalize text-gray-600">
        Discover the full collection, including a selection of frames available in a low-bridge fit.
      </p>
      <div className="relative w-full flex justify-center items-center overflow-hidden py-5">
        {/* دکمه چپ */}
        <button
          onClick={handlePrev}
          className="absolute left-2 z-10 bg-black text-white p-2 rounded-full"
        >
          <IoMdArrowRoundBack />

        </button>

        <div className="relative flex items-center w-full h-[300px] justify-center my-10">
          {images.map((image, index) => {
            const isActive = index === currentIndex; 
            const isLeft =
              index ===
              (currentIndex - 1 + images.length) % images.length; 
            const isRight =
              index === (currentIndex + 1) % images.length; 

            const display =
              isActive || isLeft || isRight ? 'block' : 'none'; 

            const translateX = isActive
              ? 0
              : isLeft
                ? -150
                : isRight
                  ? 150
                  : 0;

            const scale = isActive ? 2 : 0.5;
            const opacity = isActive ? 1 : 0.5; 
            const zIndex = isActive ? 10 : 5; 
            const animation = isActive ? 'bounce 1s infinite' : 'none';
            return (
              <img
                key={index}
                src={image}
                alt={`Glasses ${index + 1}`}
                className="absolute transition-all duration-500 ease-in-out w-[350px] h-[150px]"
                style={{
                  display,
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity,
                  zIndex,
                  animation,
                }}
              />
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 z-10 bg-black text-white p-2 rounded-full"
        >
          <IoMdArrowRoundForward />
        </button>
      </div>

      <div className="w-3/12 max-w-4xl h-2 mt-4 bg-gray-300 rounded-full relative my-5">
        <div
          className="h-full bg-black rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`,
          }}
        ></div>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
