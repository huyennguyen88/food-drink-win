import {combineReducers} from 'redux';
import products from './products'
import user from './users'
import displayForm from './displayForm'
import categories from './categories'
import getProduct from './getProduct'
import searchProduct from './searchProduct'
import sortProduct from './sortProduct'
const myReducer = combineReducers({
    products,
    user,
    displayForm,
    categories,
    getProduct,
    searchProduct,
    sortProduct,
});
export default myReducer