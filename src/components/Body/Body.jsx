
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import VideoListSection from "../VideoListSection/VideoListSection";


const Body = () => {
 useNowPlayingMovies();
  return (
    <div>
      <Header />
      <HeroSection/>
      <VideoListSection/>
    </div>
  );
};

export default Body;
