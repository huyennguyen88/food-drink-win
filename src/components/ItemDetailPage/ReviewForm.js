import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index"
import BeautyStars from 'beauty-stars';
class ReviewForm extends Component 
{
    constructor(props) 
    {
        super(props)
        let token = JSON.parse(localStorage.getItem('token'))
        this.props.currentUser(token);
        this.state = {
            id: '',
            comment: '',
            rate: 0,
            clearform: false
        }
    }
    componentWillReceiveProps(nextProps)
    {
        var {review} = nextProps
        if(review instanceof Array || review ===null ){
            this.setState({
                id: '',
                comment: '',
                rate: 0,
                clearform: false
            })
        }
        else if(review){
            this.setState({
                id: review.id,
                comment: review.comment,
                rate: review.rate,
                clearform: false
            })
        }
        if(this.state.clearform){
            this.props.clearReviewNow()   
        }
    }
    changeComment = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value
        })
    }
    changeRate = (value) => {
        this.setState({
            rate: value
        })
    }
    SubmitForm= async(event)=>
    {
        event.preventDefault()
        var {product, user, review} = this.props
        var {comment, rate} =this.state
        if(user){
            if(this.state.id){
              
               await this.props.updateReview(review.id, user.id, product.id, rate, comment)
            }
            else {
               await this.props.addReview(user.id, this.props.id, rate, comment)
            }
            this.setState({
                id: '',
                comment: '',
                rate: 0,
                clearform: true
             })
        }
        else{
            alert("Đăng nhập để bình luận")
        } 
    }
    render() 
    {
        // console.log(this.props.id)
        var {comment, rate} = this.state
        return (
            <div className="row">
                <div>
                    <div className="card-body">
                        <form onSubmit={this.SubmitForm}>
                            <div className="form-group">
                                <label>Nhận xét</label>
                                <textarea className="form-control" name="comment" rows="3" cols="50" placeholder="Tôi thấy món này..." value={comment} onChange={this.changeComment}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Chấm điểm</label>
                                <BeautyStars
                                    value={rate}
                                    size={25}
                                    onChange={value => this.changeRate(value)}
                                />

                            </div>
                            <button type="submit" className="btn btn-success"><i className="fas fa-plus"></i>Lưu</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        product: state.products,
        user: state.user,
        review: state.review
    }
}
const mapDispatchToProps = (dispatch)=>
{
    return{
      currentUser: (token) => {
        dispatch(actions.profileRequest(token));
      },
      addReview: (user_id, product_id, rate, comment)=>{
          dispatch(actions.createReviewRequest(user_id, product_id, rate, comment))
      },
      updateReview: (review_id,user_id,product_id,rate,comment)=>{
            dispatch(actions.updateReviewRequest(review_id,user_id,product_id,rate,comment))
      },
      clearReviewNow: ()=>{
          dispatch(actions.clearReviewNow());
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);