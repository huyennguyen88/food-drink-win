import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
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
export const logInRequest = (email,password) =>{
    return (dispatch)=>{
        return callApi("users/sign_in","POST",{
            email: email,
            password: password
        }).then(res=>{
            dispatch(logIn(res.data));
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const logIn = (user) => {
    return{
        type: types.LOG_IN,
        user
    }
}
export const profileRequest = (token)=>{
    return (dispatch) =>{
        return callApi("/users/"+token,"GET",{
            authentication_token: token
        }).then(res=>{
            dispatch(profile(res.data));
        })
    }
}
export const profile = (user)=>{
    return{
        type: types.INFO,
        user
    }
}
export const signUpRequest  = (user) =>{
    return (dispatch) => {
        return callApi("users","POST",{
            name: user.userName,
            email: user.email,
            phone: user.phone,
            password: user.password,
            password_confirmation: user.passwordConfirm,
        }).then(res=>{
            if(res){
                dispatch(signUp(res.data));
            }
        })
    }
}
export const signUp  = (user) =>{
    return{
        type: types.SIGN_UP,
        user
    }
}