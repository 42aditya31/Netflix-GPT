import React from 'react'
import {useSelector} from 'react-redux'
import MovieList from "../VideoListSection/MovieList"

const GptMovieSuggestion = () => {

  const {movieResults,moviesname } = useSelector((store)=>store.gpt)

if (!moviesname) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {moviesname.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion
