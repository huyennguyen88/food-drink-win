import * as types from "./../constants/ActionTypes"
var initialState = []

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            state = action.user;
            return state;
        case types.GET_REVIEW_USERS:
            state = action.users;
            return [...state];
        default: return state;
    }
}
export default myReducer