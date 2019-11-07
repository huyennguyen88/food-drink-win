import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import axios from 'axios'
export const fetchProductsRequest = (dispatch)=>{
    return (dispatch) => {
        return callApi('products','GET',null).then(res=>{
            dispatch(fetchProducts(res.data));
        })
    }
}
export const fetchProducts = (products)=>{
    return{
        type: types.FETCH_PRODUCTS,
        products
    }
}
export const productShowRequest = (id)=>{
    return (dispatch) => {
        return callApi('products/'+id,'GET',null).then(res=>{
            // console.log(res.data);
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