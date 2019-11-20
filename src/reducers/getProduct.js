import * as types from "../constants/ActionTypes"
var initialState = {};
var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
            state = action.product
            return state
        case types.CLEAR_PRODUCT:
            state = null
            return state
        default: return state; 
    }
}
export default myReducer