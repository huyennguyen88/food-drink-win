import {combineReducers} from 'redux';
import products from './products'
import categories from './categories';
import getProduct from './getProduct'
import displayForm from './displayForm'
import items from './items';
import users from './users';
import user from './user';
import cart from './cart';
import reviews from './reviews';
import searchProduct from './searchProduct'
import sortProduct from './sortProduct'
import Adcart from './Adcart'
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
    cart,
    Adcart,
});
export default myReducer