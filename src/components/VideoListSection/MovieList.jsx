// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-white mb-4 px-6">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 px-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} backdrop_path={movie.backdrop_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
