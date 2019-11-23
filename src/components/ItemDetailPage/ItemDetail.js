import React from 'react';
import './ItemDetail.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import classNames from "classnames";
import * as actions from './../../actions/index'
import ReviewForm from './ReviewForm';
import DetailInfo from './DetailInfo'
class ItemDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        var id = this.props.match.params.id
        this.props.productShow(id);
        this.props.loadReviews(id);
        this.props.loadReviewUsers(id);
    }
    render() {
        var { product, reviews, users} = this.props;
        return (
            <div className="ItemDetail">
                <div className="card card-detail">
                    <div className="container">
                        <div className="wrapper row">
                            <Preview img={product.image} />
                            <DetailInfo product_id={product.id} />
                        </div>
                    </div>
                </div>
                <p className="h4 text-info">{reviews.length} Comments</p>
                <div className="container-fluid">
                    <div className="mb-3">
                        <div >
                            <div >
                                {
                                    reviews.map((item, index) => {
                                        var cmtUser = users.find((u) => {
                                            console.log("users",users)
                                            return u.id === item.user_id
                                        })
                                        return <Comment key={index} review={item} user={cmtUser} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <ReviewForm />
                </div>
            </div>
        );
    }
}
class Preview extends React.Component {
    render() {
        return (
            <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1"><img alt="abc" src={this.props.img} /></div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        product: state.products,
        reviews: state.reviews,
        users: state.users,
        user : state.user,
        review: state.review
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        productShow: (id) => {
            dispatch(actions.productShowRequest(id))
        },
        loadReviews: (id) => {
            dispatch(actions.fetchReviews(id))
        },
        loadReviewUsers: (id) => {
            dispatch(actions.fetchReviewUsers(id))
        },
        add: (id,item) =>{
            dispatch(actions.addToCart(id,item))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);