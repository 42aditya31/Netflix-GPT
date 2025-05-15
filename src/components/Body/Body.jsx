
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";


const Body = () => {
 useNowPlayingMovies();
  return (
    <div>
      <Header />
      <HeroSection/>
    </div>
  );
};

export default Body;
