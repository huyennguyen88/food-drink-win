import {combineReducers} from 'redux';
import products from './products'
import user from './users'
import displayForm from './displayForm'
import categories from './categories'
const myReducer = combineReducers({
    products,
    user,
    displayForm,
    categories
});
export default myReducer