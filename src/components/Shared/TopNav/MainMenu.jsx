import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import { connect } from "react-redux";
import AdminMenuItem from './AdminMenuItem';
import logo from './../../../image/logo.png'
import SubMenu from './SubMenu';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                token: '',
                role: null,
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({
                user: {
                    token: nextProps.user.authentication_token,
                    role: nextProps.user.role
                }
            })
        }
        else {
            this.setState({
                user: {
                    token: '',
                    role: null
                }
            })
        }
    }
    render() {
        var { user } = this.state

        var manager = ["Products", "Categories", "Users", "Carts"]
        var managerList = manager.map((item, index) => {
            return <AdminMenuItem key={index} name={item} />
        })
        return (
            <div className="Menu">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={Style.Nav}>
                        <Link to="/" className="navbar-brand">
                            <img style={Style.Img} className="d-inline-block align-top" alt="anh" src={logo}></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-4">
                                <li className="h4 ml-4 nav-item active">
                                    <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="h4 ml-4 nav-item">
                                    <a className="nav-link" href="#abc">About</a>
                                </li>
                                <li style={{ visibility: user.token && user.role === 1 ? "visible" : "hidden" }} className="h4 ml-4 nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#abc" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-user-cog"></i> Admin</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {managerList}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    
                </div>

            </div>
        );
    }
}
const Style = {
    Img: {
        width: "70px",
        height: "70px"
    },
    Nav: {
        backgroundImage: "url(/covernav.png)"
    }
}
var mapStateToProps = (state) => {
    return {
        user: state.user,
    }

}
export default connect(mapStateToProps, null)(Menu);