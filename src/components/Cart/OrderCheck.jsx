import React from 'react';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
class OrderCheck extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            Cart: null
        }
    }
    componentWillReceiveProps(nextProps){
        let token = JSON.parse(localStorage.getItem('token'))
        let miniCart = nextProps.cart
        if(token){
        let localCart = JSON.parse(localStorage.getItem('cartItem'))
        if(localCart)miniCart.push(localCart)
        this.setState({
            Cart:miniCart
        }) 
        }
    }
    checkout = async () =>
    {
        let token = JSON.parse(localStorage.getItem('token'))
        await this.props.checkout(token)
    }
    render() {
        var total = 0
        var quantity=0 
        console.log(this.state.Cart)
        if(this.state.Cart!=null && this.state.Cart!== []){
            this.state.Cart.map((item) =>{
                total+=item.price*item.quantity;
                quantity+=item.quantity;
            })
        }
        return (
            <>
                <div className="col-lg-6">
                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                    <div className="p-4">

                        <ul className="list-unstyled mb-4">
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Quantity</strong>
                                <h5 className="font-weight-bold">{quantity}</h5>
                            </li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                <h5 className="font-weight-bold">${total}</h5>
                            </li>
                        </ul><a onClick={this.checkout} className="btn btn-warning rounded-pill py-2 btn-block">Procceed to checkout</a>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = (NextProps) => {
    return {
        cart: NextProps.cart,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkout : (token) =>{
            dispatch(actions.checkout(token))
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(OrderCheck);
