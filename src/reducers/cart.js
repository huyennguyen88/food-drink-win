import * as types from "./../constants/ActionTypes"
var initialState = []
var myReducer = (state= initialState, action)=>{
    switch (action.type) {
        case types.GET_CART:
            state = action.cart
            // console.log(state)
            return state
        case types.DELETE:
                // console.log(state)
            state = action.cart
            // console.log(state)
            return state
        case types.ADD_CART:
            // return null
        case types.UP_CART:
            state = action.cart
            return state
        default:
            return state
    }
}
export default myReducer;