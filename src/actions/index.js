import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
export const fetchProductsRequest = (dispatch)=>{
    return (dispatch) => {
        return callApi('products','GET',null).then(res=>{
            dispatch(fetchProducts(res.data));
        }).catch(err=>{
            console.log(err)
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
export const categoriesRequest = ()=>{
    return (dispatch) => {
        return callApi('categories','GET',null).then(res=>{
            if(res) dispatch(categories(res.data));
        })
    }
}
export const categories = (categories)=>{
    return{
        type: types.FETCH_CATEGORY,
        categories
    }
}
export const productCreateRequest = (product) =>{
    return (dispatch) => {
        return callApi('products/','POST',{
            name: product.name,
            image: product.image,
            price: product.price,
            classify: product.classify,
            category_id: product.category_id,
            quantity: product.quantity,
            description: product.description,
        }).then(res=>{
            if(res) {
                dispatch(productCreate(res.data))
            }
        })
    }
}
export const productCreate = (product) =>{
    return{
        type: types.CREATE_PRODUCT,
        product
    }
}
export const productDeleteRequest = (id)=>{
    return (dispatch) =>{
        callApi("products/"+id,"DELETE",null).then(res=>{
            if (res) dispatch(productDelete(id))
        })
    }
}
export const productDelete = (id)=>{
    return{
        type: types.DELETE_PRODUCT,
        id
    }
}
export const productEditRequest = (product)=>{
    return (dispatch)=>{
        callApi('products/'+product.id,'PUT',{
            name: product.name,
            image: product.image,
            price: product.price,
            classify: product.classify,
            category_id: product.category_id,
            quantity: product.quantity,
            description: product.description,
        }).then(res=>{
            if(res) dispatch(productEdit(res.data))
        })
    }
}
export const productEdit = (product)=>{
    return{
        type: types.EDIT_PRODUCT,
        product
    }
}
export const getProduct = (product)=>{
    return{
        type: types.GET_PRODUCT,
        product
    }
}
export const productClear = ()=>{
    return{
        type: types.CLEAR_PRODUCT,
    }
}
export const productSearch = (keyword)=> {
    return{
        type: types.SEARCH_PRODUCT,
        keyword
    }
}
export const productSort = (sort)=>{
    return{
        type: types.SORT_PRODUCT,
        sort
    }
}
//user 
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
        return callApi("users/"+token,"GET",{
            authentication_token: token
        }).then(res=>{
            if(res) dispatch(profile(res.data));
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
export const UPCart = (token,id,q) =>{
    return (dispatch) =>{
        return callApi("carts/" + token +"/update","POST",{
            Item_id:id,
            quantity:q
        }).then(res =>{
            if(res)dispatch(UPcart(res.data))
        })
    }
}
export const UPcart = (cart) =>{
    return{
        type: types.UP_CART,
        cart
    }
}
export const getCartReq = (id) =>{
    return (dispatch) =>{
        return callApi("carts/" + id +"/getCart","GET",null).then(res =>{
            if(res)dispatch(getCart(res.data))
        })
    }
}
export const getCart = (cart) =>{
    return{
        type: types.GET_CART,
        cart
    }
}
export const deleteItemReq = (token,id) =>{
    return (dispatch) =>{
        return callApi("carts/" + token +"/delete","POST",{Item_id:id}).then(res => {
            if(res)dispatch(DelItemfromCart(res.data))
        })
    }
}
export const DelItemfromCart = (cart) =>{
    return{
        type: types.DELETE,
        cart
    }
}
export const addToCart = (id,item) =>{
    return (dispatch) =>{
        return callApi("carts/" + id + "/addProduct","POST",{
            product_id:item.id,
            quantity:item.quantity
        })
    }
}
export const addCart = (cart) =>{
    return{
        type:types.ADD_CART,
        cart
    }
}
export const updateProfileRequest = (user) =>{
    console.log(user)
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
export const toggleForm = () =>{
    return{
        type: types.TOOGLE_FORM
    }
}
export const openForm = () =>{
    return{
        type: types.OPEN_FORM
    }
}
export const closeForm = () =>{
    return{
        type: types.CLOSE_FORM
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
<<<<<<< HEAD
=======
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
export const fetchUser = (id)=>{
    return (dispatch)=>{
        return callApi('users/mini/'+id,'GET',null).then((res)=>{
            console.log("alo",res.data)
            dispatch(getUser(res.data));
        })
    }
}
export const getUser =(user)=>{
    return{
        type : types.GET_USER,
        user
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
>>>>>>> 6f19fb93bc3ba3eb412d9dab5bf80fb9ec8779de
}