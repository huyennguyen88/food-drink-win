import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
class ItemCartList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Cart: JSON.parse(localStorage.getItem('cartItem'))?JSON.parse(localStorage.getItem('cartItem')):[]
    }
  }
  componentWillMount(){
    let token = JSON.parse(localStorage.getItem('token'))
    this.props.getCart(token)
  }
  componentWillReceiveProps(nextProps){
    let token = JSON.parse(localStorage.getItem('token'))
    let miniCart = nextProps.cart
    if(token){
      miniCart.push(this.state.Cart)
      this.setState({
        Cart:miniCart
      }) 
      localStorage.setItem('cartItem',JSON.stringify(''))
    }
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
           this.state.Cart.map((item,index)=>(<tr key={index} ><CartItem Item = {item}/></tr>))
       }
      </>
    )
  }
}
const mapStateToProps = (NextProps) => {

  return {
      product: NextProps.products,
      cart: NextProps.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      productShow: (id) => {
          dispatch(actions.productShowRequest(id))
      },
      getCart: (id) =>{
          dispatch(actions.getCartReq(id))
      },
      add: (id,item) =>{
        dispatch(actions.addToCart(id,item))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemCartList);