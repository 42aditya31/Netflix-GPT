import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
// import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackGround = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.TrailerVideo);

  useMovieTrailer(movieId)
  
  return (
    <div >
      <iframe
      className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/husMGbXEIho?si=" + trailerVideo?.key + "?&autoplay=1&mute=1"
        }
        
        allow=" autoplay"
        
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
