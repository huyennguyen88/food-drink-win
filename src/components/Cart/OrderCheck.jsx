import React from 'react';


class OrderCheck extends React.Component {
    render() {
        var cartItem = [] 
        cartItem = JSON.parse(localStorage.getItem('cartItem'))
        var total = 0
        var quantity=0 
        if(cartItem!=null){
            cartItem.map((item) =>{
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
                        </ul><a href="abc" className="btn btn-warning rounded-pill py-2 btn-block">Procceed to checkout</a>
                    </div>
                </div>

            </>
        );
    }
}
export default OrderCheck;