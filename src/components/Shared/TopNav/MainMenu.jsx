import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
export default class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {Style.Nav}>
                    <a href="abc" className="navbar-brand">
                        <img style = {Style.Img} className="d-inline-block align-top" alt="anh" src="./image/logo.png"></img>
                    </a>
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
                            <li className="h4 ml-4 nav-item">
                                <a className="nav-link" href="#abc">Food</a>
                            </li>
                            <li className="h4 ml-4 nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#abc" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Drink</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#abc">Action</a>
                                    <a className="dropdown-item" href="#abc">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#abc">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
const Style = {
    Img:{
        width:"70px",
        height:"70px"
    },
    Nav:{
        backgroundImage: "url(/covernav.png)"
    }
}