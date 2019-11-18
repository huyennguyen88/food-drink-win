import * as types from "../constants/ActionTypes"
var initState = []
var myReducer = (state=initState, action)=>{
    switch (action.type) {
        case types.FETCH_CATEGORY:
            state = action.categories
            return state    
        default:
            return state;
    }
}
export default myReducer