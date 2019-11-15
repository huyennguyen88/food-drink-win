import * as types from "./../constants/ActionTypes"
var initialState = []
var myReducer = (state= initialState, action)=>{
    switch (action.type) {
        case types.GET_CART:
            state =JSON.parse(localStorage.getItem('cartItem'));
            state = [...action.ADD_CART]
            state = action.GET_CART
            return [...state]
        // case types.ADD_CART:
        //     state =JSON.parse(localStorage.getItem('cartItem'));
        //     state = [...action.ADD_CART]
        //     return [...state]
        default:
            return state
    }
}
export default myReducer;