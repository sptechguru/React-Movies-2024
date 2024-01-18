import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiMovieKey } from "../../../../components/Axios_ApiHandler/Movies_Key";
import { Api_axio_Movies } from "../../../../components/Axios_ApiHandler/Api_axio";


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
        const response = await Api_axio_Movies.
            get(`https://www.omdbapi.com/?apiKey=${apiMovieKey}&s=${term}&type=movie`);
        // console.log(response.data.Search);
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        const response = await Api_axio_Movies.
            get(`https://www.omdbapi.com/?apiKey=${apiMovieKey}&s=${term}&type=series`);
        // console.log(response);
        return response.data;
    }
);


export const fetchAsyncMoviesOrShowDetails = createAsyncThunk(
    "movies/fetchAsyncMoviesOrShowDetails",
    async (id) => {
        const response = await Api_axio_Movies.
            get(`https://www.omdbapi.com/?apiKey=${apiMovieKey}&i=${id}&Ploat=full`);
        // console.log('Movies Details by Id', response);
        return response.data;
    }
);

const intialState = {
    movies: {},
    shows: {},
    moviesOrShowsDetails: {}
}

const movieSlice = createSlice({
    name: "movies",
    intialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },

    extraReducers: {

        [fetchAsyncMovies.pending]: () => {
            // console.log("pending");
        },

        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            // console.log("Fetched Succefully");
            return { ...state, movies: payload };
        },

        [fetchAsyncMovies.pending]: () => {
            // console.log("Rejected");
        },

        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            // console.log("Fetched Shows Succefully");
            return { ...state, shows: payload };
        },

        [fetchAsyncMoviesOrShowDetails.fulfilled]: (state, { payload }) => {
            // console.log("Fetched shows & Movies Succefully");
            return { ...state, moviesOrShowsDetails: payload };
        },

    }

})

//  export all Slice

export const { addMovies } = movieSlice.actions;
export const geAllMovies = (state) => state.movies.movies;
export const geAllShows = (state) => state.movies.shows;
export const geAllShowsAndMovies = (state) => state.movies.moviesOrShowsDetails;
export default movieSlice.reducer;

