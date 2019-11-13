import React from 'react';

class CartItem extends React.Component {
    remove = () =>{
        var Cart = []
        Cart = JSON.parse(localStorage.getItem('cartItem'));
        Cart.pop(this.props.Item);
        localStorage.setItem('cartItem',JSON.stringify(Cart));
    }
    render() {
        return (
            <>
                <th scope="row" className="border-0">
                    <div className="p-2">
                        <img src="./image/dong1.gif" alt="" width="70" className="img-fluid rounded shadow-sm" />
                        <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <a href="abc" className="text-dark d-inline-block align-middle">{this.props.Item.name}</a></h5>
                        {/* <span className="text-muted font-weight-normal font-italic d-block">Category: {this.props.Item.category}</span> */}
                        </div>
                    </div>
                </th>
                <td className="border-0 align-middle"><strong>${this.props.Item.price}</strong></td>
                <td className="border-0 align-middle"><strong>{this.props.Item.quantity}</strong></td>
                <td className="border-0 align-middle"><a onClick ={this.remove} href="cart" className="text-dark"><i className="fa fa-trash"></i></a></td>
            </>
        );
    }
}
export default CartItem;