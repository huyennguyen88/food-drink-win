import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import * as actions from '../../../actions/index'
import { connect } from "react-redux";
import MenuItem from './MenuItem';
class Menu extends Component {
    componentDidMount() {
        this.props.loadMenu();
    }
    render() {
        var { categories } = this.props
        var foodsCate = categories.filter((item) => {
            return item.classify === true
        })
        var drinksCate = categories.filter((item) => {
            return item.classify === false
        })
        var ListFoodcate = foodsCate.map((item, index) => {
            return <MenuItem key={index} name={item.name} />
        })
        var ListDrinkcate = drinksCate.map((item, index) => {
            return <MenuItem key={index} name={item.name} />
        })
        return (
            <div className="Menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={Style.Nav}>
                    <a href="abc" className="navbar-brand">
                        <img style={Style.Img} className="d-inline-block align-top" alt="anh" src="./image/logo.png"></img>
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
                            <li className="h4 ml-4 nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#abc" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Food</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {ListFoodcate}
                                </div>
                            </li>
                            <li className="h4 ml-4 nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#abc" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Drink</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {ListDrinkcate}
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
        categories: state.categories
    }

}
var mapDispatchToProps = (dispatch, state) => {
    return {
        loadMenu: () => {
            dispatch(actions.fetchCategoriesRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);