import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const HeroSection = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[16];
  console.log(mainMovie);
  return (
    
    <div>
      <h1 className="text-pink-300 text-9xl font-bold">HeroSection</h1>
      <img src={mainMovie.poster_path} alt="" />
      <VideoTitle />

      <VideoBackGround />
    </div>
  );
};

export default HeroSection;
