import React from 'react'
import {
    Link,
} from "react-router-dom";
class CartButton extends React.Component {
    render() {
        return (

                <div className="d-flex mx-1">
                    <Link to="/cart">
                        <button type="button" className="btn btn-outline-success">My cart <i className="fas fa-shopping-cart"></i>
                        </button>
                    </Link>
                </div>

        );
    }

}
export default CartButton;