// MovieCard.js
import React from "react";
import { COVER_IMG_CDN } from "../../utils/constant";

const MovieCard = ({ backdrop_path }) => {
  if (!backdrop_path) return null;

  return (
    <div className="min-w-[200px] transition-transform hover:scale-105 duration-300">
      <img
        className="rounded-lg shadow-md"
        src={COVER_IMG_CDN + backdrop_path}
        alt="Movie card"
      />
    </div>
  );
};

export default MovieCard;
