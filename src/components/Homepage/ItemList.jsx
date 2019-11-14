import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'
class ItemList extends React.Component {
  constructor(props){
    super(props)
 
    this.state  ={
      products : this.props.products
    }
  }
  componentWillMount(){
    this.props.fetchAPI();    
  }
  componentDidMount(){
    
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
         {listItem}
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, null)(ItemList);