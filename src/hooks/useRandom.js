// import { useDispatch } from "react-redux";
import { API_OPTIONS2 } from "../utils/constant";
// import { addPopularMovies} from "../store/movieSlice";
import { useEffect } from "react";

const useRandom = () => {
  // const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
    'https://instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com/hashtag_search_by_query?hashtag=fyp',
      API_OPTIONS2
    );
    const json = await data.json();
    console.log(json.results);
    // dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useRandom;
