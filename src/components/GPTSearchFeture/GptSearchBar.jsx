import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import useGptSearchMovies from "../../hooks/useGptSearchMovie";
// import useGemini from "../../hooks/useGptSearchMovie";
import axios from "axios";
import lang from "../../utils/languageConstants";
import { API_OPTIONS } from "../../utils/constant";
import { addGptMovies } from "../../store/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch()


  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
 

  const handleSearchBtnClick = async () => {
    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.  Make sure you have not give any addition text just Movies name only and only ";

    const response = await axios.post("http://localhost:8000/api/gemini", {
      prompt,
    });

    console.log(response.data);
    const movies = response.data?.result
    const movieList = movies.split(",")
    const promiseArray = movieList.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovies({moviesname : movieList,movieResults:tmdbResults}))
    
  };


  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="mt-[10%] text-center opacity-90">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="bg-black  w-1/2 h-12 rounded-2xl border-white  mx-auto font-bold text-lg px-5 text-white placeholder-white"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleSearchBtnClick}
          className="bg-red-500 cursor-pointer hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4  rounded-md shadow-md mx-5 transition duration-300 ease-in-out"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
