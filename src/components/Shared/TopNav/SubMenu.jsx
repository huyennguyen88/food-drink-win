import React, { Component } from 'react'
import LogSign from './LogSign'
import {connect} from 'react-redux'
import * as actions from './../../../actions/index'
class SubMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            token:'',
            search:''
        }
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'));
        this.setState({
            token: token
        })
    }
    onChange = (e)=>{  
        let target = e.target;
        let name = target.name;
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    onSubmit = ()=>{
       this.props.search(this.state.search)
    }
    render() {
        
        return (
            <div className="SubMenu d-flex justify-content-between my-3">
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group ">

                            <div className="input-group-prepend">
                                <select className="custom-select border-success" defaultValue={1}>
                               
                                    <option value={1}>20.000-50.000</option>
                                    <option value={2}>50.000-100.000</option>
                                    <option value={3}>Trên 100.000</option>
                                </select>
                                <select className="custom-select border-success" defaultValue={1}>
                              
                                    <option value={1}>Food</option>
                                    <option value={2}>Drink</option>
                                </select>

                            </div>
                            <input name="search" onKeyUp={this.onChange} type="text" className="form-control border-success" placeholder="I want to eat..." aria-label="Text input with dropdown button" />
                        </div>
                        <button onClick={this.onSubmit} className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                    </form>
                </div>
                <LogSign/>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        search: (keyword)=>{
            dispatch(actions.Search(keyword))
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(SubMenu)