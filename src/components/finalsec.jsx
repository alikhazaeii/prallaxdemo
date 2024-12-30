import React, { useRef, useEffect } from "react";

export default function Finalsec() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      // بررسی اینکه آیا کاربر داخل این سکشن است
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        e.preventDefault(); // جلوگیری از اسکرول عمودی
        const scrollSpeed = 5; // ضریب سرعت اسکرول
        section.scrollLeft += e.deltaY * scrollSpeed; // تغییر اسکرول به افقی با سرعت بیشتر
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
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
      className="w-full h-fit flex gap-5 py-20 overflow-x-hidden scroll-smooth"
      style={{
        height: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          loop
          autoPlay
          muted
        />
      ))}
    </section>
  );
}
