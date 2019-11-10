import React from 'react';
import Item from './Item'
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
class ItemList extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
  componentWillMount(){
    this.props.fetchAPI();    
  }
  render(){
    // var listItem = [0,1,2,3,4,5,6,7]
    if(this.props.state.products.length > 0){
      var {products} = this.props.state;
    
    var listItem = products.map((p,index)=>{
      return(
          <Item
            key={index}
            id ={p.id}
            name ={p.name}
            price ={p.price}
            quantity = {p.quantity}
            img={"/image/" + p.image}
            description ={p.description}
          />
      )
    })
  }
    // console.log(products)
    return (
      <div className="ItemList row my-4">
          {
              listItem.map((i,key)=>(<Item key={key} name="/image/dong2.gif"/>)    
              )
          }
      </div>
    );
  }

}
const mapStateToProps = (state)=>{
  return{
    state: state
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