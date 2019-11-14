import * as types from "./../constants/ActionTypes"
var initialState = [];

var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.LOG_IN:
            state = action.user;
            localStorage.setItem('token',JSON.stringify(state.authentication_token))
            return state;
        case types.LOG_OUT:
            localStorage.removeItem('token');
            state = action.user;
            return state
        case types.INFO:
            state = action.user;
            return state;
        case types.SIGN_UP:
            state = action.newUser;
            console.log(state)
            return state
        default: return state; 
    }
}
export default myReducer