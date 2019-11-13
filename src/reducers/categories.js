import * as types from "../constants/ActionTypes";
var initialState = []
var myReducer = (state= initialState, action)=>{
    switch (action.type) {
        case types.ALL_CATEGORIES:
            state = action.categories
            return [...state]
        default:
            return state
    }
}
export default myReducer;