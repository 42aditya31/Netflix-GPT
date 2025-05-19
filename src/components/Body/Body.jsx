
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpComingMovies from "../../hooks/useUpComingMovies";
import GPTSearchPage from "../GPTSearchFeture/GPTSearchPage";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import VideoListSection from "../VideoListSection/VideoListSection";
import useRandom from "../../hooks/useRandom";


const Body = () => {
  const isGptSearch = useSelector((store) => store.gpt.isGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useRandom();
  return (
    <div>
      <Header />
      {isGptSearch ? <GPTSearchPage /> : <><HeroSection/>  <VideoListSection/></>}


    </div>
  );
};

export default Body;
