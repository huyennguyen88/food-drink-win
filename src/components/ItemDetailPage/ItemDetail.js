import React from 'react';
import './ItemDetail.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import classNames from "classnames";
import * as actions from './../../actions/index'
import ReviewForm from './ReviewForm';
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
        var { product, reviews, users } = this.props;


        return (
            <div className="ItemDetail">
                <div className="card card-detail">
                    <div className="container">
                        <div className="wrapper row">
                            <Preview img={product.image} />
                            <DetailInfo product={product} add = {this.props.add}/>
                        </div>
                    </div>
                </div>
                <p className="h4 text-info">{reviews.length} Comments</p>
                <div className="mt-3">
                    <div className="mb-3">
                        <div className="card">
                            <div className="card-body">
                                {
                                    reviews.map((item, index) => {
                                        var cmtUser = users.find((u) => {
                                            return u.id === item.user_id
                                        })
                                        return <Comment key={index} review={item} user={cmtUser} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <ReviewForm/>
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

    constructor(props)
    {
        super(props)
        this.state={
            quantity:0
        }
    }
    addToCart = async () => {
        let token = JSON.parse(localStorage.getItem('token'))
        let { product } = this.props
        let item = {
            id: product.id,
            price: product.price,
            quantity:this.state.quantity,
            name: product.name,
            image: product.img
        }
        if(token){
            await this.props.add(token,item)
        }
        else{
            let cart = JSON.parse(localStorage.getItem('cartItem'))
            cart.push(item)
            localStorage.setItem('cartItem',JSON.stringify(cart))
        }
    }
    plus = () => {
        var num = this.state.quantity + 1

        this.setState({
            quantity: num
        })
    }
    minus = () => {
        var num = this.state.quantity - 1
        if (num < 0) num = 0
        this.setState
            ({
                quantity: num
            })
    }
    changeForm = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {

        var { product } = this.props
        var rate = product.rate
        var rating = [false, false, false, false, false]
        for (let i = 0; i < rate; i++) {
            rating[i] = true
        }
        var stars = rating.map((item, index) => {
            return <span key={index} className={classNames('fa', 'fa-star', { checked: item })}></span>
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
                <div>
                    <div className="quantity input-group mb-3">
                        <button className="btn btn-info" type="button" name="button" onClick={this.plus}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeForm} />
                        <button className="btn btn-info" type="button" name="button" onClick={this.minus}>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </button>

                    </div>
                </div>
                <div>
                    <button className="btn btn-outline-success mx-1" type="button" onClick={this.addToCart}>
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    Add to cart</button>
                    <button className="btn btn-warning mx-1" type="button" onClick={this.addToCart}>buy now</button>
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