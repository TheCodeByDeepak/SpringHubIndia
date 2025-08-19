import React, { useRef, useEffect } from "react";
import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";
import v6 from "../assets/v6.mp4";
import headerBg from "../assets/b2.jpg";
// Left side images
import leftImg1 from "../assets/h7.png";
import leftImg2 from "../assets/h2.png";
import leftImg3 from "../assets/h8.png";

// Right side images
import rightImg1 from "../assets/h4.png";
import rightImg2 from "../assets/h10.png";
import rightImg3 from "../assets/h9.png";


const videos = [
  { src: v1, hasAudio: false },
  { src: v2, hasAudio: false },
  { src: v3, hasAudio: false },
  { src: v4, hasAudio: false },
  { src: v5, hasAudio: false },
  { src: v6, hasAudio: false },
];

export default function Manufacturing() {
  // Keep refs for all videos
  const videoRefs = useRef([]);

  // Auto-play the very first video (v1) when component mounts
  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  // Function to pause all other videos when one is played
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
  };

  return (
        <section className="min-h-screen w-full bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">
  {/* Manufacturing Videos Section */}
<div className="relative bg-blue-900 text-white mb-10 -mt-2 -ml-2 -mr-2 overflow-hidden -mt-6 -ml-6 -mr-6">
  {/* ✅ Mobile Background */}
  <img
    src={headerBg}
    alt="Header Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40 md:hidden"
  />

  {/* ✅ Desktop Background Images in a zigzag line */}
  <div className="hidden md:flex absolute inset-0 items-center justify-center gap-6 opacity-80 pointer-events-none">
    <img src={leftImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-6" />
    <img src={leftImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-16" />
    <img src={rightImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-20" />
    <img src={rightImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-16" />
    <img src={leftImg3} alt="Decorative" className="w-40 h-40 object-contain -translate-y-20" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-2" />
  </div>

  {/* ✅ Desktop Heading (only visible on md and above) */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Manufacturing Videos
    </h1>
    <p className="text-lg mb-6 text-white max-w-2xl mx-auto">
      Watch our detailed manufacturing process videos, showcasing precision and quality.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-6">
    <h1 className="text-4xl font-bold mb-4 text-white">
      Manufacturing Videos
    </h1>
    <p className="text-lg mb-6 text-white max-w-2xl mx-auto">
      Watch our detailed manufacturing process videos, showcasing precision and quality.
    </p>
  </div>
</div>






      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ml-4 mr-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <VideoCard
            src={videos[0].src}
            hasAudio={videos[0].hasAudio}
            refCallback={(el) => (videoRefs.current[0] = el)}
            onPlay={() => handlePlay(0)}
          />
          <VideoCard
            src={videos[3].src}
            hasAudio={videos[3].hasAudio}
            refCallback={(el) => (videoRefs.current[3] = el)}
            onPlay={() => handlePlay(3)}
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <VideoCard
            src={videos[1].src}
            hasAudio={videos[1].hasAudio}
            refCallback={(el) => (videoRefs.current[1] = el)}
            onPlay={() => handlePlay(1)}
          />
          <VideoCard
            src={videos[4].src}
            hasAudio={videos[4].hasAudio}
            refCallback={(el) => (videoRefs.current[4] = el)}
            onPlay={() => handlePlay(4)}
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <VideoCard
            src={videos[2].src}
            hasAudio={videos[2].hasAudio}
            refCallback={(el) => (videoRefs.current[2] = el)}
            onPlay={() => handlePlay(2)}
          />
          <VideoCard
            src={videos[5].src}
            hasAudio={videos[5].hasAudio}
            refCallback={(el) => (videoRefs.current[5] = el)}
            onPlay={() => handlePlay(5)}
          />
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, hasAudio, refCallback, onPlay }) {
  // click to toggle play/pause since controls are hidden
  const handleToggle = (e) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      className="rounded-xl shadow-md border-4 border-orange-300 overflow-hidden cursor-pointer"
      style={{
        borderTopColor: "#FDBA74",
        borderLeftColor: "#FDBA74",
        borderBottomColor: "#93C5FD",
        borderRightColor: "#93C5FD",
      }}
    >
      <video
        ref={refCallback}
        src={src}
        preload="metadata"
        className="w-full h-auto rounded-xl object-cover"
        muted={!hasAudio}
        playsInline
        onPlay={onPlay}
        onClick={handleToggle}
        controls={false} 
      />
    </div>
  );
}
