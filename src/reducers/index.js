import {combineReducers} from 'redux';
import products from './products'
import categories from './categories';
import items from './items';
import users from './users';
import user from './user';
import reviews from './reviews'
const myReducer = combineReducers({
    products,
    items,
    users,
    categories,
    reviews,
    user
});
export default myReducer