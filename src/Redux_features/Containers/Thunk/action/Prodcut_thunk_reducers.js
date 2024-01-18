import { ActionTypes } from "../../constants/action_type";

 const intailState= {
    prdcuts:[],
 };

export const fetchProdcutReducer = (state = intailState, {type, payload}) => {
    switch(type){
        case ActionTypes.FETCH_PRODCUTS:
            return {...state, products:payload};     
        default:
            return state;
    }
 };