import React from 'react';
import BigImage from './BigImage'
import TabList from './TabList'
import Pagination from './Pagination';
import ItemListHome from './ItemListHome';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import ProductCategory from './ProductCategory';
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bestRate: [],
      bestSale: []
    }
    this.props.onloadRateProducts();
    this.props.loadMenu();
  }
  static getDerivedStateFromProps = (nextProps, preState) => {
    if (nextProps.bestRate === preState.bestRate) {
      return null
    } else {
      return { bestRate: nextProps.bestRate }
    }
  }
  render() {
    var { bestRate } = this.state
    return (
      <div >
        <div className="container" >
          <BigImage />
          <ProductCategory />
          <ItemListHome list={bestRate} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bestRate: state.bestRate,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onloadRateProducts: () => {
      dispatch(actions.bestRatingProductsRequest());
    },
    loadMenu: () => {
      dispatch(actions.categoriesRequest())
    },
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Main)