import React, { Component } from 'react'
import TopNav from '../Shared/TopNav/TopNav'
import Main from './Main'
import Footer from '../Shared/Footer/Footer'
import Login from '../Shared/TopNav/Loginpage/Login'
import Signup from '../Shared/TopNav/Loginpage/Signup'
import CartPage from '../Cart/CartPage'
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';
import ItemDetail from '../ItemDetailPage/ItemDetail'
import UserProfile from '../UserProfile/UserProfile'
export default class Homepage extends Component {
    constructor(props){
        super(props)
        this.state = {
            token: ''
        }
    }
    componentDidMount(){
    }
    render() {
        // let token = JSON.parse(localStorage.getItem('token'));
        // console.log(token)
        return (
            <Router>
            <div>
                <TopNav changepage={this.whichpages} />
                <Switch>
                    <Route path="/products/:id" component={ItemDetail} >
                    </Route>
                    <Route path="/cart">
                        <CartPage/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/profile">
                        <UserProfile/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
                <Footer />
            </div>
            </Router>
        )
    }
}
