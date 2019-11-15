import {combineReducers} from 'redux';
import products from './products'
import categories from './categories';
import items from './items';
import user from './users';
import cart from './cart';
const myReducer = combineReducers({
    products,
    items,
    user,
    categories,
    cart
});
export default myReducer