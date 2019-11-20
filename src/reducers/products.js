import * as types from "./../constants/ActionTypes"
var initialState = [];
var findIndex = (id,arr)=>{
    let index = 0;
    arr.forEach((a,i)=>{
        if(id === a.id){
            index = i
            return;
        }
    })
    return index;
}
var myReducer = (state =initialState,action)=>{
    let index = 0;
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = [...action.products];
            return [...state];
        case types.PRODUCT_SHOW:
            state = action.product
            return state;
        case types.CREATE_PRODUCT:
            state.unshift(action.product)
            return [...state]
        case types.EDIT_PRODUCT:
            index = findIndex(action.product.id,state)
            state[index] = action.product
            return [...state]
        case types.DELETE_PRODUCT: 
            index = findIndex(action.id,state)
            state.splice(index,1)
            return [...state]
        default: return state; 
        case types.SHOW_FOOD:
            state = action.foods
            return [...state];
        case types.SHOW_DRINK:
            state = action.drinks
            return [...state];
        default: return state;
    }
}
export default myReducer