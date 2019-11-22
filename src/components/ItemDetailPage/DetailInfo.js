import React from 'react';
import Quantity from "./Quantity";
import { connect } from 'react-redux'
import BeautyStars from 'beauty-stars';
import * as actions from './../../actions/index'
class DetailInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: 0,
            product: null
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     var { product_id ,reviews} = nextProps
    //     this.props.productShow(product_id)
    //     var { product } = nextProps
    //     if (product) {
    //         this.setState({
    //             rate: product.rate,
    //             product
    //         })
    //     }
    //     console.log("goi1")
    // }
    componentWillReceiveProps(nextProps) {

        let { reviews } = nextProps
        if (reviews) {
            let rate = this.avr_rate(reviews)
            this.setState({
                rate: rate
            })
        }
        console.log("goi2")
    }
    avr_rate = (array) => {
        let rate_avr = 0
        let tong = 0
        let dem = 0
        array.forEach(element => {
            if (element.rate !== 0) {
                tong += element.rate
                dem++
            }
        });
        rate_avr = tong / dem
        return rate_avr
    }
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
        var { rate } = this.state
        console.log("product",product);
      
        return (
            <div className="details col-md-6">
                <p className="h2">{product.name}</p>
                <div className="rating">
                    <div className="stars">
                        <BeautyStars
                            value={rate}
                            size={20}
                            onChange={value => this.changeRate(value)}
                        />
                    </div>
                    <span className="review-no">{product.reviews}</span>
                </div>
                
                <p className="product-description">{product.description}</p>
                <h4 className="price">current price: <span>${product.price}</span></h4>
                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                
                <Quantity current={0} product={product} />
                {/* <Quantity current={0} product_id={product.id} /> */}
                <div>
                    <button className="btn btn-outline-success mx-1" type="button" onClick={this.addToCart}>
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                        Add to cart</button>
                    <button className="btn btn-warning mx-1" type="button" onClick={this.addToCart}>Bye now</button>
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
        users: state.users,
        user: state.user,
        review: state.review
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        productShow: (id) => {
            dispatch(actions.productShowRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailInfo);