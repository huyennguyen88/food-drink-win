import React from 'react';
import ItemCartList from './ItemCartList';
import OrderCheck from './OrderCheck';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'

class CartPage extends React.Component {
    componentWillMount (){
        let token= JSON.parse(localStorage.getItem('token'))
        this.props.getCart(token)
    }
    render() {
        return (
            <div >
                <h2>My order</h2>
                <div className="row">
                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="p-2 px-3 text-uppercase">Product</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Price</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Quantity</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Save</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Remove</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ItemCartList/>
                                </tbody>
                            </table>
                        </div>
                        <OrderCheck/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCart: (id) =>{
            dispatch(actions.getCartReq(id))
        }
    }
  }
  export default connect(null, mapDispatchToProps)(CartPage);