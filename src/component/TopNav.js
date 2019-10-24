import React from 'react';
import './TopNav.css';

class TopNav extends React.Component {
    render() {
        return (
            <div className="TopNav">
                <Menu />
            </div>
        );
    }
}
class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">
                        <img className="d-inline-block align-top" src="./image/logo.png"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-4">
                            <li className="h4 ml-4 nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="h4 ml-4 nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="h4 ml-4 nav-item">
                                <a className="nav-link" href="#">Food</a>
                            </li>
                            <li className="h4 ml-4 nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Drink</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopNav;