import * as types from "../constants/ActionTypes"
var initState = []
var myReducer = (state=initState, action)=>{
    switch (action.type) {
        case types.HISCART:
            state = action.cartHistory
            return state    
        default:
            return state;
    }
}
export default myReducer