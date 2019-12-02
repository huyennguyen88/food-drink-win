import * as types from '../constants/ActionTypes'
import callApi from '../utils/apiCaller'
export const fetchProductsRequest = ()=>{
    return (dispatch) => {
        return callApi('products','GET',null).then(res=>{
            dispatch(fetchProducts(res.data));
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const fetchProducts = (products)=>{
    return{
        type: types.FETCH_PRODUCTS,
        products
    }
}
export const fetchFoodsRequest = ()=>{
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
export const fetchDrinksRequest = ()=>{
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
            console.log(res.data)
            dispatch(productShow(res.data));
        }).catch(err=>{
        })                                                                                                                                                                                        
    }
}
export const productShow = (product)=>{
    return{
        type: types.PRODUCT_SHOW,
        product
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
export const Search = (keyword)=> {
    return{
        type: types.SEARCH,
        keyword
    }
}
export const Sort = (sort)=>{
    return{
        type: types.SORT,
        sort
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
export const fetchUsersRequest = ()=>{
    return (dispatch)=>{
       return callApi('users','GET',null).then(res=>{
            if(res) dispatch(fetchUsers(res.data)); 
        })
    }
}
export const fetchUsers = (users)=>{
    return{
        type: types.FETCH_USERS,
        users
    }
}
export const userDeleteRequest = (token)=>{
    return (dispatch)=>{
       return callApi('users/'+token,'DELETE',{
           authentication_token: token
       }).then(res=>{
            if(res) dispatch(userDelete(token)); 
        })
    }
}
export const userDelete = (token)=>{
    return{
        type: types.DELETE_USER,
        token
    }
}
export const userEditRequest = (user)=>{
    return (dispatch)=>{
       return callApi('users/update','PUT',{
            email: user.email,
            name: user.userName,
            phone: user.phone,
            password: user.password
       }).then(res=>{
            if(res) dispatch(userEdit(res.data)); 
        })
    }
}
export const userEdit = (user)=>{
    return{
        type: types.EDIT_USER,
        user
    }
}
export const getUserEdit = (user)=>{
    return{
        type: types.GET_USER_EDIT,
        user
    }
}
export const userClear = ()=>{
    return{
        type: types.CLEAR_USER
    }
}
//category
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
export const categoryCreateRequest = (category)=>{ 
    return (dispatch) => {
        return callApi('categories','POST',{
            name: category.name,
            classify: category.classify 
        }).then(res=>{
            if(res) dispatch(categoryCreate(res.data));
        })
    }
}
export const categoryCreate = (category)=>{
    return{
        type: types.CREATE_CATEGORY,
        category
    }
}
export const categoryDeleteRequest = (id)=>{
    return (dispatch)=>{
        return callApi('categories/'+id,'DELETE',null).then(res=>{
            if(res) dispatch(categoryDelete(id));
        })
    }
}
export const categoryDelete = (id)=>{
    return {
        type: types.DELETE_CATEGORY,
        id
    }
}
export const getCategory = (category)=>{
    return{
        type: types.GET_CATEGORY,
        category
    }
}
export const categoryClear = ()=>{
    return{
        type: types.CLEAR_CATEGORY
    }
}
export const categoryEditRequest = (category)=>{
    return (dispatch) =>{
        return callApi('categories/'+category.id,'PUT',{
            name: category.name,
            classify: category.classify
        }).then(res=>{
            if (res) dispatch(categoryEdit(category))
        })
    }
}
export const categoryEdit = (category)=>{
    return{
        type: types.EDIT_CATEGORY,
        category
    }
}
//cart
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
            console.log(res)
            if(res)dispatch(getCart(res.data))
        })
    }
}
export const getCart = (cart,cart_id) =>{
    return{
        type: types.GET_CART,
        cart,
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
export const fetchCategoriesRequest =()=>{
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
export const fetchUser = (id)=>{
    return (dispatch)=>{
        return callApi('users/mini/'+id,'GET',null).then((res)=>{
            if(res) dispatch(getUser(res.data));
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
}
export const getAdCart = () =>{
    return (dispatch) =>{
        return callApi('carts/','GET',null).then((res)=>{
            dispatch(AdminCart(res.data));
        })
    }
}
export const AdminCart = (adcart) =>{
    return {
        type : types.AD_CART,
        adcart
    }
}
export const Decline = (id)=>{
    return (dispatch)=>{
        return callApi('carts/decline','POST',{cart_id:id}).then((res)=>{
            if (res) dispatch(DeclineCart(res.data));
        })
    }
}
export const DeclineCart =(adcart)=>{
    return{
        type : types.DECLINE,
        adcart
    }
}
export const Confirm = (id)=>{
    return (dispatch)=>{
        return callApi('carts/confirm','POST',{cart_id:id}).then((res)=>{
            if(res) dispatch(ConfirmCart(res.data));
        })
    }
}
export const ConfirmCart =(adcart)=>{
    return{
        type : types.CONFIRM,
        adcart
    }
}
export const checkout = (id)=>{
    return (dispatch)=>{
        return callApi('carts/' + id + '/sendcart','POST',null).then((res)=>{
            dispatch(Checkout());
        })
    }
}
export const Checkout =(cart)=>{
    return{
        type : types.CHECKOUT
    }
}
export const historyCartReq = (token) =>{
    return (dispatch) =>{
        return callApi("carts/"+token+"/historyCartDang","GET",
            null
        ).then(res =>{if(res)dispatch(cartHistory(res.data))})
    }
}
export const cartHistory = (cartHistory) => {
    return{
        type : types.HISCART,
        cartHistory
    }
}
export const createReviewRequest =(user_id,product_id,rate,comment)=>{
    console.log(product_id)
    return (dispatch)=>{
        return callApi('reviews','POST',{
            user_id,
            product_id,
            rate,
            comment
        }).then(res=> { 
            if (res){
                dispatch(Who(res.data.user))
                dispatch(createReview(res.data.review)) 
            } 

        })
    }
}
export const createReview=(review)=>{
    return{
        type: types.CREATE_REVIEW,
        review
    }
}
export const Who=(user)=>{
    // console.log(user)
    return{
        type: types.WHO,
        user
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
export const bestRatingProductsRequest =()=>{
    return (dispatch)=>{
        return callApi('products/best/rate','GET',null)
        .then(res => dispatch(bestRatingProducts(res.data)))
    }
}
export const bestRatingProducts =(products)=>{
    
    return {
        type: types.BEST_RATING,
        products
    }
}
export const getProductsWithCategory =(category_id,allProducts)=>{
    return {
        type: types.GET_PRODUCTS_WITH_CATEGORY,
        category_id,
        allProducts
    }
}