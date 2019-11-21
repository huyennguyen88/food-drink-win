import {combineReducers} from 'redux';
import products from './products'
import user from './user'
import displayForm from './displayForm'
import categories from './categories'
import getProduct from './getProduct'
import searchProduct from './searchProduct'
import sortProduct from './sortProduct'
import items from './items'
import users from './users'
import reviews from './reviews'
import cart from './cart'
const myReducer = combineReducers({
    products,
    displayForm,
    searchProduct,
    sortProduct,
    getProduct,
    items,
    users,
    categories,
    reviews,
    user,
    cart 
});
export default myReducer