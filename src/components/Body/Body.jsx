
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import VideoListSection from "../VideoListSection/VideoListSection";


const Body = () => {
 useNowPlayingMovies();
 usePopularMovies();
  return (
    <div>
      <Header />
      <HeroSection/>
      <VideoListSection/>
    </div>
  );
};

export default Body;
