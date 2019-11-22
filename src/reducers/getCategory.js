import * as types from "../constants/ActionTypes"
var initialState = {};
var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.GET_CATEGORY:
            state = action.category
            return state
        case types.CLEAR_CATEGORY:
            state = null
            return state
        default: return state; 
    }
}
export default myReducer