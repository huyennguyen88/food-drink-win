import React from 'react';
import {connect} from 'react-redux'
class ItemfromCart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            product:[]
        }
    }
    render() {
        let products = this.props.product
        let product =products.find(p =>{
            if(p.id == this.props.item.product_id)return p
        })
        return (
                 <tr className="row-admin " >
                    <td className="text-center">{product.id}</td>
                    <td className="text-center">{product.name}</td>
                    <td className="text-center">{product.price}</td>
                    <td className="text-center">{this.props.item.quantity}</td>
                    <td className="text-center">{product.quantity}</td>
                </tr>
        );
    }
}
const  mapStateToProps =(nextProps) => {
    return {
        product: nextProps.products,
    }
}
export default connect(mapStateToProps,null)(ItemfromCart);