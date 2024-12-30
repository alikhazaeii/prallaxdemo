import React, { useRef, useEffect } from "react";

export default function Finalsec() {
  const sectionRef = useRef(null);
  const videosRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const videos = videosRef.current;

      if (!section || !videos) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

    
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        const deltaY = scrollY - sectionTop; 
        videos.scrollLeft = deltaY * 2; 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const videos = [
    "https://media.oakley.com/2024/Olympics/VideoCarousel/DeGrasse.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Fahnbulleh.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Hilinski.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Crabb.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Colapinto.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Toledo.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Igarashi.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Marks.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Johnson.mp4",
    "https://media.oakley.com/2024/Olympics/VideoCarousel/Purrier.mp4",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full h-[2200px] relative py-20"
    >
      <div
        ref={videosRef}
        className="flex gap-5 overflow-x-hidden sticky top-0  w-full py-20"
      >
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            loop
            autoPlay
            muted
            className="h-full"
          />
        ))}
      </div>
    </section>
  );
}
