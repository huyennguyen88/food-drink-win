import React from 'react';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
import Sort from './Sort';
class Control extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }
    onToggleForm = ()=>{
        this.props.productClear();
        this.props.toggleForm();
    }
    onChange = (e)=>{
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSearch = ()=>{
        this.props.productSearch(this.state.keyword);
    }
    render() {
        return(
                
                <div className="input-group">
                    <input 
                        onChange ={this.onChange}
                        type="text" name="keyword" 
                        className="form-control" 
                        placeholder="Nhập từ khóa...(Theo tên)"
                    />
                    <span className="input-group-btn">
                        <button onClick={this.onSearch} className="btn btn-primary" type="button" style={mg5x} >
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
                    <Sort/>
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
        },
        productClear: ()=>{
            dispatch(actions.productClear())
        },
        productSearch: (keyword)=>{
            dispatch(actions.productSearch(keyword))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Control);