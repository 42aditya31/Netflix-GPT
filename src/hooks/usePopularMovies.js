import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies} from "../store/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const popularMovies = useSelector((store)=> store.movies.popularMovies)
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {

   !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
