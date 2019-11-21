import * as types from "./../constants/ActionTypes"
var initialState = {};
var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.GET_USER_EDIT:
            state = action.user
            return state
        case types.CLEAR_USER:
            state = null;
            return state;
        default: return state
    }
}
export default myReducer