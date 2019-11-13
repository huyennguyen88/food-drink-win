import {combineReducers} from 'redux';
import products from './products'
import user from './users'
const myReducer = combineReducers({
    products,
    user
});
export default myReducer