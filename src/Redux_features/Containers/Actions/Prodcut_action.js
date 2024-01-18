import { ActionTypes } from "../constants/action_type"

export const setProdcutsData = (prodcuts) =>{
    return {
        type:ActionTypes.SET_PRODCUTS,
        payload:prodcuts
    }
}

export const selectedProdcutData = (prodcut) =>{
    return {
        type: ActionTypes.SELECTED_PRODECUTS,
        payload :prodcut
    }
}


export const removeProdcut = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODCUTS
    }
}



