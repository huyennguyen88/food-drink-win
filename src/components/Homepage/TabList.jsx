import React from 'react';
import ItemList from './ItemList';
import * as actions from '../../actions/index'
import { connect } from "react-redux";
class TabList extends React.Component {
  ChooseFood =()=>{
    this.props.onChooseFood();
  }
  ChooseDrink=()=>{
    this.props.onChooseDrink();
  }
  componentDidMount(){
    this.props.onChooseFood();
  }
  render() {
    return (
      <div className="">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active h4 text-danger" id="food-tab" data-toggle="tab" href="#food" role="tab" aria-controls="food" aria-selected="true" onClick={this.ChooseFood}>Food</a>
          </li>
          <li className="nav-item">
            <a className="nav-link h4 text-success" id="drink-tab" data-toggle="tab" href="#drink" role="tab" aria-controls="drink" aria-selected="false" onClick={this.ChooseDrink}>Drink</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="food" role="tabpanel" aria-labelledby="food-tab">
            <ItemList />
          </div>
          <div className="tab-pane fade" id="drink" role="tabpanel" aria-labelledby="drink-tab">
            <ItemList />
          </div>
        </div>
      </div>
    );
  }

}
const mapStateToProps = state =>{
  return{

  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
    onChooseFood: ()=>{
      dispatch(actions.fetchFoodsRequest());
    },
    onChooseDrink: ()=>{
      dispatch(actions.fetchDrinksRequest());
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps) (TabList);
