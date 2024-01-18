import { Api_axio_Movies } from "../../../../components/Axios_ApiHandler/Api_axio";
import { apiMovieKey } from "../../../../components/Axios_ApiHandler/Movies_Key";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
        const response = await Api_axio_Movies.
         get(`https://www.omdbapi.com/?apiKey=${apiMovieKey}&s=${term}&type=movie`);
      return response.data;
    }
  );
  
  export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      const response = await Api_axio_Movies.get(
        `https://www.omdbapi.com/?apiKey=${apiMovieKey}&s=${term}&type=series`
      );
      return response.data;
    }
  );
  
  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await Api_axio_Movies.get(`https://www.omdbapi.com/?apiKey=${apiMovieKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );
  
  const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
  };
  
  const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      removeSelectedMovieOrShow: (state) => {
        state.selectMovieOrShow = {};
      },
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        // console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        // console.log("Fetched Successfully!");
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        // console.log("Rejected!");
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        // console.log("Fetched Successfully!");
        return { ...state, shows: payload };
      },
      [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
        // console.log("Fetched Successfully!");
        return { ...state, selectMovieOrShow: payload };
      },
    },
  });
  
  export const { removeSelectedMovieOrShow } = movieSlice.actions;
  export const getAllMovies = (state) => state.movies.movies;
  export const getAllShows = (state) => state.movies.shows;
  export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
  export default movieSlice.reducer;