import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
import img from '../../image/avatar.jpg'
import HistoryCartList from './HistoryCartList'
class HistoryCart extends Component {
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'))
        this.props.getCarts(token);
    }
    render() {
        return (
            <div className="container">
            <div className="page-header">
                <h1 style ={{textAlign: "center",margin: "3% 0"}}>History Cart</h1>
            </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="">
                            <table  className="table table-bordered table-hover">
                                <thead>
                                  <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Cart Details</th>
                                    <th className="text-center">Status</th>
                                 </tr>
                                 </thead>
                                 <tbody className = "h4 ml-4 nav-item dropdown">
                                     <HistoryCartList/>
                                 </tbody>
                             </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getCarts: (token) => {
            dispatch(actions.historyCartReq(token));
      }
    }
  }
export default connect(null,mapDispatchToProps)(HistoryCart)