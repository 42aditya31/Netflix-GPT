import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../store/movieSlice";

const VideoBackGround = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.TrailerVideo);
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1124620/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // basically here is the concept or one type of error handling like if there is not trailer found then it should be till work with the first video
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

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
