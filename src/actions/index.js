
import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
export const fetchProductsRequest = (dispatch)=>{
    return (dispatch) => {
        return callApi('products','GET',null).then(res=>{
            dispatch(fetchProducts(res.data));
        })
    }
}
export const fetchFoodsRequest = (dispatch)=>{
    return (dispatch) => {
        return callApi('products','GET',null).then(res=>{
            var products = res.data;
            var foods = products.filter((item)=>{
                return item.classify===true
            })
            dispatch(fetchFoods(foods));
        })
    }
}
export const fetchDrinksRequest = (dispatch)=>{
    return (dispatch) => {
        return callApi('products','GET',null).then(res=>{
            var products = res.data;
            var drinks = products.filter((item)=>{
                return item.classify===false
            })
            dispatch(fetchDrinks(drinks));
        })
    }
}
export const fetchProducts = (products)=>{
    return{
        type: types.FETCH_PRODUCTS,
        products
    }
}
export const fetchFoods = (foods)=>{
    return {
        type: types.SHOW_FOOD,
        foods
    }
}
export const fetchDrinks = (drinks)=>{
    return {
        type: types.SHOW_DRINK,
        drinks
    }
}
export const productShowRequest = (id)=>{
    return (dispatch) => {
        return callApi('products/'+id,'GET',null).then(res=>{
            dispatch(productShow(res.data));
        })
    }
}
export const productShow = (product)=>{
    return{
        type: types.PRODUCT_SHOW,
        product
    }
}
