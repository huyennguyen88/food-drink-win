import React from 'react'
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
export default class Login extends React.Component {

    render() {
        return (
            <div className="d-flex flex-row justify-content-end">
                <CartButton/>
                <div className="d-flex mx-2">
                    <Link to="/login"><button type="button" className="btn btn-warning" >Login</button></Link>
                </div>
                <div className="d-flex ">
                    <Link to="/signup" > <button type="button" className="btn btn-info" >Sign up</button></Link>
                </div>
            </div>
        )
    }
}
