import * as types from "./../constants/ActionTypes"
var initialState = ''
var myReducer = (state =initialState,action)=>{
    let index = 0;
    switch(action.type){
        case types.SEARCH:
            state = action.keyword
            // console.log(state)
            return state;
        default: return state; 
    }
}
export default myReducer