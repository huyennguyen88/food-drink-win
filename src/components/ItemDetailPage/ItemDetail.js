import React from 'react';
import './ItemDetail.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
import classNames  from "classnames";
class ItemDetail extends React.Component {
    constructor(props){
        super(props)
        var id = this.props.match.params.id
        this.props.productShow(id);
        this.props.loadReviews(id);
        this.props.loadReviewUsers(id);
    }
    componentDidMount() {
      
    }
    render() {
        var { product, reviews, users } = this.props;


        return (
            <div className="ItemDetail">
                <div className="card card-detail">
                    <div className="container">
                        <div className="wrapper row">
                            <Preview img={product.image} />
                            <DetailInfo product={product} />
                        </div>
                    </div>
                </div>
                <p className="h4 text-info">{reviews.length} Comments</p>
                <div className="d-flex  mt-3">
                    <div className="comment-wrapper">
                        <div className="card ">
                            <div className="card-body">

                                {
                                    reviews.map((item, index) => {
                                        var cmtUser = users.find((u) => {
                                            return u.id === item.user_id
                                        })
                                        return <Comment key={index} review={item} user={cmtUser} />
                                    })
                                }

                                <textarea className="form-control border-info" placeholder="Write a comment..." rows="3"></textarea>
                                <br />
                                <button type="button" className="btn btn-info float-right">Post</button>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
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
class DetailInfo extends React.Component {
    addToCart = () => {
        let { product } = this.props
        var Cart = JSON.parse(localStorage.getItem('cartItem'))
        var item = Cart.find((item) => {
            if (item.name === product.name) return item
            return false
        })
        item == null ? Cart.push(product) : item.quantity++
        localStorage.setItem('cartItem', JSON.stringify(Cart));
    }
    render() {
        var { product } = this.props
        var rate = product.rate
        var rating = [false, false, false, false, false]
        for (let i = 0; i < rate; i++) {
            rating[i] = true
        }
        var stars = rating.map((item, index) => {
            return <span key={index} className={classNames('fa','fa-star',{checked:item})}></span>
        })
        return (
            <div className="details col-md-6">
                <p className="h2">{product.name}</p>
                <div className="rating">
                    <div className="stars">
                        {stars}
                    </div>
                    <span className="review-no">{product.reviews}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <h4 className="price">current price: <span>${product.price}</span></h4>
                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <div className="action">
                    <button className="btn btn-success mx-1" type="button" onClick={this.addToCart}>Add to cart</button>
                    <button className="btn btn-danger" type="button"><span className="fa fa-heart"></span></button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.products,
        reviews: state.reviews,
        users: state.users
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        productShow: (id) => {
            dispatch(actions.productShowRequest(id))
        },
        loadReviews: (id) => {
            dispatch(actions.fetchReviews(id))
        },
        loadReviewUsers: (id) => {
            dispatch(actions.fetchReviewUsers(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);