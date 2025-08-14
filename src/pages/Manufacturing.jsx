import React, { useRef } from "react";
import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";
import v6 from "../assets/v6.mp4";

const videos = [
  { src: v1, hasAudio: false },
  { src: v2, hasAudio: false },
  { src: v3, hasAudio: false },
  { src: v4, hasAudio: false },
  { src: v5, hasAudio: false },
  { src: v6, hasAudio: false },
];

export default function Manufacturing() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-12 pb-6 bg-white text-gray-800 font-sans">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-blue-800">Manufacturing Videos</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Watch our detailed manufacturing process videos, showcasing precision and quality.
        </p>
      </div>

      {/* Responsive grid: 1 col mobile, 2 col sm+, 3 col lg+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <VideoCard src={videos[0].src} hasAudio={videos[0].hasAudio} />
          <VideoCard src={videos[3].src} hasAudio={videos[3].hasAudio} />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <VideoCard src={videos[1].src} hasAudio={videos[1].hasAudio} />
          <VideoCard src={videos[4].src} hasAudio={videos[4].hasAudio} />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <VideoCard src={videos[2].src} hasAudio={videos[2].hasAudio} />
          <VideoCard src={videos[5].src} hasAudio={videos[5].hasAudio} />
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, hasAudio }) {
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
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
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        className="w-full h-auto rounded-xl object-cover"
        controls={false}
        muted={!hasAudio}
      />
    </div>
  );
}
