import {combineReducers} from 'redux';
import products from './products'
import user from './user'
import displayForm from './displayForm'
import items from './items';
import users from './users';
import cart from './cart';
import reviews from './reviews';
import searchProduct from './searchProduct'
import sortProduct from './sortProduct'
import Adcart from './Adcart'
import categories from './categories'
import getProduct from './getProduct'
import search from './search'
import sort from './sort'
import getUser from './getUser'
import getCategory from './getCategory'
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
    getProduct,
    getCategory,
    getUser,
    cart,
    Adcart,
    searchProduct,
    sortProduct
});
export default myReducer