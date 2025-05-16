import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const HeroSection = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies)
  if (movies === null) return;
  const mainMovie = movies[17];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div >
      
      <VideoTitle title={original_title} overview={overview} />

      <VideoBackGround movieId={id}/>
    </div>
  );
};

export default HeroSection;
