import { ActionTypes } from "../constants/action_type";

 const intailState= {
    prdcuts:[],
 };

 
 export const prodcutReducer = (state = intailState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODCUTS:
            return {...state, products:payload};     
        default:
            return state;
    }
 };


 export const selectedProdcutReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODECUTS:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODCUTS:
                return {};
        default:
            return state;
    }
 };


