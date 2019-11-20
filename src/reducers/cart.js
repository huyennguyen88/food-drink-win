import * as types from "./../constants/ActionTypes"
var initialState = []
var myReducer = (state= initialState, action)=>{
    switch (action.type) {
        case types.GET_CART:
            state = action.GET_CART
            console.log(state)
            return state
        case types.ADD_CART:
            return null
        default:
            return state
    }
}
export default myReducer;