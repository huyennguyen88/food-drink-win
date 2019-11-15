import React from 'react'
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from  './../../../actions/index'
class LoginSign extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            token:''
        }
    }
    logOut = ()=>{
        // localStorage.removeItem('token');
        this.props.logOut();
        this.setState({
            token: ''
        })
    }
    onProfile = ()=>{

    }
    render() {
        let token = JSON.parse(localStorage.getItem('token'));
        return (
            <div className="d-flex flex-row justify-content-end">
                <CartButton/>
                {token === null?
                    <>
                        <div className="d-flex mx-2">
                            <Link to="/login"><button type="button" className="btn btn-warning" >Login</button></Link>
                        </div>
                        <div className="d-flex ">
                            <Link to="/signup"><button type="button" className="btn btn-info" >Sign up</button></Link>
                        </div>
                    </>
                :
                    <>
                    <div className="d-flex mx-2">
                            <Link to="/profile" ><button type="button" className="btn btn-primary" onClick={this.onProfile}>Profile</button></Link>
                    </div>
                    <div className="d-flex ">
                            <Link to="/" onClick={this.logOut}><button type="button" className="btn btn-danger" >Log out</button></Link>
                    </div>
                    
                    </>
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        state: state
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        logOut: () => {
            return dispatch(actions.logOut());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginSign)