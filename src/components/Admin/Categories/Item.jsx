import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'

class Item extends React.Component {
    constructor(props){
        super(props)
    }
    onDelete = ()=>{
        this.props.deleteCategory(this.props.category.id)
    }
    onEdit =  (id)=>{
        this.props.openForm();
        this.props.getCategory(this.props.category)
    }
    componentWillReceiveProps(nextProps){
    }
    render() {
        let {category} = this.props
        return (
                 <tr className="row-admin">
                    <td>{category.id}</td>  
                    <td>{category.name}</td>
                    <td>{category.classify? "Food" : "Drink"}</td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={()=>this.onEdit(category.id)}
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
        // productDetail: state
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        deleteCategory: (id)=>{
            dispatch(actions.categoryDeleteRequest(id))
        },
        openForm: ()=>{
            dispatch(actions.openForm())   
        },
        getCategory:  (category)=>{
            dispatch(actions.getCategory(category))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);