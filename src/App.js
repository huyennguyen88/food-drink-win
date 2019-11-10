import React from 'react';
import {connect} from 'react-redux'
import * as actions from './actions/index'
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from './actions/index'
import Homepage from './components/Homepage/Homepage'
import { create } from 'domain';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount(){
    // this.props.fetchAPI();
    // this.setState({
    //   products: this.props.products
    // })
  }
  render() {
    return (
      <Router>
        <div className="App container">
          <Homepage />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    products: state
  }
}
const mapDispatchToProps = (dispatch, props)=>{
  return{
    fetchAPI: () => {
      dispatch(actions.fetchProductsRequest());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
