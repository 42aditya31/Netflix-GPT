import React from "react";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  absolute">
      <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute top-0 left-0" />

      <div className="absolute top-[30%] px-12 text-white w-1/2">
        <h1
          className="text-6xl drop-shadow-lg mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
        >
          {title}
        </h1>
        <p
          className="text-lg drop-shadow-md mb-6"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}
        >
          {overview}
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 text-lg font-semibold rounded hover:bg-opacity-80 transition">
          ▷ Play
          </button>
          <button className="bg-gray-700 bg-opacity-80 text-white px-6 py-2 text-lg font-semibold rounded hover:bg-gray-600 transition">
          ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
