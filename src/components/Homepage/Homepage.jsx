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
} from 'react-router-dom';
import ItemDetail from '../ItemDetailPage/ItemDetail'
export default class Homepage extends Component {
    render() {
        return (

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
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>

                <Footer />
            </div>
        )
    }
}
