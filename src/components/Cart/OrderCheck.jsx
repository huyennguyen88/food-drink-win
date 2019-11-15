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
                return null;
            })
        }
        return (
            <>
                <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                    <div class="p-4">

                        <ul class="list-unstyled mb-4">
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Quantity</strong>
                                <h5 class="font-weight-bold">{quantity}</h5>
                            </li>
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                <h5 class="font-weight-bold">${total}</h5>
                            </li>
                        </ul><a href="abc" class="btn btn-warning rounded-pill py-2 btn-block">Procceed to checkout</a>
                    </div>
                </div>

            </>
        );
    }
}
export default OrderCheck;