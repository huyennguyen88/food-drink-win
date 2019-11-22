import React from 'react';
import {connect} from 'react-redux'
import * as actions from './../../../actions/index'
class ItemfromCart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            product:[]
        }
    }
    componentWillMount(){
        this.props.fetchAllProduct();
    }
    render() {
        let products = this.props.product
        let product =products.find((p,i) =>{
            if(p.id == this.props.item.product_id) return p
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
const  mapStateToProps =(state) => {
    return {
        product: state.allProduct,
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
       fetchAllProduct: ()=>{
           return dispatch(actions.fetchProductsRequest());
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemfromCart);