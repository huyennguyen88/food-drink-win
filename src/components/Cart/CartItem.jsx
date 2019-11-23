import React from 'react';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
class CartItem extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            Cart:JSON.parse(localStorage.getItem('cartItem')),
            quantity:this.props.Item.quantity,
            Item: this.props.Item
        }
    }
    remove = async () =>{
        let token = JSON.parse(localStorage.getItem('token'))
        if(token)await this.props.delete(token,this.props.Item.id)
    }
    plus = () => {
        var num = this.state.quantity + 1

        this.setState({
            quantity: num
        })
    }
    minus = () => {
        var num = this.state.quantity - 1
        if (num < 0) num = 0
        this.setState
            ({
                quantity: num
            })
    }
    changeForm = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value
        })
    }
    save = async () => {
        let token = JSON.parse(localStorage.getItem('token'))
        if(token)await this.props.updatecart(token,this.props.Item.id,this.state.quantity)
        else {
            let cart = JSON.parse(localStorage.getItem('cartItem'))
            cart.pop(this.props.Item)
            localStorage.setItem('cartItem',JSON.stringify(cart))
        }
    }
    render() {
        let token = JSON.parse(localStorage.getItem('token'))
        return (
            <tr>
                <th scope="row" className="border-0">
                    <div className="p-2">
                        <img src="./image/dong1.gif" alt="" width="70" className="img-fluid rounded shadow-sm" />
                        <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <a href="abc" className="text-dark d-inline-block align-middle">{this.state.Item.name}</a></h5>
                        </div>
                    </div>
                </th>
                <td className="border-0 align-middle"><strong>${this.state.Item.price}</strong></td>
                <td className="border-0 align-middle">
                <div>
                <div className="quantity input-group mb-3">
                    <button className="btn btn-info" type="button" name="button" onClick={this.plus}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeForm} />
                    <button className="btn btn-info" type="button" name="button" onClick={this.minus}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>

                </div>
            </div>
                </td>
                <td className="border-0 align-middle"><a onClick ={this.save} className="text-dark"><i className="fa fa-save"></i></a></td>
                <td className="border-0 align-middle"><a onClick ={token!=null?this.remove:()=>this.props.UnMount(this.props.Item)} className="text-dark"><i className="fa fa-trash"></i></a></td>
            </tr>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        delete: (token,id) =>{
            dispatch(actions.deleteItemReq(token,id))
        },
        updatecart: (token,id,quantity) =>{
            dispatch(actions.UPCart(token,id,quantity))
        }
    }
}
export default connect(null,mapDispatchToProps)(CartItem);
