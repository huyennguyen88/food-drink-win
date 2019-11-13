import * as types from "./../constants/ActionTypes"
var initialState = [];

var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.LOG_IN:
            state = action.user;
            localStorage.setItem('token',JSON.stringify(state.authentication_token))
            return state;
        case types.INFO:
            state = action.user;
            return state;
        default: return state; 
    }
}
export default myReducer