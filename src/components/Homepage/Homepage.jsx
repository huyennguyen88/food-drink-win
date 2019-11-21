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
import {connect} from 'react-redux'
import ItemDetail from '../ItemDetailPage/ItemDetail'
import UserProfile from '../UserProfile/UserProfile'
import ManagerProduct from '../Admin/Products/ManagerProduct'
import * as actions from './../../actions/index'
import ManagerUser from '../Admin/Users/ManagerUser'
class Homepage extends Component {
    constructor(props){
        super(props)
        this.state = {
            token: ''
        }
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'));
        // this.props.watchProfile(token);
    }
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
        watchProfile: (token) => {
            dispatch(actions.profileRequest(token));
        },
    }
}
export default connect(null,null)(Homepage)