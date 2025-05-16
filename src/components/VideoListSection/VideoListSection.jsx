// VideoListSection.js
import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const VideoListSection = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-transparent  text-white pb-10 relative z-30 -mt-52">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      {/* <MovieList title={"Rated Top"} movies={movies.nowPlayingMovies} />/ */}
    </div>
  );
};

export default VideoListSection;
 