import React, { useRef } from "react";
import { useSelector } from "react-redux";
// import useGptSearchMovies from "../../hooks/useGptSearchMovie";
// import useGemini from "../../hooks/useGptSearchMovie";
import axios from "axios";
import lang from "../../utils/languageConstants";

const GptSearchBar = () => {
  const searchText = useRef(null);


  

  const handleSearchBtnClick = async () => {
    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.  Make sure you have not give any addition text just Movies name only and only";

    const response = await axios.post("http://localhost:8000/api/gemini", {
      prompt,
    });

    console.log(response.data);
    const movies = response.data?.result
    console.log(typeof(movies))
    const movieList = movies.split(",")
    console.log(movieList)
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
