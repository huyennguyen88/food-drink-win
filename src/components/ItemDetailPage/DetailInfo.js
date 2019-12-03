import React from 'react';
import { connect } from 'react-redux'
import BeautyStars from 'beauty-stars';
import * as actions from './../../actions/index'
class DetailInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rate: 0,
            product: null,
            quantity: 0,
            rate: 0
        }
    }
    componentDidMount() {

        this.props.productShow(this.props.id)
    }
    componentWillReceiveProps(nextProps) {

        let { reviews } = nextProps
        if (reviews) {
            let rate = this.avr_rate(reviews)
            this.setState({
                rate: rate
            })
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
        rate_avr = Math.round(tong / dem)
        return rate_avr
    }
    changeForm = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value
        })
    }
    addToCart = async () => {
        let token = JSON.parse(localStorage.getItem('token'))
        let { product } = this.props
        let item = {
            id: product.id,
            price: product.price,
            quantity: this.state.quantity,
            name: product.name,
            image: product.img
        }
        if (token) {
            await this.props.add(token, item)
            alert('add to cart')
        }
        else {
            let cart = JSON.parse(localStorage.getItem('cartItem'))
            if (cart) cart.push(item)
            else cart = [item]
            localStorage.setItem('cartItem', JSON.stringify(cart))
        }
    }
    changeRate = (value) => {
        this.setState({
            rate: value
        })
    }
    render() {
        var { product } = this.props
        var { rate } = this.state

        return (
            <div className="details col-md-6">
                <p style={style} className="h2">{product.name}</p>
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
                <h4 className="price"><span>{product.price}₫</span></h4>
                <p className="product-description">{product.description}</p>
                <div>
                    <div className="quantity input-group mb-3">
                        <button className="btn btn-info" type="button" name="button" onClick={this.minus}>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeForm} />
                        <button className="btn btn-info" type="button" name="button" onClick={this.plus}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-outline-success mx-3" type="button" onClick={this.addToCart}>
                            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                            Thêm vào giỏ</button>
                    </div>
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
        },
        add: (id, item) => {
            dispatch(actions.addToCart(id, item))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailInfo);
const style = {
    fontFamily: "'Dosis', sans-serif",
    fontWeight: "700",
    fontSize: "33px",
}