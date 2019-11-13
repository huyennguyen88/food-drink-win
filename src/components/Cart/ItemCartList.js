import React from 'react';
import CartItem from './CartItem';


class ItemCartList extends React.Component {
  render() {
    var Cart = []
    Cart = JSON.parse(localStorage.getItem('cartItem'));
    if(Cart!=null)return (
      <>
       {
           Cart.map((item)=>(<tr><CartItem Item = {item}/></tr>))
       }
      </>
    );
    else return(
      <div className="p-2">
        Cart is Empty
      </div>
    )
  }
}
export default ItemCartList;