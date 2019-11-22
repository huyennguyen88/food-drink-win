import * as types from "../constants/ActionTypes";
var initialState = []
var myReducer = (state= initialState, action)=>{
    let index = null;
    switch (action.type) {
        case types.FETCH_CATEGORY:
            state = action.categories
            return state
        case types.ALL_CATEGORIES:
            state = action.categories
            return [...state]
        case types.FETCH_CATEGORY:
            state = action.categories
            return [...state]   
        case types.CREATE_CATEGORY:
            state.unshift(action.category)
            return [...state]
        case types.DELETE_CATEGORY:
            index = state.findIndex((c)=>{
                return c.id === action.id
            })
            state.splice(index,1);
            return [...state]
        case types.EDIT_CATEGORY:
            index = state.findIndex((c)=>{
                return c.id === action.category.id
            });
            state[index] = action.category;
            return [...state]
        default:
            return [...state]
    }
}
export default myReducer;
