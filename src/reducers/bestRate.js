import * as types from "./../constants/ActionTypes"
var initialState = [];
var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.BEST_RATING:
            state = action.products;
            return [...state];
        default: return state;
    }
}
export default myReducer