import React from 'react';
import ItemList from './ItemList';
import Control from './Control';
import AddForm from './AddForm';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
class ManagerProduct extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let style = {
            textAlign: "center",
            margin: "3% 0"
        }
        let {displayForm} = this.props 
        var token = JSON.parse(localStorage.getItem('token'));
        var role = JSON.parse(localStorage.getItem('role'));
        return (
           <div className="container">
                {
                    token && role === 1?
                    <div>
                        <div className="page-header">
                            <h1 style={style}>Manager product</h1>
                        </div>
                        <div className="row">    
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {displayForm? '' : <Control/> } 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {displayForm? <AddForm/> : <ItemList/>} 
                            </div>
                        </div>
                    </div>
                    :
                    <h1>You haven't this permission</h1>
                }
            
           </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        displayForm: state.displayForm
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        toggleForm: ()=>{  
            dispatch(actions.toggleForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagerProduct);