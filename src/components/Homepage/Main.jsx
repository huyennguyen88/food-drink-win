import React from 'react';
import BigImage from './BigImage'
import TabList from './TabList'
import Pagination from './Pagination';
import ItemListHome from './ItemListHome';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
class Main extends React.Component {
  constructor (props){
    super(props)
    this.state ={
      bestRate :[],
      bestSale :[]
    }
    this.props.onloadRateProducts();
  }
  static getDerivedStateFromProps =(nextProps,preState)=>{
    if(nextProps.bestRate === preState.bestRate){
      return null
    }else{
      return {bestRate: nextProps.bestRate}
    }
  }
  render() {
    var {bestRate} = this.state
    console.log("be",bestRate)
    return (
      <div className="Main container">
        <div className="row">
          <BigImage/>
          <TabList/>
          <ItemListHome list = {bestRate}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    bestRate: state.bestRate
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
    onloadRateProducts: ()=>{
      dispatch(actions.bestRatingProductsRequest());
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps) (Main)