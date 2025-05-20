import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:"gpt",
  initialState:{
    isGptSearch : false,
    movieResults : null,
    moviesname :null
  },
  reducers:{
    toggleGptSearch : (state) =>{
      state.isGptSearch = !state.isGptSearch
    },
    addGptMovies : (state,action )=>{
      const {moviesname , movieResults} = action.payload
      state.moviesname = moviesname
      state.movieResults = movieResults
    }
  }
})

export const {toggleGptSearch, addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;