import React from 'react';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
import Cart from './Cart';
class CartList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Carts: []
        }
    }
    componentWillMount(){
        this.props.getCart()
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            Carts: nextProps.Carts
        })
    }
    render() {
        let sort = this.props.sortProductType
        let {Carts} = this.state;
        Carts.sort((a,b)=>{
            if(a.status < b.status) return -1;
            else if(a.status > b.status) return 1;
            return 0
        })
        let listCarts = Carts.map((c,i)=>{
            return(
                <Cart cart={c} key={i}/>
            )
        })
        return (
            <div className="">
                <table  className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Username</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Option</th>
                    <th className="text-center">Detail</th>
                </tr>
                </thead>
                <tbody>
                    {listCarts}
                </tbody>
            </table>
            </div>
        );
    }
}
const mapStateToProps = (nextProps)=>{
    return{
        Carts: nextProps.Adcart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getCart:()=>{
            dispatch(actions.getAdCart())
        },
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartList);