import * as types from "./../constants/ActionTypes"
var initialState = []

var myReducer = (state = initialState, action) => {
    var index =0;
    switch (action.type) {
        case types.GET_USER:
            state = action.user;
            return state;
        case types.FETCH_USERS:
            state = action.users;
            return [...state];
        case types.DELETE_USER:
            index = state.findIndex((u)=>{
                return u.authentication_token === action.token;
            })
            state.splice(index,1);
            return [...state]
        case types.EDIT_USER:
            index = state.findIndex((u)=>{
                return u.id === action.user.id
            })
            state[index] = action.user
            return [...state]
        case types.GET_REVIEW_USERS:
            state = action.users;
            return [...state];
        case types.WHO:
            state.push(action.user)
            return [...state]
        default: return state;
    }
}
export default myReducer