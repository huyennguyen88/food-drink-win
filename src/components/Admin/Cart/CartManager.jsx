import React from 'react';
import CartList from './CartList';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
class CartManager extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getCart()
    }
    render() {
        let style = {
            textAlign: "center",
            margin: "3% 0"
        }
        let {displayForm} = this.props 
        return (
           <div className="container">
            <div className="page-header">
                <h1 style={style}>Manager page</h1>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* {displayForm? <AddForm/> : <ItemList/>}  */}
                    <CartList></CartList>
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
        },
        getCart:()=>{
            dispatch(actions.getAdCart())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartManager);