import {combineReducers} from 'redux';
import products from './products'
import displayForm from './displayForm'
import user from './user'
import categories from './categories'
import getProduct from './getProduct'
import search from './search'
import sort from './sort'
import items from './items'
import users from './users'
import reviews from './reviews'
import cart from './cart'
import getUser from './getUser'
import getCategory from './getCategory'
import Adcart from './Adcart'
import allProduct from './allProducts'
const myReducer = combineReducers({
    products,
    displayForm,
    search,
    sort,
    items,
    categories,
    reviews,
    user,
    users,
    cart ,
    getProduct,
    getCategory,
    getUser,
    Adcart,
    allProduct,
});
export default myReducer