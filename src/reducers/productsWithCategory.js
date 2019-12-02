import * as types from "../constants/ActionTypes"
var initialState = [];
var myReducer = (state =initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCTS_WITH_CATEGORY:
            var allProducts = action.allProducts
            var list = allProducts.filter((item)=>{
                return item.category_id === action.category_id
            })
            state = list
            return [...state]
        default: 
        return state
    }
}
export default myReducer