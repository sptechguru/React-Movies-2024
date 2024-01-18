import { MoviesTypes } from "../constants/action_type"

export const addMoviesData = (prodcuts) =>{
    return {
        type:MoviesTypes.GET_MOVIES,
        payload:prodcuts
    }
}



export const MoviesDetails = (prodcuts) =>{
    return {
        type:MoviesTypes.MOVIES_DETAILS,
        payload:prodcuts
    }
}



export const similarMovies = (prodcuts) =>{
    return {
        type:MoviesTypes.SIMILAR_MOVIES,
        payload:prodcuts
    }
}



export const searchMovies = (prodcuts) =>{
    return {
        type:MoviesTypes.searchMovies,
        payload:prodcuts
    }
}
