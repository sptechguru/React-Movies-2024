import { Api_axio } from "../../../../components/Axios_ApiHandler/Api_axio"
import { ENDPOINTS } from "../../../../components/EndPoints_constants";
import { ActionTypes } from "../../constants/action_type"

//  Now using Thunk this is used in asunchronnous call

export const fetchProdcutsData = async (dispatch) =>{
const response = await Api_axio.get(ENDPOINTS.PRODCUTS);
// console.log("thunk Data", response.data.products);
dispatch({type:ActionTypes.FETCH_PRODCUTS, payload: response.data.products})
}                                      