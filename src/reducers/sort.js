import * as types from "./../constants/ActionTypes"
var initialState = {
    name: 'name',
    value: '1'
}
var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.SORT:
            state = action.sort
            return state;
        default: return state; 
    }
}
export default myReducer