import React from 'react';
import CartItem from './CartItem';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
class ItemCartList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Cart: null,
      token: JSON.parse(localStorage.getItem('token'))
    }
  }
  componentWillReceiveProps(nextProps){
    let miniCart = nextProps.cart
    if(this.state.token){
      let localCart = JSON.parse(localStorage.getItem('cartItem'))
      if(localCart)miniCart.push(localCart)
      this.setState({
        Cart:miniCart
      }) 
      localStorage.setItem('cartItem',JSON.stringify(''))
    }
  }
  delete = (item) =>
  {
    let miniCart = this.state.Cart
    miniCart.pop(item)
    this.setState({Cart:miniCart})
  }
  render() {
    if(this.state.Cart===null || this.state.Cart === [])return (
      <div className="p-2">
        Cart is Empty
      </div>
    );
    else return(
      <>
       {
           this.state.Cart.map((item,index)=>(
           <CartItem Item = {item} UnMount ={this.delete} />
           ))
       }
      </>
    )
  }
}
const mapStateToProps = (NextProps) => {
  return {
      cart: NextProps.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      add: (id,item) =>{
        dispatch(actions.addToCart(id,item))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemCartList);