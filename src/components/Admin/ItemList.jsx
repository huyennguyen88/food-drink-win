import React from 'react';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
import Item from './Item';
class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentWillMount(){
        this.props.fetchAPI();
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            products: nextProps.products
        })
    }
    render() {
        let {products} = this.state;
        let listProducts = products.map((p,i)=>{
            return(
                <Item product={p} key={i}/>
            )
        })
        return (
            <div className="">
                <table  className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Classify</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Description</th>
                    <th className="text-center">Option</th>
                </tr>
                </thead>
                <tbody>
                    {listProducts}
                </tbody>
            </table>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
      products: state.products
    }
}
  const mapDispatchToProps = (dispatch, props)=>{
    return{
      fetchAPI: () => {
        dispatch(actions.fetchProductsRequest());
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemList);