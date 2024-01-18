import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './Movies_Slicing';

export const store = configureStore({
reducer: {
    movies: moviesReducer,
},
})

