import * as types from "./../constants/ActionTypes"
var initialState = []
var myReducer = (state= initialState, action)=>{
    switch (action.type) {
        case types.AD_CART:
            state = action.adcart
            return state
        case types.CONFIRM:
            state = action.adcart
            return state
        case types.DECLINE:
            state = action.adcart
            return state
        default:
            return state
    }
}
export default myReducer;