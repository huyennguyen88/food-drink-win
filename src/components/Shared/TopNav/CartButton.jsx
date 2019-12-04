import React from 'react'
import {
    Link,
} from "react-router-dom";
class CartButton extends React.Component {
    render() {
        let token = JSON.parse(localStorage.getItem('token'));
        
        return (

                <div className="d-flex mx-1">
                    <Link to="/cart">
                        <button type="button" className="btn btn-outline-success mx-2">My cart <i className="fas fa-shopping-cart"></i>
                        </button>
                    </Link>
                    {token?
                    (<Link to="/historyCart">
                        <button type="button" className="btn btn-outline-info">History Carts <i className="fa fa-history" aria-hidden="true"></i>
                        </button></Link>):''}
                </div>

        );
    }

}
export default CartButton;