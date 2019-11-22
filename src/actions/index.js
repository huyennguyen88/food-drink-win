
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
        }).catch(err=>{
            console.log(err)
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
export const logOut = () => {
    return{
        type: types.LOG_OUT,
        user: null,
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
export const signUpRequest  = (newUser) =>{
    return (dispatch) => {
        return callApi("users","POST",{
            name: newUser.userName,
            email: newUser.email,
            phone: newUser.phone,
            password: newUser.password,
            password_confirmation: newUser.passwordConfirm,
        }).then(res=>{
            if(res){
                dispatch(signUp(res.data));
            }
        })
    }
}
export const signUp  = (newUser) =>{
    return{
        type: types.SIGN_UP,
        newUser
    }
}
export const updateProfileRequest = (user) =>{
    return (dispatch) =>{
        return callApi("users/update", "PUT",{
            name: user.userName,
            email: user.email,
            phone: user.phone,
            password: user.password,
        }).then(res=>{
            if(res){
                dispatch(updateProfile(res.data))
            }
        })
    }
}
export const updateProfile = (user) =>{
    return{
        type: types.UPDATE_PROFILE,
        user
    }
}
export const fetchCategoriesRequest =(dispatch)=>{
    return (dispatch) =>{
        return callApi('categories','GET',null).then(res=>{
       
            dispatch(showCategories(res.data))
        })
    }
}
export const showCategories =(categories)=>{
    return {
        type: types.ALL_CATEGORIES,
        categories
    }
}
export const fetchReviews =(product_id)=>{
    return (dispatch)=>{
        return callApi('products/'+product_id+'/reviews','GET',null).then((res)=>{
            dispatch(loadReviews(res.data));
        })
    }
}
export const loadReviews =(reviews)=>{
    return{
        type: types.LOAD_REVIEWS,
        reviews
    }
}
export const fetchReviewUsers = (product_id)=>{
    return (dispatch)=>{
        return callApi('products/'+product_id+'/commentedUsers','GET',null).then((res)=>{
            dispatch(getReviewUsers(res.data));
        })
    }
}
export const getReviewUsers =(users)=>{
    return{
        type : types.GET_REVIEW_USERS,
        users
    }
}
export const createReviewRequest =(user_id,product_id,rate,comment)=>{
    return (dispatch)=>{
        return callApi('reviews','POST',{
            user_id,
            product_id,
            rate,
            comment
        }).then(res=> { dispatch(createReview(res.data)) })
    }
}
export const createReview=(review)=>{
    return{
        type: types.CREATE_REVIEW,
        review
    }
}
export const getReviewRequest =(review_id)=>{
    return(dispatch)=>{
        return callApi('reviews/'+review_id,'GET',null)
        .then(res => dispatch(getReview(res.data)))
    }
}
export const getReview =(review)=>{
    return {
        type: types.GET_REVIEW,
        review
    }
}
export const updateReviewRequest=(review_id,user_id,product_id,rate,comment)=>{
    return(dispatch)=>{
        console.log("goi update request")
        return callApi('reviews/'+review_id,'PUT',{
            user_id,
            product_id,
            rate,
            comment
        }).then(res =>dispatch(updateReview(res.data)))
    }
}
export const updateReview =(review)=>{
    return{
        type: types.UPDATE_REVIEW,
        review
    }
}
export const clearReviewNow =()=>{
    return{
        type: types.CLEAR_REVIEW_NOW
    }
}
export const deleteReviewRequest =(review_id)=>{
    return (dispatch)=>{
        return callApi('reviews/'+review_id,'DELETE',null)
        .then(res => dispatch(deleteReview(res.data)))
    }
}
export const deleteReview =(review)=>{
    return {
        type: types.DELETE_REVIEW,
        review
    }
}