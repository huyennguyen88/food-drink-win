import React from 'react';
// import ItemList from './ItemList';
// import Control from './Control';
// import AddForm from './';
import CartList from './CartList';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
class ManagerCart extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let style = {
            textAlign: "center",
            margin: "3% 0"
        }
        return (
           <div className="container">
            <div className="page-header">
                <h1 style={style}>Manager Cart</h1>
            </div>
            <div className="row">    
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <CartList/>
                </div>
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(ManagerCart);