import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
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
        this.props.fetchCategories()
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            products: nextProps.products
        })
        
    }
    render() {
        let sort = this.props.sortProductType
        let {products} = this.state;
        console.log(products)
        let {searchKeywordProduct} = this.props
        products = products.filter((p,i)=>{
            return p.name.toLowerCase().indexOf(searchKeywordProduct.toLowerCase()) !== -1;
        })
        if(sort.by === 'name'){
            products.sort((a,b)=>{
                a.name = a.name.toLowerCase();
                b.name = b.name.toLowerCase();
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            })
        }
        else if(sort.by === 'price'){
            products.sort((a,b)=>{
                if(a.price > b.price) return sort.value;
                else if(a.price < b.price) return -sort.value;
                else return 0;
            })
        }
        let listProducts = products.map((p,i)=>{
            return(
                <Item product={p} key={i}/>
            )
        })
        

        return (
            <div className="my-products">
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
      products: state.products,
      searchKeywordProduct: state.search,
      sortProductType: state.sort
    }
}
  const mapDispatchToProps = (dispatch, props)=>{
    return{
      fetchAPI: () => {
        dispatch(actions.fetchProductsRequest());
      },
      fetchCategories: ()=>{
        dispatch(actions.categoriesRequest())
      },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemList);