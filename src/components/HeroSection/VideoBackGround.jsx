import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
// import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackGround = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.TrailerVideo);

  useMovieTrailer(movieId)
  
  return (
    <div>
      <iframe
        width="1024"
        height="730"
        src={
          "https://www.youtube.com/embed/husMGbXEIho?si=" + trailerVideo?.key
        }
        title="YouTube video player"
        allow=" autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
