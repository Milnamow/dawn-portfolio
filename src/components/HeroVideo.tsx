"use client";

import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play once on load
    video.play().catch((err) => {
      console.log("Autoplay prevented:", err);
    });

    // Ensure it doesn't loop initially
    video.loop = false;

    // When video ends, pause it and keep it on the LAST frame
    const handleEnded = () => {
      video.pause();
      // Do NOT reset currentTime → stays on final frame
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.play();           // Start looping when hovered
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.loop = false;
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-900 shadow-2xl transition-transform group-hover:scale-105"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Optional subtle inner glow ring */}
        <div className="absolute inset-0 rounded-full border-4 border-white/30 dark:border-white/10 pointer-events-none" />
      </div>
    </div>
  );
}