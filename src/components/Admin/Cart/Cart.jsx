import React from 'react';
import ItemfromCart from './ItemfromCart'
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            toggle:true
        }
    }
    Confirm = async ()=>{
        await this.props.confirm(this.props.cart.id)
    }
    Decline = async ()=>{
        await this.props.decline(this.props.cart.id)
    }
    items = () =>{
            
            return this.props.cart.item.map((i,index) =>{
            return <ItemfromCart item= {i} key ={i.id +index}/>
        })
    }
    log =()=>{
        return (<>
            <th className="text-center">ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Stock</th>
        </>)
    }
    render() {
        let cart = this.props.cart
        console.log(cart)
        let c = () => {
            switch(cart.status){
                case 0:
                    return 'Wait List'
                case 1:
                    return 'Accepted'
                case 2:
                    return 'Declined'
            }
        }
        
        return (
            <>
             <tr className="row-admin">
                    <th className="text-center">{cart.id}</th>
                    <th className="text-center">{cart.username}</th>
                    <th className="text-center">{c()}</th>
                    {cart.status==0?<td>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={this.Confirm}
                        >Accept
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={this.Decline}
                        >Decline
                        </button>
                    </td>:<td></td>}
                
            </tr>
            </>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        confirm : (cart_id) =>{
            dispatch(actions.Confirm(cart_id))},
        decline : (cart_id) =>{
            dispatch(actions.Decline(cart_id))}
    }
}
export default connect(null,mapDispatchToProps)(Cart)