import React from 'react';
import Item from './Item'
import { connect } from 'react-redux'
class ItemList extends React.Component {
  render() {
    var { products } = this.props;
    if (products.length > 0) {
      var listItem = products.map((p, index) => {
        return <Item id={p.id} name={p.name} price={p.price} img="./image/dong2.gif" description={p.description}/>
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