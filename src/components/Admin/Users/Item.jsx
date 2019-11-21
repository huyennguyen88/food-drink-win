import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'

class Item extends React.Component {
    constructor(props){
        super(props)
    }
    onDelete = ()=>{
        this.props.deleteUser(this.props.user.authentication_token)
    }
    onEdit =  (id)=>{
        this.props.openForm();
        this.props.getUser(this.props.user)
    }
    componentWillReceiveProps(nextProps){
    }
    render() {
        let {user} = this.props
        return (
                 <tr className="row-admin">
                    <td>{user.id}</td>  
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={()=>this.onEdit(user.id)}
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
        deleteUser: (token)=>{
            dispatch(actions.userDeleteRequest(token))
        },
        openForm: ()=>{
            dispatch(actions.openForm())   
        },
        getUser:  (user)=>{
            dispatch(actions.getUserEdit(user))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);