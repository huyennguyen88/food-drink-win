import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
class HistoryCartList extends Component {
    constructor(props) {
        super(props);
    }
    renderItem = (item) =>{
        return(
            <tr>
                <th className="text-center">{item.id}</th>
                <th className="text-center">{item.name}</th>
                <th className="text-center">{item.price}</th>
                <th className="text-center">{item.quantity}</th>
            </tr>
        )
    }
    renderCart = (cart) =>{
        let status = (status) =>{
            switch(status)
            {
                case 0:
                    return (<div>on Wait List</div>)
                case 1:
                    return (<div>Accepted</div>)
                case 2:
                    return (<div>Declined</div>)
                case 3:
                    return (<div>not Checkout</div>)
            }
        }
        let createTime = new Date(cart.createTime)
        return( 
        <>
            <tr>
                <th className="text-center">{cart.id}</th>
                <th className="h4 ml-4 nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {createTime.getUTCDate() + "/" + createTime.getUTCMonth() + "/" + createTime.getFullYear() + "   " + createTime.getUTCHours() +":" + createTime.getUTCMinutes()}</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <thead>
                            <tr>
                                <th className="text-center">Product ID</th>
                                <th className="text-center">Product Name</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                            </tr>
                            
                                
                        </thead>
                        <tbody className = "h4 ml-4 nav-item dropdown">
                            {cart.item?cart.item.map(i =>{return this.renderItem(i)}):''}
                        </tbody>
                    </div>
                </th>
                <th className="text-center">{status(cart.status)}</th>
            </tr>
        </>
        )
    }
    render() {
        let {HistoryCart} = this.props
        return (<>
            {HistoryCart?HistoryCart.map(i =>{return this.renderCart(i)}):''}           
        </>)
    }
}
const mapStateToProps = (state) =>{
    return { 
        HistoryCart: state.HistoryCart
    }
}
export default connect(mapStateToProps, null)(HistoryCartList);