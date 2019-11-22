import * as types from "./../constants/ActionTypes"
var initialState = [];
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_REVIEW:
            state = action.review;
            return state;
         case types.UPDATE_REVIEW:
             state = action.review
             return state
        case types.CLEAR_REVIEW_NOW:
             state = null
             return state
        default: 
        return state;
    }
}
export default myReducer