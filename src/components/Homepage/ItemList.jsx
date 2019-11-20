import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'
class ItemList extends React.Component {
  constructor(props){
    super(props)
    
    this.state  ={
      products : []
    }
  }
  
  componentWillReceiveProps(nextProps){

    this.setState({
      products: nextProps.products
    })
  }
  render() {
    // console.log(this.state);
    var {products} = this.state
    if (products.length > 0) {
      var listItem = products.map((p, index) => {
        return <Item key={index} id={p.id} name={p.name} price={p.price} img={p.image} description={p.description}/>
      })
    }
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
