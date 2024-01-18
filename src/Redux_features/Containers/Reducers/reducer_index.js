import { combineReducers } from "redux";
import { prodcutReducer,selectedProdcutReducer } from "./prodcutReducers";
import { moviesReducer } from "./MoviesReducer";

 const reducersRoot =  combineReducers({
    allProdcuts:prodcutReducer,
    selectedProdcut:selectedProdcutReducer,
    moviesReducer:moviesReducer
});

export default reducersRoot;