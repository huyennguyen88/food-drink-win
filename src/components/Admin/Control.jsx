import React from 'react';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
class Control extends React.Component {
    onToggleForm = ()=>{
        this.props.toggleForm();
    }
    render() {
        return(
                
                <div className="input-group">
                    <input 
                        type="text" name="keyword" 
                        className="form-control" 
                        placeholder="Nhập từ khóa..."
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" style={mg5x} >
                            <span className="fa fa-search"></span>Search
                        </button>
                    </span>
                    <button 
                        type="button" 
                        className="btn btn-outline-primary"
                        style={mg5x}
                        onClick={this.onToggleForm}
                    >New product
                    </button>
                </div>
                
        )
    }
}
let mg5x ={margin: "0 5px"}
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
export default connect(mapStateToProps,mapDispatchToProps)(Control);