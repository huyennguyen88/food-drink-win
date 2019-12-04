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
import {connect} from 'react-redux'
import ItemDetail from '../ItemDetailPage/ItemDetail'
import UserProfile from '../UserProfile/UserProfile'
import ManagerProduct from '../Admin/Products/ManagerProduct'
import * as actions from './../../actions/index'
import ManagerUser from '../Admin/Users/ManagerUser'
import ManagerCategory from '../Admin/Categories/ManagerCategory'
import ManagerCart from '../Admin/Carts/ManagerCart'
import HistoryCart from '../Cart/HistoryCart'
class Homepage extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <Switch>
                    <Route path="/products/:id" component={ItemDetail} />
                    
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
                    <Route path="/admin/products">
                        <ManagerProduct/>
                    </Route>
                    <Route path="/admin/users">
                        <ManagerUser/>
                    </Route>
                    <Route path="/admin/categories">
                        <ManagerCategory/>
                    </Route>
                    <Route path="/admin/carts">
                        <ManagerCart/>
                    </Route>
                    <Route path="/historyCart">
                            <HistoryCart/>
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
const mapDispatchToProps = (dispatch)=>{
    return{
        getProduct:()=>{
            dispatch(actions.fetchProductsRequest())
        }
    }
}
export default connect(null,mapDispatchToProps)(Homepage)