import * as types from "./../constants/ActionTypes"
var initialState = []
var myReducer = (state= initialState, action)=>{
    switch (action.type) {
        case types.CHECKOUT:
            state = []
            // console.log(state)
            return [...state]
        case types.GET_CART:
            state = action.cart
            // console.log(state)
            return [...state]
        case types.DELETE:
            state = action.cart
            // console.log(state)
            return [...state]

        case types.UP_CART:
            state = action.cart
            return [...state]
        default:
            return [...state]
    }
}
export default myReducer;