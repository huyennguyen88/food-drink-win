import {combineReducers} from 'redux';
import products from './products'
import user from './user'
import displayForm from './displayForm'
import categories from './categories'
import getProduct from './getProduct'
import search from './search'
import sort from './sort'
import items from './items'
import users from './users'
import reviews from './reviews'
import cart from './cart'
import getUser from './getUser'
const myReducer = combineReducers({
    products,
    displayForm,
    search,
    sort,
    getProduct,
    items,
    categories,
    reviews,
    user,
    users,
    cart ,
    getUser
});
export default myReducer