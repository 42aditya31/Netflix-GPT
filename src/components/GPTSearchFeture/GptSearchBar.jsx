import React, { useRef } from "react";
import { useSelector } from "react-redux";
import useGptSearchMovies from "../../hooks/useGptSearchMovie";
import lang from "../../utils/languageConstants";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const searchMovies = useGptSearchMovies();

  const handleSearchBtnClick = () => {
    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = searchMovies(prompt);
    console.log(result);
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
