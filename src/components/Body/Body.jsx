import React, { useEffect } from "react";
import Header from "../Header/Header";
import { API_OPTIONS } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../../store/movieSlice";

const Body = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addnowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Body;
