import React from 'react';
import './Comment.css';
import { connect } from "react-redux";
import * as actions from '../../actions/index'
import BeautyStars from 'beauty-stars';
class Comment extends React.Component {
    constructor(props) {
        super(props)
        let token = JSON.parse(localStorage.getItem('token'))
        this.props.currentUser(token)
    }
    getReview =(review_id)=>{
        this.props.getReview(review_id)
    }
    deleteReview =(review_id)=>{
        console.log("delete",review_id)
        this.props.deleteReview(review_id)  
    }
    render() {
        
        var { review, user, current_user} = this.props
        var edit_delete =
                <div className="my-3">
                    <button type="button" className="btn btn-info btn-sm mx-2" title="Edit" onClick={()=> this.getReview(review.id)}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm" title="Delete" onClick={()=>this.deleteReview(review.id)}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
        if (current_user && user) {
            var editDelElement = current_user.id=== user.id? edit_delete:''
        }
        return (
            <div>
                <div className="media">
                    <a href="" className="float-left">
                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="rounded-circle mr-3" />
                    </a>
                    <div className="media-body">
                        <p className="text-muted pull-right">
                            <small className="text-muted">{review.created_at.slice(0,10)}</small>
                        </p>
                        <strong className="text-success">@{user ? user.name : ""}</strong>
                        <p>{review.comment}</p>
                        <BeautyStars
                                    value={review.rate}
                                    size={15}
                                />
                        <div className="action">
                            {editDelElement}
                        </div>
                    </div>
                </div>
                <hr className="border border-info" />
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        current_user: state.user
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: (token) => {
            dispatch(actions.profileRequest(token));
        },
        getReview: (review_id)=>{
            dispatch(actions.getReviewRequest(review_id))
        },
        deleteReview: (review_id)=>{
            dispatch(actions.deleteReviewRequest(review_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
