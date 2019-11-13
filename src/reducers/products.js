import * as types from "./../constants/ActionTypes"
var initialState = [];
var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = [...action.products];
            return state;
        case types.PRODUCT_SHOW:
            state  = action.product
            return state;
        default: return state; 
    }
}
export default myReducer