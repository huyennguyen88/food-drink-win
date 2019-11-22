import * as types from "./../constants/ActionTypes"
var initialState = [];

var myReducer = (state = initialState, action) => {
    let review = ''
    let index =0
    switch (action.type) {
        case types.LOAD_REVIEWS:
            state = action.reviews;
            return [...state];
        case types.UPDATE_REVIEW:
            review = action.review
            index= state.findIndex((a)=>{
                return a.id === review.id
            })
            state[index] = review
            return [...state]
        case types.CREATE_REVIEW:
            review = action.review
            state.push(review)
            return [...state]
        case types.DELETE_REVIEW:
            review = action.review
            index= state.findIndex((a)=>{
                return a.id === review.id
            })
            state.splice(index,1)
            return [...state]
        default:
            return state
    }
}
export default myReducer