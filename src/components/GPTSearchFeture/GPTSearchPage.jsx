import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../../utils/constant";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-40 bg-black opacity-30">
        <img
          src={BACKGROUND_IMAGE}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearchPage;
