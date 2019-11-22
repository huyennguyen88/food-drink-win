import {combineReducers} from 'redux';
import products from './products'
import categories from './categories';
import items from './items';
import users from './users';
import user from './user';
import reviews from './reviews'
import review from "./review";
const myReducer = combineReducers({
    products,
    items,
    users,
    categories,
    reviews,
    user,
    review
});
export default myReducer