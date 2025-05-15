
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../Header/Header";


const Body = () => {
 useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Body;
