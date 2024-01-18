import { MoviesTypes } from "../constants/action_type";

const intailState= {
    movies:[],
 };

 
 export const moviesReducer = (state = intailState, {type, payload}) => {
    switch(type){
        case MoviesTypes.GET_MOVIES:
            return {...state, movies:payload};     
        default:
            return state;
    }
 };


 
 export const moviesDetailsReducer = (state = intailState, {type, payload}) => {
    switch(type){
        case MoviesTypes.MOVIES_DETAILS:
            return {...state, movies:payload};     
        default:
            return state;
    }
 };


 export const searchMoviesReducer = (state = intailState, {type, payload}) => {
    switch(type){
        case MoviesTypes.SEARCH_RESULTS:
            return {...state, movies:payload};     
        default:
            return state;
    }
 };


 export const similarMoviesReducer = (state = intailState, {type, payload}) => {
    switch(type){
        case MoviesTypes.SIMILAR_MOVIES:
            return {...state, movies:payload};     
        default:
            return state;
    }
 };