import { combineReducers } from 'redux';
var init = [];
const data = (state = init,action) =>
{
    switch(action.type){
        default: return [...state];
    }
};
const myReducer = combineReducers({

});
export default myReducer;