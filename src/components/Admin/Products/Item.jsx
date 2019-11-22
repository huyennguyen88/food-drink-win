import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'

class Item extends React.Component {
    constructor(props){
        super(props)
    }
    onDelete = ()=>{
        this.props.deleteProduct(this.props.product.id)
    }
    onEdit = (id)=>{
        this.props.openForm();
        this.props.getProduct(this.props.product)
    }
    componentWillReceiveProps(nextProps){
    }
    render() {
        let {product} = this.props
        return (
                 <tr className="row-admin">
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={()=>this.onEdit(product.id)}
                        >Edit
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={this.onDelete}
                        >Delete
                        </button>
                    </td>
                </tr>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        CartDetail:state.Cart
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);